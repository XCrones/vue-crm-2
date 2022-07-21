import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      active_index: undefined,
      isPopupVisible: false,
      editable_item: {},
      state_btn_top_menu: {
        isCreateActive: false,
        isOpenActive: false,
        isPublicActive: false,
        isDeleteActive: false,
      },
      time: null,
    };
  },
  methods: {
    ...mapActions(['SET_MAIN_STORAGE', 'SET_STATUS_SALE', 'SET_STATES', 'SET_BUFFER', 'DELETE_ITEM_MAIN_STORAGE']),
    popup_close() {
      this.isPopupVisible = false;
      this.editable_item = {};
      this.active_index = null;
      this.state_btn_top_menu.isOpenActive = false;
      this.state_btn_top_menu.isDeleteActive = false;
      this.state_btn_top_menu.isPublicActive = false;
    },
    select_id_item(index, source_data) {
      this.active_index = index;

      if (this.GET_USER_PERMISSION.isWatch && this.active_index >= 0) {
        this.state_btn_top_menu.isOpenActive = true;

        if (this.GET_USER_PERMISSION.isDelete) {
          this.state_btn_top_menu.isDeleteActive = true;
        }

        if (source_data[index].status === 'edited' || source_data[index].status === 'new') {
          this.state_btn_top_menu.isPublicActive = true;
        } else {
          this.state_btn_top_menu.isPublicActive = false;
        }
      } else {
        this.state_btn_top_menu.isOpenActive = false;
        if (this.GET_USER_PERMISSION.isDelete) {
          this.state_btn_top_menu.isDeleteActive = false;
        }
      }
    },
    create_new_item() {
      this.editable_item.status = 'new';
      this.isPopupVisible = true;
    },
    open_active_item(index, source_data) {
      this.editable_item = { ...source_data[index] };
      this.isPopupVisible = true;
    },
    objectsEqual(obj1, obj2) {
      if (obj1 === obj2) {
        return true;
      }

      if (obj1 == null || typeof obj1 != 'object' || obj2 == null || typeof obj2 != 'object') {
        return false;
      }

      let propertiesInA = 0,
        propertiesInB = 0;

      for (let property in obj1) {
        propertiesInA += 1;
      }
      for (let property in obj2) {
        propertiesInB += 1;
        if (!(property in obj1) || !this.objectsEqual(obj1[property], obj2[property])) {
          return false;
        }
      }
      return propertiesInA == propertiesInB;
    },

    delete_active_item(index, source_data) {
      // console.log('delete_active_item ' + index);
      source_data[index].status = 'delete';
      this.state_btn_top_menu.isDeleteActive = false;
      this.state_btn_top_menu.isPublicActive = true;
    },
    cancel_edited_item(index, source_data, type) {
      let iFoundItem = false;

      this.GET_BUFFER(type).find((item, idx) => {
        if (item.id === source_data[index].id) {
          iFoundItem = true;
          source_data[index] = JSON.parse(JSON.stringify(item));
          delete source_data[index].status;

          this.GET_BUFFER(type).splice(idx, 1);
          this.state_btn_top_menu.isPublicActive = false;
          return true;
        }
      });

      if (!iFoundItem) {
        if (source_data[index].status === 'new') {
          source_data.splice(index, 1);
          this.state_btn_top_menu.isPublicActive = false;
        } else if (source_data[index].status === 'delete') {
          delete source_data[index].status;
          this.state_btn_top_menu.isPublicActive = false;
        } else {
          console.log('ERROR GET_BUFFER ' + JSON.stringify(source_data[index]));
          source_data[index].status = 'error';
        }
      }
    },
    public_edited_item(index, source_data, type) {
      let iFoundItem = false;

      this.GET_BUFFER(type).find((item, idx) => {
        if (item.id === source_data[index].id) {
          iFoundItem = true;

          delete source_data[index].status;
          this.SET_MAIN_STORAGE({ name: type, value: source_data[index] });

          this.GET_BUFFER(type).splice(idx, 1);
          this.state_btn_top_menu.isPublicActive = false;

          return true;
        }
      });

      if (!iFoundItem) {
        if (source_data[index].status === 'new') {
          delete source_data[index].status;
          this.SET_MAIN_STORAGE({ name: type, value: source_data[index] });
          this.state_btn_top_menu.isPublicActive = false;
        } else if (source_data[index].status === 'delete') {
          this.DELETE_ITEM_MAIN_STORAGE({
            name: type,
            value: {
              id: source_data[index].id,
            },
          });
          this.state_btn_top_menu.isPublicActive = false;
          this.state_btn_top_menu.isOpenActive = false;
        } else {
          console.log('ERROR PUBLIC ' + JSON.stringify(source_data[index]));
          source_data[index].status = 'error';
        }
      }

      // console.log(JSON.stringify(this.GET_PRODUCT(type)));
    },
    valid_item(return_edited_data, source_data, type) {
      if (return_edited_data.status != 'new') {
        if (!this.objectsEqual(source_data[this.active_index], return_edited_data)) {
          return_edited_data.status = 'edited';

          this.SET_BUFFER({ name: type, value: source_data[this.active_index] });
          source_data[this.active_index] = JSON.parse(JSON.stringify(return_edited_data));
          // console.log(source_data[this.active_index]);
        }
      } else {
        // console.log(JSON.stringify(return_edited_data));
        source_data.push(JSON.parse(JSON.stringify(return_edited_data)));
      }
      this.popup_close();
    },
  },
  computed: {
    ...mapGetters(['GET_USER_PERMISSION', 'GET_BUFFER']),
  },
};
