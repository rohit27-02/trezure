// schemas/Subcategory.js

const subcategory =  {
    name: 'subcategory',
    title: 'Subcategory',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Subcategory title (e.g., Sofa Sets, Dining Sets)',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'imageWithAlt' }],
        description: 'Array of images for this subcategory',
      },
    ],
  };
  export default subcategory;