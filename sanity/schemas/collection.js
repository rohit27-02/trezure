// schemas/MainCategory.js

const collection = {
    name: 'mainCategory',
    title: 'Main Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Main category title (e.g., Home, Outdoor, Office)',
      },
      {
        name: 'subcategories',
        title: 'Subcategories',
        type: 'array',
        of: [{ type: 'subcategory' }],
        description: 'List of subcategories within this main category',
      },
    ],
  };
  export default collection;