import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const ok = { name: "Jane Doe", email: "jane@example.com", subject: "", message: "Hello" };
describe("contact form rules", () => {
  it("accepts a valid enquiry with no subject", () => expect(contactSchema.safeParse(ok).success).toBe(true));
  it("requires full name", () => expect(contactSchema.safeParse({ ...ok, name: " " }).success).toBe(false));
  it("requires a valid email", () => expect(contactSchema.safeParse({ ...ok, email: "nope" }).success).toBe(false));
  it("requires a message", () => expect(contactSchema.safeParse({ ...ok, message: "" }).success).toBe(false));
});
