import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import collection from './schemas/collection'
import subcategory from './schemas/subcategory'
import imagewithalt from './schemas/image'

export const schema = {
  types: [post, author, category, blockContent,collection,subcategory,imagewithalt],
}
