"use server";

import * as z from "zod";
import { Resetschema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

export const reset = async (values: z.infer<typeof Resetschema>) => {
  const validatedFields = Resetschema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email" };
  }
  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset Email sent" };
};
