import {z} from 'zod'
import { listUserSchema, userSchema, userSchemaRequest, userSchemaResponse } from '../schemas/users.schemas'

export type TUsers = z.infer<typeof userSchema>

export type TUsersRequest = z.infer<typeof userSchemaRequest>

export type TUserResponse = z.infer<typeof userSchemaResponse>

export type TListUsers = z.infer<typeof listUserSchema>