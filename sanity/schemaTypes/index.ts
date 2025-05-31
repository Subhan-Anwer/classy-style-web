import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { orderType } from './orderType'
import { productType } from './productType'
import { salesType } from './salesType'
import { contactType } from './contactType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, orderType, productType, salesType, contactType],
}
