import { z } from "zod";

// Shared by the Contact form now and the server-side save in Milestone 5.
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name.").max(100, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(255, "Email must be 255 characters or fewer."),
  subject: z.string().trim().max(150, "Subject must be 150 characters or fewer.").optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(2000, "Message must be 2,000 characters or fewer."),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Placeholder until Milestone 5 connects Lovable Cloud. It never claims a saved enquiry.
 * Replace the body with the real server function call; the form handles both results.
 */
export async function submitContact(_input: ContactInput): Promise<{ status: "saved" | "not_connected" }> {
  await new Promise((r) => setTimeout(r, 600));
  return { status: "not_connected" };
}
