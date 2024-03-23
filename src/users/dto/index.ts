import { z } from "zod";
import { Role } from "@prisma/client";

const UserModel = z.object({
    id: z.number().int(),
    email: z.string().email(),
    password: z.string(),
    role: z.nativeEnum(Role),
});

export const createUserSchema = UserModel.omit({ id: true, role: true });
export type CreateUserDto = z.infer<typeof createUserSchema>;
