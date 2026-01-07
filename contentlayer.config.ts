import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Insight = defineDocumentType(() => ({
  name: 'Insight',
  filePathPattern: `insights/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    jurisdiction: { type: 'list', of: { type: 'string' }, required: true },
    featured: { type: 'boolean', default: false },
    sourceLinks: { type: 'json', required: false }, // [{ title, url, type }]
    seoTitle: { type: 'string', required: false },
    seoDescription: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (d) => d._raw.flattenedPath.split('/').pop()!,
    },
    url: {
      type: 'string',
      resolve: (d) => `/insights/${d._raw.flattenedPath.split('/').pop()}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Insight],
})
