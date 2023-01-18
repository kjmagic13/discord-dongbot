import { DocumentNode, print } from 'graphql'
import { $fetch } from 'ofetch'
import { Query } from '~~/types/contentful'

export async function client({
  query,
  variables,
}: {
  query: DocumentNode | string
  variables?: Record<string, any>
}) {
  query = typeof query !== 'string' ? print(query) : query

  const { data } = await $fetch<{ data: Query }>(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    }
  )

  return data
}
