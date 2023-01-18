import { client } from '~~/server/util/graphql'

export default defineEventHandler(async (event) => {
  const { query, variables } = await readBody(event)

  return await client({
    query,
    variables,
  })
})
