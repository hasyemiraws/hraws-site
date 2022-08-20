<template>
  <DefaultLayout>
    <div class="container">
      <NotionRenderer
        :block-map="blockMap"
        :block-overrides="blockOverrides"
        :page-link-options="pageLinkOptions"
        full-page
        prism
        katex
      />
    </div>
  </DefaultLayout>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism.css'
import DefaultLayout from '~/layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      blockMap: {},
      blockOverrides: { code: 'CustomCode' },
      pageLinkOptions: { component: 'NuxtLink', href: 'to' },
    }
  },
  async fetch() {
    const blockMap = await this.$notion.getPageBlocks(
      this.$route.params.pageId.replaceAll('-', '')
    )
    if (!blockMap || blockMap.error) {
      return error({ statusCode: 404, message: 'Post not found' })
    }
    this.blockMap = blockMap
  },
}
</script>

<style>
@import 'vue-notion/src/styles.css';
</style>
