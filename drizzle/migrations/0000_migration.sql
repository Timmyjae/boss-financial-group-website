CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(btrim(full_name)) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  subject text CHECK (subject IS NULL OR char_length(subject) <= 150),
  message text NOT NULL CHECK (char_length(btrim(message)) BETWEEN 1 AND 2000),
  notification_status text NOT NULL DEFAULT 'pending' CHECK (notification_status IN ('pending','sent','failed','not_configured')),
  notification_sent_at timestamptz,
  notify_token uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_submissions TO anon;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit pending enquiries"
ON public.contact_submissions FOR INSERT TO anon
WITH CHECK (notification_status = 'pending' AND notification_sent_at IS NULL);

-- Records the email result once, only for the server that knows the one-time token it generated.
CREATE OR REPLACE FUNCTION public.mark_contact_notification(_id uuid, _token uuid, _status text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF _status NOT IN ('sent','failed','not_configured') THEN
    RETURN false;
  END IF;
  UPDATE public.contact_submissions
  SET notification_status = _status,
      notification_sent_at = CASE WHEN _status = 'sent' THEN now() ELSE NULL END,
      notify_token = NULL
  WHERE id = _id
    AND notify_token IS NOT NULL
    AND notify_token = _token
    AND notification_status = 'pending'
    AND created_at > now() - interval '10 minutes';
  RETURN FOUND;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.mark_contact_notification(uuid, uuid, text) FROM public;
GRANT EXECUTE ON FUNCTION public.mark_contact_notification(uuid, uuid, text) TO anon, service_role;