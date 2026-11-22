import { createServerFn } from "@tanstack/react-start";

// Same check as /api/public/health, but through a TanStack server function.
export const getServerHealth = createServerFn({ method: "GET" }).handler(async () => ({
  ok: true,
  serverTime: new Date().toISOString(),
}));
