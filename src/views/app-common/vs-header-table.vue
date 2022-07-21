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
  <thead class="table__header">
    <tr>
      <td class="table__status table__text">Статус</td>
      <td class="table__number table__text">№</td>
      <td class="table__article table__text">Артикул</td>
      <td class="table__name table__text">Название</td>
      <slot />
    </tr>
  </thead>
</template>

<style lang="scss"></style>
