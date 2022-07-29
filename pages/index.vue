<template>
  <DefaultLayout>
    <section class="container hero--intro">
      <div class="hero--label">
        <h1 class="hero-title">
          <span>
            full time learner.<br />
            professional overthinker.<br />
            high functioning introvert.
          </span>
          <span class="post--more about-me--more">
            <NuxtLink to="me">
              <svg
                id="circular"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50
                      m -50, 0
                      a 50,50 0 1,0 100,0
                      a 50,50 0 1,0 -100,0"
                  />
                </defs>
                <text
                  id="brand--text"
                  fill="#000"
                  font-size="10"
                  font-family="neue-haas-unica"
                  font-weight="bold"
                  letter-spacing="10"
                  width="100"
                >
                  <textPath xlink:href="#circle">MORE ABOUT ME</textPath>
                </text>
              </svg>
            </NuxtLink>
          </span>
        </h1>
      </div>
    </section>
    <section class="container section pb-10 first-section">
      <h1 class="section--title">Blogs/</h1>
    </section>
    <hr />
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayout from '~/layouts/DefaultLayout.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    DefaultLayout,
  },
})
</script>
