import { marked } from 'marked'

export const useMarkdown = (body?: string) => (body ? marked.parse(body) : '')
