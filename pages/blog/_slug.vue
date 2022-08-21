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
  async asyncData({ params, $notion }) {
    const blockMap = await $notion.getPageBlocks(
      params.pageId.replaceAll('-', '')
    )
    if (!blockMap || blockMap.error) {
      return error({ statusCode: 404, message: 'Post not found' })
    }
    return { blockMap }
  },
  data() {
    return {
      blockMap: {},
      blockOverrides: { code: 'CustomCode' },
      pageLinkOptions: { component: 'NuxtLink', href: 'to' },
    }
  },
}
</script>

<style>
@import 'vue-notion/src/styles.css';
</style>
