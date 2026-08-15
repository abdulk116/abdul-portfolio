import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations/contact";
import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const result =
      contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please check the form fields.",
          errors:
            result.error.flatten()
              .fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const {
      name,
      email,
      message,
      website,
    } = result.data;

    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    const contactEmail =
      process.env.CONTACT_EMAIL;

    const contactFromEmail =
      process.env.CONTACT_FROM_EMAIL;

    if (!contactEmail || !contactFromEmail) {
      console.error(
        "Contact email configuration is missing"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Contact service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const { error } =
      await resend.emails.send({
        from:
          `Portfolio Contact <${process.env.CONTACT_FROM_EMAIL}>`,

        to: contactEmail,

        replyTo: email,

        subject:
          `Portfolio message from ${name}`,

        react: ContactEmail({
          name,
          email,
          message,
        }),
      });

    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send your message right now.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}