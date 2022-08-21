<template>
  <header ref="header">
    <div class="header__inner container mx-auto max-w-screen-xl z-10 relative">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="justify-self-center type-link">
          <span class="logo-type">
            h<span class="hide-mobile">asyemi</span>raws
          </span>
        </NuxtLink>
        <nav class="nav__desktop">
          <transition
            mode="out-in"
            appear
            enter-active-class="animate__animated animate__fadeIn animate__fast"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
          >
            <ul class="nav__item">
              <li>
                <NuxtLink to="/all-post/" title="tulisan">
                  {{ $t('menu.tulisan') }}
                </NuxtLink>

                <ul class="nav__subitem">
                  <li>
                    <NuxtLink to="/anotasi-daily/" title="anotasi daily">
                      anotasi daily
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/c/hasyemiraws"
                  title="youtube"
                  >{{ $t('menu.youtube') }}</a
                >
              </li>
              <li>
                <NuxtLink to="/sedang-membaca/" title="sedang baca">{{
                  $t('menu.membaca')
                }}</NuxtLink>
                <ul class="nav__subitem">
                  <li>
                    <NuxtLink to="sedang-membaca"> sedang-membaca </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/membaca/wrap-up/2021">
                      2021 reading wrap
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li>
                <NuxtLink to="/now/" title="now">{{
                  $t('menu.sekarang')
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/tentang/" title="tentang">{{
                  $t('menu.tentang')
                }}</NuxtLink>
              </li>
            </ul>
          </transition>
        </nav>

        <span class="hamburger-menu" @click="showMenu">
          <hamburger-menu />
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import HamburgerMenu from '@@/components/HamburgerMenu'

export default {
  components: {
    HamburgerMenu,
  },
  data() {
    return {}
  },
  methods: {
    showMenu() {
      const header = this.$refs.header
      const menuOverlay = document.querySelector('.menu__overlay')
      const windowWidth = window.innerWidth

      let inAnimation = 'animate__slideInRight'
      let outAnimation = 'animate__slideOutRight'

      if (windowWidth < 730) {
        inAnimation = 'animate__fadeIn'
        outAnimation = 'animate__fadeOut'
      }

      const hideMenu = () => {
        header.classList.remove('menu-active')
        menuOverlay.style.display = 'none'

        menuOverlay.removeEventListener('webkitAnimationEnd', hideMenu)
        menuOverlay.removeEventListener('animationend', hideMenu)
      }

      if (header.classList.contains('menu-active')) {
        menuOverlay.classList.add(outAnimation)
        menuOverlay.classList.remove(inAnimation)

        menuOverlay.addEventListener('webkitAnimationEnd', hideMenu)
        menuOverlay.addEventListener('animationend', hideMenu)
      } else {
        menuOverlay.style.display = 'block'
        menuOverlay.classList.remove(outAnimation)
        menuOverlay.classList.add(inAnimation)
        header.classList.add('menu-active')
      }
    },
  },
}
</script>

<style scoped>
header {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 20px;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 10;
}

.header__inner {
  max-width: 1080px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.header__inner > div {
  flex: 1;
}

header.scrolled > div,
header.scrolled > div > div {
  height: 50px;
}

.logo-type {
  font-family: neue-haas-unica, sans-serif;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 28px;
}

.menu-active .logo-type {
  color: #fff;
}

.type-link,
.hamburger-menu {
  -webkit-transition: transform 0.4s ease;
  transition: transform 0.4s ease;
}

header.scrolled .type-link,
header.scrolled .hamburger-menu {
  transform: scale(0.8);
}

.filler {
  width: 60px;
}

.nav__desktop,
.hide-mobile {
  display: none;
}

@media screen and (min-width: 640px) {
  header {
    margin-top: 60px;
  }

  .header__inner {
    padding-left: 0;
    padding-right: 0;
  }

  .nav__desktop {
    display: flex;
    align-items: center;
  }

  .nav__item {
    display: inline-flex;
    font-family: neue-haas-unica, sans-serif;
    font-size: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .nav__item > li {
    position: relative;
  }

  .nav__subitem {
    position: absolute;
    visibility: hidden;
    width: 185px;
    border-radius: 3px;
    border: 1px solid #202020;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: white;
    padding: 5px 0px;
    box-shadow: -2px 2px 0px 2px #202020;
    opacity: 0;
    transition: all 0.3s ease;
    transition-delay: 0.2s;
  }

  .nav__item > li:hover .nav__subitem {
    visibility: visible;
    opacity: 1;
    top: calc(100% + 15px);
  }

  .nav__subitem > li {
    margin-bottom: 5px;
  }

  .nav__item > li + li {
    margin-left: 35px;
  }

  .hide-mobile {
    display: inline;
  }

  .hamburger-menu {
    display: none;
  }

  .header__nav--lang {
    display: inline-flex;
    align-items: center;
    margin-left: 25px;
    height: 35px;
    width: 45px;
    position: relative;
    text-transform: uppercase;
    font-family: neue-haas-unica, sans-serif;
  }

  .header__nav--lang-list {
    list-style-type: none;
    display: block;
    margin-bottom: 0;
    border-radius: 3px;
    position: absolute;
    width: 100%;
    background: white;
    transition: all ease 0.3s;
    overflow: hidden;
    top: 0;
    max-height: 80px;
    height: auto;
    visibility: hidden;
    opacity: 0;
    border: 1px solid #202020;
    box-shadow: -2px 2px 0px 2px #202020;
  }

  .header__nav--lang-label {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #202020cf;
    cursor: pointer;
    border: 1.2px solid #202020;
    border-radius: 3px;
    height: 35px;
    width: 45px;
    transition: box-shadow 0.3s ease;
  }

  .header__nav--lang-label:hover {
    box-shadow: -2px 2px 0px 2px #202020;
  }

  .header__nav--lang-list.show {
    visibility: visible;
    opacity: 1;
  }

  .header__nav--lang-list li {
    margin-bottom: 0;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .header__nav--lang-list li a {
    color: #202020cf;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__nav--lang-list li a:hover {
    color: black;
  }
}
</style>
