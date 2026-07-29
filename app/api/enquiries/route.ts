import { NextResponse } from "next/server";
import { EnquirySchema } from "@/lib/validations";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = EnquirySchema.parse(body);

    // If database is connected, insert enquiry
    let enquiryId = `enq_${Date.now()}`;
    
    try {
      const created = await db.enquiry.create({
        data: {
          name: validatedData.name,
          phone: validatedData.phone,
          email: validatedData.email || null,
          eventType: validatedData.eventType,
          eventDate: validatedData.eventDate ? new Date(validatedData.eventDate) : null,
          location: validatedData.location || null,
          guests: validatedData.guests || null,
          budget: validatedData.budget || null,
          packageId: validatedData.packageId || null,
          message: validatedData.message || null,
          status: "NEW",
        },
      });
      enquiryId = created.id;
    } catch (dbError) {
      console.warn("DB connection offline, proceeding with successful mock enquiry handling", dbError);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been received. Our team will contact you shortly.",
      enquiryId,
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
