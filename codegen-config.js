module.exports = {
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`]:
      {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
  },
  generates: {
    './types/contentful.d.ts': {
      plugins: ['typescript'],
      config: {
        // noExport: true,
      },
    },
  },
}
