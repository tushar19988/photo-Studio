import { z } from "zod";

export const EnquirySchema = z.object({
  name: z.string().min(2, "Full Name is required (minimum 2 characters)"),
  phone: z
    .string()
    .min(10, "Valid 10-digit phone number is required")
    .regex(/^[0-9+ \-]+$/, "Phone number format is invalid"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  eventType: z.enum([
    "Wedding",
    "Engagement",
    "Birthday",
    "Pre-Wedding",
    "Event",
    "Portrait",
    "Other",
  ]),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  guests: z.string().optional(),
  budget: z.string().optional(),
  packageId: z.string().optional(),
  message: z.string().max(2000, "Message cannot exceed 2000 characters").optional(),
});

export type EnquiryInput = z.infer<typeof EnquirySchema>;

export const AdminLoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type AdminLoginInput = z.infer<typeof AdminLoginSchema>;

export const PortfolioProjectSchema = z.object({
  title: z.string().min(2, "Title is required"),
  slug: z.string().min(2, "Slug is required"),
  categoryId: z.string().min(1, "Category is required"),
  location: z.string().optional(),
  eventDate: z.string().optional(),
  description: z.string().optional(),
  coverImage: z.string().url("Valid cover image URL is required"),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
});

export type PortfolioProjectInput = z.infer<typeof PortfolioProjectSchema>;
