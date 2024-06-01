"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormValues) => {
  const senderName = formData.name;
  const senderEmail = formData.email;
  const subject = formData.subject;
  const message = formData.message;

  if (!validateString(senderName, 100)) {
    return {
      error:"Invalid sender name",
    };
  }
  if (subject) {
    if (!validateString(subject, 100)) {
      return {
        error:"Invalid subject",
      };
    }
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dzou3814@gmail.com",
    subject: `From |${senderName}| - Subject: |${subject}| - Email: |${senderEmail}|` || `New message from ${senderName}`,
    reply_to: senderEmail,
    text: message,
  });
};
