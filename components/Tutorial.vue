<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <NuxtLink
      v-for="post in posts"
      :key="post.id"
      :to="post.slug"
      class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ post['Meta Title'] }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data: () => ({
    posts: [],
  }),
  async fetch() {
    const endpoint = '/.netlify/functions/serverless-graphql'
    const graphqlQuery = {
      query: `query allPages { 
        getPages {
          id
          page_title
          slug
        }
      }`,
    }

    const response = await this.$axios({
      url: endpoint,
      method: 'post',
      data: graphqlQuery,
    })
    if (!response.errors) {
      this.posts = response.data.data.getPages
    }
  },
}
</script>
