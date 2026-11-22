import { createFileRoute } from "@tanstack/react-router";

// Deployment health check (Milestone 1 exit test): proves server code runs on the host.
// Returns no private data.
export const Route = createFileRoute("/api/public/health")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { ok: true, service: "boss-financial-group", serverTime: new Date().toISOString() },
          { headers: { "cache-control": "no-store" } },
        ),
    },
  },
});
