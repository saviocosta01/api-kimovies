import {z} from 'zod'
import { addressSchemaRequest, adressSchema } from './address.schema'
import { categorySchema } from './categories.schema'



export const realEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value: z.string(),
    size: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    addressId: z.number(),
    categoryId: z.number()
})


export const createRealEstateSchema = z.object({
    id: z.number(),
     value: z.string().or(z.number().positive()),
    size: z.number().int().positive(),
    address: adressSchema,
    category: categorySchema,
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
})

export const createRealEstateSchemaRequest = z.object({
    value: z.string().or(z.number().positive()),
    size: z.number().int().positive(),
    address: addressSchemaRequest,
    categoryId: z.number(),
})

export const createRealEstateSchemaData = createRealEstateSchemaRequest.omit({address: true})

export const listRealEstatesSchema = z.array(createRealEstateSchema)
