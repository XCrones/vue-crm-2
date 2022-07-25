import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [{ name: 'admin', pass: 'admin' }],
    current_user_name: '',
    user_permission: {
      isWatch: false,
      isCreate: false,
      isEdit: false,
      isPublic: false,
      isDelete: false,
    },
    main_storage: [
      { name: 'sales', value: [] },
      { name: 'purchases', value: [] },
      { name: 'storage', value: [] },
    ],
    buffer: [
      { name: 'sales', value: [] },
      { name: 'purchases', value: [] },
      { name: 'storage', value: [] },
    ],
    state_buffer: [
      { name: 'sales', value: [] },
      { name: 'purchases', value: [] },
      { name: 'storage', value: [] },
    ],
  },
  getters: {
    GET_CURRENT_USER: (state) => {
      return state.current_user_name != '' ? state.current_user_name : 'ДЕМО';
    },
    GET_USERS: (state) => {
      return state.users;
    },
    GET_USER_PERMISSION: (state) => {
      return state.user_permission;
    },
    GET_PRODUCT: (state) => (name) => {
      return state.main_storage.find((item) => item.name === name).value;
    },
    GET_BUFFER: (state) => (name) => {
      return state.buffer.find((item) => item.name === name).value;
    },
    GET_STATE_BUFFER: (state) => (name) => {
      return state.state_buffer.find((item) => item.name === name).value;
    },
  },
  mutations: {
    EDIT_USER_PERMISSIONS: (state, permissions) => {
      Object.assign(state.user_permission, permissions);
    },
    START_DATA_MAIN_STORAGE: (state, data) => {
      state.main_storage.find((item) => item.name === data.name).value = JSON.parse(JSON.stringify(data.value));
    },
    ADD_MAIN_STORAGE: (state, data) => {
      Object.assign(
        state.main_storage.find((item) => item.name === data.name).value.find((item) => item.id === data.value.id),
        data.value
      );
    },
    ADD_BUFFER: (state, data) => {
      let isFound = false;
      state.buffer.find((item) => {
        if (item.name === data.name) {
          item.value.find((itm) => {
            if (itm.id === data.value.id) {
              itm = JSON.parse(JSON.stringify(data.value));
              // console.log('asd = ' + typeof itm);
              isFound = true;
            }
          });

          if (!isFound) {
            item.value.push(JSON.parse(JSON.stringify(data.value)));
          }
        }
      });
    },
    ADD_STATES: (state, arr) => {
      state.state_buffer.some((item) => {
        if (item.name === arr.name) {
          item.value = JSON.parse(JSON.stringify(arr.value));
          return true;
        }
      });
    },
    DELETE_MAIN_STORAGE: (state, data) => {
      let isFound = false;

      state.main_storage.find((item) => {
        if (item.name === data.name) {
          let index = null;
          item.value.find((itm, idx) => {
            if (itm.id === data.value.id) {
              isFound = true;
              index = idx;
            }
          });
          if (index != null) {
            // console.log(item.value[index]);
            item.value.splice(index, 1);
          }
        }
      });

      if (!isFound) {
        console.log('Error main storage ' + JSON.stringify(data));
      }
    },
    ADD_USER: (state, user) => {
      state.users.push(JSON.parse(JSON.stringify(user)));
      localStorage.setItem(user.name, user.pass);
    },
    ADD_CURRENT_USER: (state, user) => {
      state.current_user_name = user;
      // console.log(user);
    },
  },
  actions: {
    START_ADD_TO_MAIN_STORAGE({ commit }, data) {
      commit('START_DATA_MAIN_STORAGE', data);
    },
    SET_MAIN_STORAGE({ commit }, data) {
      commit('ADD_MAIN_STORAGE', data);
    },
    SET_BUFFER({ commit }, data) {
      commit('ADD_BUFFER', data);
    },
    SET_STATES({ commit }, arr) {
      commit('ADD_STATES', arr);
    },
    SET_USER_PERMISSION({ commit }, permissions) {
      commit('EDIT_USER_PERMISSIONS', permissions);
    },
    DELETE_ITEM_MAIN_STORAGE({ commit }, data) {
      commit('DELETE_MAIN_STORAGE', data);
    },
    SET_USERS({ commit }, user) {
      commit('ADD_USER', user);
    },
    SET_CURRENT_USER({ commit }, user) {
      commit('ADD_CURRENT_USER', user);
    },
  },
  modules: {},
});
