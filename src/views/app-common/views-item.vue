<script>
import vsBodyTbale from '@/views/app-common/vs-body-table.vue';
export default {
  name: 'vs-item',
  components: {
    vsBodyTbale,
  },
  props: {
    get_data: {
      type: Array,
      default() {
        return [{}];
      },
    },
    render_data: {
      type: Array,
      default() {
        return [''];
      },
    },
  },
  data() {
    return {
      active_index: undefined,
      time: null,
    };
  },
  methods: {
    singleClick(index) {
      this.active_index = index;
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.$emit('singleclick', index);
      }, 160);
    },
    doubleClick(index) {
      clearTimeout(this.time);
      this.active_index = index;
      this.$emit('doubleClick', index);
    },
    get_specific_field(item, index) {
      try {
        return Object.entries(item).filter((itm) => itm[0] === index)[0][1];
      } catch {
        return 'null';
      }
    },
  },
  watch: {},
  computed: {},
  mounted() {},
};
</script>

<template>
  <tbody>
    <tr
      v-for="(item, index) in get_data"
      :key="item.id"
      @click="singleClick(index)"
      @dblclick="doubleClick(index)"
      :class="{ table__target: `${index}` == active_index }"
    >
      <vsBodyTbale v-bind:item="item" v-bind:index="index">
        <td class="table__text">{{ get_specific_field(item, render_data[0]) }}</td>
        <td class="table__text">{{ get_specific_field(item, render_data[1]) }}</td>
        <!-- <td class="table__text">{{ item.price * item.amount }}</td> -->
        <td class="table__text">{{ get_specific_field(item, render_data[2]) }}</td>
      </vsBodyTbale>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped></style>
