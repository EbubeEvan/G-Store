import type { CollectionConfig } from 'payload';

export const Customers: CollectionConfig = {
  slug: 'customers',
  admin: {
    useAsTitle: 'First Name',
  },
  auth: true,
  fields: [
    {
      name: 'First Name',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'Last Name',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'Email',
      type: 'text',
      required: true,
    },
    {
      name: 'Number',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'Address',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'Password',
      type: 'text',
      required: true,
    },
    {
      name: 'streetAddress',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'appartment',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'town',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'cart',
      type: 'group',
      fields: [
        {
          name: 'items',
          label: 'Items',
          type: 'array',
          interfaceName: 'CartItems',
          fields: [
            {
              name: 'product',
              type: 'relationship',
              relationTo: 'products',
            },
            {
              name: 'quantity',
              type: 'number',
              min: 0,
              admin: {
                step: 1,
              },
            },
            {
              name: 'price',
              type: 'number',
              min: 0,
              admin: {
                step: 1,
              },
            },
            {
              name: 'subTotal',
              type: 'number',
              min: 0,
              admin: {
                step: 1,
              },
            },
          ],
        },
      ],
      admin: {
        readOnly: true,
      },
    },
  ],
};
