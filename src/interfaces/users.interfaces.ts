import {z} from 'zod'
import { listUserSchema, loginUserSchema, updateUserSchema, userSchema, userSchemaRequest, userSchemaResponse } from '../schemas/users.schemas'
import { DeepPartial } from 'typeorm'

export type TUsers = z.infer<typeof userSchema>

export type TUsersRequest = z.infer<typeof userSchemaRequest>

export type TUserResponse = z.infer<typeof userSchemaResponse>

export type TListUsers = z.infer<typeof listUserSchema>

export type TUpdateUsersRequest = z.infer<typeof updateUserSchema>

export type TUsersUpdate = DeepPartial<TUpdateUsersRequest>

export type TLoginUser = z.infer<typeof loginUserSchema>