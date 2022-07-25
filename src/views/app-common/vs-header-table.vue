<script>
export default {
  name: 'vs-header-table',
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
  <thead>
    <tr>
      <th class="table__number table__text" scope="col">№</th>
      <th class="table__number table__text" scope="col">№ заявки</th>
      <th class="table__article table__text" scope="col">Артикул</th>
      <th class="table__name table__text" scope="col">Название</th>
      <slot />
      <!-- <th class="table__status table__text" scope="col">Статус</th> -->
    </tr>
  </thead>
</template>

<style lang="scss"></style>
