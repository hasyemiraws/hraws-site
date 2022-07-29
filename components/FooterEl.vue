<template>
  <div class="footer__about--container">
    <div class="footer__about--info">
      <div class="footer__about--social">
        <a target="_blank" href="https://twitter.com/hasyemiraws">
          <i class="fab fa-twitter"></i>
        </a>
        <a target="_blank" href="https://instagram.com/hasyemiraws">
          <i class="fab fa-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCzvyjUsomu2sdTbuBJHA9ag"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a target="_blank" href="https://codepen.io/hasyemiraws">
          <i class="fab fa-codepen"></i>
        </a>
      </div>
      <small class="footer__about--copyright"
        >Made with
        <a
          class="link link__dotted"
          href="https://gridsome.org/"
          target="_blank"
          >Gridsome</a
        >
        and many hours of procrastinating.</small
      >
    </div>
  </div>
</template>

<style>
.footer__about--container {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.footer__about--copyright {
  font-family: neue-haas-unica, sans-serif;
  font-size: 11px;
}

.footer__about--info {
  max-width: 90%;
  padding: 10px;
}

.footer__about--social {
  font-size: 1.5em;
}

.footer__about--social a {
  color: #101010;
  margin-right: 15px;
}

.link__dotted {
  border-bottom: 1px dashed #202020;
}
</style>
