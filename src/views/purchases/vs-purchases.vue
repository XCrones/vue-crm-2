<script>
import viewsTopMenuVue from '../app-common/vs-top-menu.vue';
import vPopupVue from '@/components/v-popup.vue';
import vItem from '@/views/app-common/views-item.vue';
import vHeaderTable from '@/views/app-common/vs-header-table.vue';
import { mapGetters } from 'vuex';
import mTopMenu from '@/mixins/m-top-menu';
export default {
  name: 'vs-buy',
  components: {
    viewsTopMenuVue,
    vPopupVue,
    vItem,
    vHeaderTable,
  },
  props: {},
  data() {
    return {
      data_purchaeses: [],
      type: 'purchases',
      render_keys: [],
    };
  },
  mixins: [mTopMenu],
  methods: {
    getfull() {
      // this.data_purchaeses.map((item) => console.log(item));
    },
    singleclick(index) {
      this.select_id_item(index, this.data_purchaeses);
    },
    doubleClick(index) {
      this.select_id_item(index, this.data_purchaeses);
      this.open_active_item(index, this.data_purchaeses);
    },
    return_edited_item(return_edited_data) {
      this.valid_item(return_edited_data, this.data_purchaeses, this.type);
    },
  },
  watch: {},
  computed: {
    ...mapGetters(['GET_USER_PERMISSION', 'GET_PRODUCT', 'GET_STATE_BUFFER', 'GET_BUFFER']),
  },
  mounted() {},
  created() {
    this.state_btn_top_menu.isCreateActive = this.GET_USER_PERMISSION.isCreate;

    this.data_purchaeses = this.GET_PRODUCT(this.type);
    // console.log(this.GET_PRODUCT(this.type));
    this.render_keys.push('amount');
    this.render_keys.push('date');
    this.render_keys.push('price');
  },
};
</script>

<template>
  <div class="sale__body" @keydown.esc="testEscape" @dblclick="getfull">
    <viewsTopMenuVue
      v-bind:state_buttons="state_btn_top_menu"
      @create_new_item="create_new_item(active_index)"
      @open_active_item="open_active_item(active_index, data_purchaeses)"
      @public_edited_item="public_edited_item(active_index, data_purchaeses, type)"
      @cancel_edited_item="cancel_edited_item(active_index, data_purchaeses, type)"
      @delete_active_item="delete_active_item(active_index, data_purchaeses)"
    />

    <table class="table">
      <vHeaderTable>
        <td class="table__amount table__text">Кол-во(шт)</td>
        <td class="table__date table__text">Дата покупки</td>
        <td class="table__price table__text">Цена</td>
        <!-- <td class="table__price table__text">Сумма итого(Р)</td> -->
      </vHeaderTable>

      <vItem
        v-bind:render_data="render_keys"
        v-bind:get_data="data_purchaeses"
        @doubleClick="doubleClick"
        @singleclick="singleclick"
      />
    </table>
    <vPopupVue
      v-if="isPopupVisible"
      v-bind:edit_data="editable_item"
      @popup_close="popup_close"
      @return_edited_item="return_edited_item"
    ></vPopupVue>
  </div>
</template>

<style lang="scss"></style>
