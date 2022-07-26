const { Client } = require('@notionhq/client')

// Initializing a client
const notion = new Client({
  auth: process.env.NUXT_ENV_NOTION_KEY,
})
const databaseId = process.env.NUXT_ENV_NOTION_DB_ID
const getAllPages = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    })
    const resultData = response.results
    return resultData.map(({ id, properties }) =>
      transformResponse(id, properties)
    )
  } catch (err) {
    return err
  }
}

const getPageById = async (pageId) => {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 50,
    })
    const resultData = response.results
    return resultData
  } catch (err) {
    return err
  }
}

const transformResponse = (id, properties) => ({
  id,
  page_title: properties?.['Page Title']?.title[0]?.plain_text,
  slug: properties?.slug?.rich_text[0]?.plain_text,
})

exports.getAllPages = getAllPages
exports.getPageById = getPageById
