<script>
export default {
  name: 'views-home',
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  mounted() {},
};
</script>

<template>
  <div class="home__body">
    <ul class="home__list">
      <li>
        <div>Ведение учета</div>
        <img src="@/assets/ico/reply.png" alt="image" />
      </li>
      <li>
        <div>Управление финансами</div>
        <img src="@/assets/ico/finance.png" alt="image" />
      </li>
      <li>
        <div>Контроль продаж</div>
        <img src="@/assets/ico/sale.png" alt="image" />
      </li>
      <li>
        <div>Контроль закупок</div>
        <img src="@/assets/ico/buy.png" alt="image" />
      </li>
      <li>
        <div>Легкость в управлении</div>
        <img src="@/assets/ico/ease.png" alt="image" />
      </li>
      <li>
        <div>Управление складом</div>
        <div><img src="@/assets/ico/storage.png" alt="image" /></div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.home {
  &__body {
    height: 100%;
    background-color: #278f75;
    color: #fff;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 25px 0;
  }

  &__list {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex: 1 1 170px;

      div:last-child {
        width: 48px;
        img {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
