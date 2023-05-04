import {z} from 'zod'

export const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email(),
    password: z.string().max(120),
    admin: z.boolean().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

export const userSchemaRequest  = userSchema.omit({id: true, createdAt: true, updatedAt: true, deletedAt: true })

export const userSchemaResponse = userSchema.omit({password: true})

export const listUserSchema = z.array(userSchemaResponse)