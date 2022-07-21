<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'v-header',
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    exit() {
      this.$emit('exit');
    },
  },
  watch: {},
  computed: {
    ...mapGetters(['GET_CURRENT_USER']),
  },
  mounted() {},
};
</script>

<template>
  <div class="header__body">
    <div class="header__left-menu">
      <div class="header__logo">
        <img src="@/assets/ico/logo2.png" alt="image" />
      </div>
      <div class="header__boorger hidden"></div>
      <nav class="header__navbar">
        <ul class="header__nav-list">
          <li><router-link :to="{ name: 'views-home' }">Домой</router-link></li>
          <li><router-link :to="{ name: 'views-sale' }">Продажи</router-link></li>
          <li><router-link :to="{ name: 'views-buy' }">Закупки</router-link></li>
          <li><router-link :to="{ name: 'views-storage' }">Склад</router-link></li>
          <li><router-link :to="{ name: 'views-faq' }">Справка</router-link></li>
        </ul>
      </nav>
      <div class="header__date"></div>
    </div>
    <div class="header__right-menu">
      <div class="header__username">{{ GET_CURRENT_USER }}</div>
      <ul class="header__right-list">
        <!-- <li>Dropdown 1</li>
        <li>Dropdown 2</li> -->
        <li @click="exit">Выход</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  &__body {
    user-select: none;
    width: 100%;
    background-color: rgb(218, 127, 24);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__left-menu {
    display: flex;
    flex-direction: row;
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    div {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }

  &__boorger {
  }

  &__navbar {
    background-color: rgb(218, 127, 24);
    box-shadow: 0 0 0 0px rgb(0, 0, 0);
    height: 100%;
  }

  &__nav-list {
    li {
      line-height: 50px;
      a {
      }
    }
  }

  &__date {
  }

  &__right-menu {
    margin: 0 20px 0 0;
    
  }

  &__right-menu:hover &__right-list {
    display: block;
  }

  &__username {
    color: #fff;
    padding: 0 25px;
    width: 100px;
    text-align: center;
    text-transform: capitalize;
    font-size: 18px;
    position: relative;
  }

  &__username:after {
    content: '';
    position: absolute;
    right: 10px;
    bottom: 8px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid #fff;
  }

  &__right-list {
    display: none;
    z-index: 2;
    position: absolute;
    top: 20px;
    right: 0;
    width: 150px;
    background-color: rgb(219, 149, 69);
    cursor: pointer;

    li {
      text-align: center;
      color: #fff;
      height: 30px;
      line-height: 30px;
    }

    li:hover {
      background-color: #f1f1f1;
      color: #000;
    }
  }
}

.hidden {
  display: none;
}
</style>
