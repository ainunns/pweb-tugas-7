import { CollectionConfig } from 'payload/types'

const Links: CollectionConfig = {
  slug: 'links',
  auth: false,
  admin: {
    useAsTitle: 'Link Shortener',
    defaultColumns: ['originalUrl', 'shortUrl'],
  },
  fields: [
    {
      'name': 'originalUrl',
      'label': 'Original URL',
      'type': 'text',
      'required': true,
    },
    {
      'name': 'shortUrl',
      'label': 'Short URL',
      'type': 'text',
      'required': true,
      'unique': true
    },
  ]
}

export default Links
