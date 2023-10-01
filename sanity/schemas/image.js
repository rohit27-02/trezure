// schemas/ImageWithAlt.js

const imagewithalt =  {
    name: 'imageWithAlt',
    title: 'Image with Alt Text',
    type: 'object',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
        description: 'Alternative text for the image (for accessibility)',
      },
    ],
  };
  export default imagewithalt;