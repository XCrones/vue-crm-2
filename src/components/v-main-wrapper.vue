<script>
import vHeaderVue from './v-header.vue';
import vFooterVue from './v-footer.vue';
export default {
  name: 'v-main-wrapper',
  components: {
    vHeaderVue,
    vFooterVue,
  },
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
  computed: {},
  mounted() {},
};
</script>

<template>
  <div class="main__wrapper">
    <header class="main__wrapper-header">
      <vHeaderVue @exit="exit" />
    </header>
    <main class="main__wrapper-main">
      <router-view />
    </main>
    <footer class="main__wrapper-footer">
      <vFooterVue />
    </footer>
  </div>
</template>

<style lang="scss">
.main {
  &__wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__wrapper-header {
    flex: 0 1 50px;
  }

  &__wrapper-main {
    flex: 1 1 auto;
  }

  &__wrapper-footer {
    flex: 0 1 30px;
  }
}
</style>
