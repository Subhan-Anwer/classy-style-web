"use server";

import { backendClient } from "@/sanity/lib/backendClient";
// import { revalidatePath } from "next/cache";

type Metadata = {
  name: string;
  phone: string;
  msg: string;
};

export async function createContactQuery(metadata: Metadata) {
  const { name, phone, msg } = metadata as Metadata;

  try {
    const query = await backendClient.create({
      _type: "contactQuery",
      name: name,
      phone: phone,
      msg: msg,
      date: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Failed to create Contact Query:", error);
    throw error;
  }
}
