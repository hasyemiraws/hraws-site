<template>
  <NotionRenderer
    :block-map="blockMap"
    :block-overrides="blockOverrides"
    :page-link-options="pageLinkOptions"
    full-page
    prism
    katex
  />
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  async asyncData() {},
  data() {
    return {
      blockMap: {},
      blockOverrides: { code: 'CustomCode' },
      pageLinkOptions: { component: 'NuxtLink', href: 'to' },
    }
  },
  async fetch() {
    const response = await this.$axios.get(
      'http://localhost:9999/.netlify/functions/notion-get-page-by-id?pageId=43666a26-fb5e-49e5-88fe-7228ed1ccf9e'
    )
    if (!response || response.error) {
      return error({ statusCode: 404, message: 'Post not found' })
    }
    this.blockMap = response.data
  },
}
</script>

<style>
@import 'vue-notion/src/styles.css';
</style>
