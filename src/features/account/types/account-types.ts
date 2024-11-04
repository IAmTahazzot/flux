import { insertAccountSchema } from "@/db/schema/account";
import { z } from "zod";

export const schemaFromDrizzle = insertAccountSchema.pick({ name: true });
export type FormValues = z.input<typeof schemaFromDrizzle>;
