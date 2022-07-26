<template>
  <div>
    <HeaderEl />
    <div class="layout-wrapper mx-7 xs:mx-20 lg:mx-auto xl:mx-auto">
      <div class="main">
        <slot />
      </div>
    </div>
    <FooterEl />
  </div>
</template>
<script>
import HeaderEl from '~/components/HeaderEl'
import FooterEl from '~/components/FooterEl'

export default {
  components: {
    HeaderEl,
    FooterEl,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.main {
  padding-top: 40px;
}

.layout-wrapper {
  max-width: 980px;
  height: 100%;
}

@media screen and (min-width: 640px) {
  .main {
    padding-top: 80px;
  }
}
</style>
