import {z} from 'zod'
import { categorySchema, categorySchemaRequest, listCategorySchema } from '../schemas/categories.schema'

export type TCategories = z.infer<typeof categorySchema>

export type TCategoriesRequest = z.infer<typeof categorySchemaRequest>


export type TListCategories = z.infer<typeof listCategorySchema>