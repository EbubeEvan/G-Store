import type { CollectionConfig } from 'payload';

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderedBy',
  },
  auth: true,
  fields: [
    {
      name: 'orderedBy',
      type: 'relationship',
      relationTo: 'customers',
      required: true,
    },
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'total',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          min: 0,
        },
        {
          name: 'quantity',
          type: 'number',
          min: 0,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'In Transit', value: 'in_transit' },
        { label: 'Delivered', value: 'delivered' },
      ],
      required: true,
      defaultValue: 'in_transit',
    },
  ],
};
