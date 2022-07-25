<script>
import viewsTopMenuVue from '../app-common/vs-top-menu.vue';
import vPopupVue from '@/components/v-popup.vue';
import vItem from '@/views/app-common/views-item.vue';
import vHeaderTable from '@/views/app-common/vs-header-table.vue';
import { mapGetters } from 'vuex';
import mTopMenu from '@/mixins/m-top-menu';
export default {
  name: 'vs-sale',
  components: {
    viewsTopMenuVue,
    vPopupVue,
    vItem,
    vHeaderTable,
  },
  props: {},
  data() {
    return {
      data_sales: [],
      type: 'sales',
      render_keys: [],
    };
  },
  mixins: [mTopMenu],
  methods: {
    getfull() {
      // this.data_sales.map((item) => console.log(item));
    },
    singleclick(index) {
      this.select_id_item(index, this.data_sales);
    },
    doubleClick(index) {
      this.select_id_item(index, this.data_sales);
      this.open_active_item(index, this.data_sales);
    },
    return_edited_item(return_edited_data) {
      this.valid_item(return_edited_data, this.data_sales, this.type);
    },
  },
  watch: {},
  computed: {
    ...mapGetters(['GET_USER_PERMISSION', 'GET_PRODUCT', 'GET_STATE_BUFFER', 'GET_BUFFER']),
  },
  mounted() {},
  unmounted() {
    // this.SET_STATES({ name: 'sales', value: JSON.parse(JSON.stringify(this.data_sales)) });
  },
  created() {
    this.state_btn_top_menu.isCreateActive = this.GET_USER_PERMISSION.isCreate;
    // if (this.GET_STATE_BUFFER('sales').length > 0) {
    //   this.data_sales = this.GET_STATE_BUFFER('sales').slice();
    // } else {
    //   this.data_sales = this.GET_PRODUCT('sales');
    //   this.render_keys.push('price');
    //   this.render_keys.push('amount');
    //   this.render_keys.push('date');
    // }
    this.data_sales = this.GET_PRODUCT(this.type);
    this.render_keys.push('price');
    this.render_keys.push('amount');
    this.render_keys.push('date');
  },
};
</script>

<template>
  <div class="container-xs" @keydown.esc="testEscape" @dblclick="getfull">
    <viewsTopMenuVue
      v-bind:state_buttons="state_btn_top_menu"
      @create_new_item="create_new_item(active_index)"
      @open_active_item="open_active_item(active_index, data_sales)"
      @public_edited_item="public_edited_item(active_index, data_sales, type)"
      @cancel_edited_item="cancel_edited_item(active_index, data_sales, type)"
      @delete_active_item="delete_active_item(active_index, data_sales)"
    />

    <div class="table-responsive">
      <table class="table table-bordered text-center table-hover user-select-none">
        <vHeaderTable>
          <th class="table__price table__text" scope="col">Цена шт(Р)</th>
          <th class="table__amount table__text" scope="col">Кол-во(шт)</th>
          <!-- <td class="table__price table__text">Сумма итого(Р)</td> -->
          <th class="table__date table__text" scope="col">Дата продажи</th>
        </vHeaderTable>

        <vItem
          v-bind:render_data="render_keys"
          v-bind:get_data="data_sales"
          @doubleClick="doubleClick"
          @singleclick="singleclick"
        />
      </table>
    </div>

    <vPopupVue
      v-if="isPopupVisible"
      v-bind:edit_data="editable_item"
      @popup_close="popup_close"
      @return_edited_item="return_edited_item"
    ></vPopupVue>
  </div>
</template>

<style lang="scss"></style>
