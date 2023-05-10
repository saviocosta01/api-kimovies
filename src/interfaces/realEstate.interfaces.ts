import {z} from 'zod'
import { createRealEstateSchema, createRealEstateSchemaData, createRealEstateSchemaRequest, listRealEstatesSchema } from '../schemas/realEstate.schema'

export type TCreateRealEstateResponse = z.infer<typeof createRealEstateSchema>

export type TCreateRealEstateRequest = z.infer<typeof createRealEstateSchemaRequest>


export type TCreateRealEstateData = z.infer<typeof createRealEstateSchemaData>

export type TListRealEstates = z.infer<typeof listRealEstatesSchema>