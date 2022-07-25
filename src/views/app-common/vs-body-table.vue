<script>
export default {
  name: 'vs-body-table',
  components: {},
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default() {
        return null;
      },
    },
  },
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
  <th scope="row" class="table__text">{{ index + 1 }}</th>
  <td class="table__text">Номер заявки</td>
  <td class="table__text">{{ item.article }}</td>
  <td class="table__text">{{ item.name }}</td>
  <slot />
  <!-- <td
    class="table__status table__status-content table__text"
    v-bind:class="[
      { 'table__status-edited': item.status === 'edited' },
      { 'table__status-error': item.status === 'error' },
      { 'table__status-new': item.status === 'new' },
      { 'table__status-delete': item.status === 'delete' },
    ]"
  >
    <div></div>
  </td> -->
</template>

<style lang="scss"></style>
