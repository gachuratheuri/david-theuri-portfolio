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
    seoTitle: { type: 'string', required: false },
    seoDescription: { type: 'string', required: false }
  },
  computedFields: {
    slug: { type: 'string', resolve: (d) => d._raw.flattenedPath.split('/').pop()! },
    url: { type: 'string', resolve: (d) => `/insights/${d._raw.flattenedPath.split('/').pop()}` }
  }
}))

export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: `case-studies/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    lane: {
      type: 'enum',
      options: ['Tech/IT Transactions', 'Privacy/AI Governance', 'Telecom/Digital Regulation'],
      required: true
    },
    deliverables: { type: 'list', of: { type: 'string' }, required: true },
    outcomes: { type: 'list', of: { type: 'string' }, required: false },
    tools: { type: 'list', of: { type: 'string' }, required: false },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    featured: { type: 'boolean', default: false },
    seoTitle: { type: 'string', required: false },
    seoDescription: { type: 'string', required: false }
  },
  computedFields: {
    slug: { type: 'string', resolve: (d) => d._raw.flattenedPath.split('/').pop()! },
    url: { type: 'string', resolve: (d) => `/portfolio/${d._raw.flattenedPath.split('/').pop()}` }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Insight, CaseStudy]
})
