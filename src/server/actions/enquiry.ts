"use server";

import { db } from "@/lib/db";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  eventType: z.string().min(1, "Event type is required"),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  guests: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
});

export type EnquiryFormState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitEnquiry(
  prevState: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  const rawData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    eventType: formData.get("eventType") as string,
    eventDate: formData.get("eventDate") as string,
    location: formData.get("location") as string,
    guests: formData.get("guests") as string,
    budget: formData.get("budget") as string,
    message: formData.get("message") as string,
  };

  const parsed = enquirySchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Please fix the validation errors in the form.",
    };
  }

  try {
    await db.enquiry.create({
      data: {
        name: parsed.data.name,
        phone: parsed.data.phone,
        email: parsed.data.email || null,
        eventType: parsed.data.eventType,
        eventDate: parsed.data.eventDate ? new Date(parsed.data.eventDate) : null,
        location: parsed.data.location || null,
        guests: parsed.data.guests || null,
        budget: parsed.data.budget || null,
        message: parsed.data.message || null,
        status: "NEW",
      },
    });

    return {
      success: true,
      message: "Thank you. Your enquiry has been received. Our team will contact you shortly.",
    };
  } catch (error) {
    console.error("Failed to submit enquiry:", error);
    return {
      success: false,
      message: "Failed to process enquiry. Please try again or call us directly at 097243 22046.",
    };
  }
}
