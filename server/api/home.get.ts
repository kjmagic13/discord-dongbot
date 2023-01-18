import { client } from '../util/graphql'
import { gql } from 'graphql-tag'

export default defineEventHandler(async (event) => {
  const { homeCollection } = await client({
    query: gql`
      {
        homeCollection(limit: 1, order: sys_publishedAt_DESC) {
          items {
            sys {
              id
            }
            title
            logo {
              url
            }
            description
            buttonText
            buttonUrl
            body
          }
        }
      }
    `,
  })

  const [home] = homeCollection?.items ?? []

  return home
})
