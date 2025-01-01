import type { CollectionConfig } from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'quantityInStock',
      type: 'number',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Size Options',
          fields: [
            {
              name: 'size',
              type: 'select',
              options: [
                { label: 'Extra Small (XS)', value: 'XS' },
                { label: 'Small (S)', value: 'S' },
                { label: 'Medium (M)', value: 'M' },
                { label: 'Large (L)', value: 'L' },
                { label: 'Extra Large (XL)', value: 'XL' },
              ],
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'freeDelivery',
      type: 'checkbox',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      required: true,
    },
    {
      name: 'promo',
      type: 'checkbox',
      label: 'Promo Active?',
      admin: {
        description: 'Enable if the product is on promo.',
      },
    },
    {
      name: 'percentageOff',
      type: 'number',
      label: 'Percentage Off',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.promo === true, // Show only if promo is active
        description: 'Specify the percentage discount for the promo.',
      },
      min: 0,
      max: 100,
    },
    {
      name: 'voucher',
      type: 'checkbox',
      label: 'Voucher Required?',
      admin: {
        condition: (_, siblingData) => siblingData?.promo === true, // Show only if promo is active
        description: 'Enable if a voucher is required for the promo.',
      },
    },
  ],
  upload : {
    disableLocalStorage: true,
    mimeTypes: ['image/*']
  }
};
