<script>
import vMainWrapperVue from './components/v-main-wrapper.vue';
import vSign from './components/v-sign.vue';
import { mapActions } from 'vuex';
export default {
  name: 'app',
  components: {
    vMainWrapperVue,
    vSign,
  },
  props: {},
  data() {
    return {
      sales: [
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0001',
          name: 'тетрадь',
          article: '0001',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0002',
          name: 'тетрадь',
          article: '0002',
          amount: 20,
          price: 325,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0003',
          name: 'тетрадь',
          article: '0003',
          amount: 20,
          price: 147,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0004',
          name: 'тетрадь',
          article: '0004',
          amount: 20,
          price: 258,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0005',
          name: 'тетрадь',
          article: '0005',
          amount: 20,
          price: 301,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0006',
          name: 'тетрадь',
          article: '0006',
          amount: 20,
          price: 159,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0007',
          name: 'тетрадь',
          article: '0007',
          amount: 20,
          price: 269,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0008',
          name: 'тетрадь',
          article: '0008',
          amount: 20,
          price: 157,
          specific: 'клетка',
          date: '2022-06-08',
        },
      ],
      main_storage: [
        {
          id: '0009',
          name: 'блокнот',
          article: '0009',
          amount: 12,
          price: 145,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0010',
          name: 'блокнот',
          article: '0010',
          amount: 27,
          price: 190,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0011',
          name: 'блокнот',
          article: '0011',
          amount: 30,
          price: 250,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0012',
          name: 'блокнот',
          article: '0012',
          amount: 42,
          price: 654,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0013',
          name: 'блокнот',
          article: '0013',
          amount: 67,
          price: 254,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0014',
          name: 'блокнот',
          article: '0014',
          amount: 98,
          price: 330,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0015',
          name: 'блокнот',
          article: '0015',
          amount: 65,
          price: 335,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0016',
          name: 'блокнот',
          article: '0016 ',
          amount: 10,
          price: 140,
          specific: 'чистый',
          date: '2022-06-08',
        },
      ],
      purchases: [
        {
          id: '0010',
          name: 'блокнот',
          article: '0020',
          amount: 12,
          price: 145,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0011',
          name: 'блокнот',
          article: '0021',
          amount: 27,
          price: 190,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0012',
          name: 'блокнот',
          article: '0022',
          amount: 30,
          price: 250,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0013',
          name: 'блокнот',
          article: '0023',
          amount: 42,
          price: 654,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0014',
          name: 'блокнот',
          article: '0024',
          amount: 67,
          price: 254,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0015',
          name: 'блокнот',
          article: '0025',
          amount: 98,
          price: 330,
          specific: 'клетка',
          date: '2022-06-08',
        },
        {
          id: '0016',
          name: 'блокнот',
          article: '0026',
          amount: 65,
          price: 335,
          specific: 'линия',
          date: '2022-06-08',
        },
        {
          id: '0017',
          name: 'блокнот',
          article: '0027',
          amount: 10,
          price: 140,
          specific: 'чистый',
          date: '2022-06-08',
        },
      ],
      user_permissions: {
        isWatch: true,
        isCreate: true,
        isEdit: true,
        isPublic: true,
        isDelete: true,
      },
      isValidUser: true,
    };
  },
  methods: {
    ...mapActions(['START_ADD_TO_MAIN_STORAGE', 'START_ADD_DATA_TO_SALES', 'SET_USER_PERMISSION']),
    user_valid(user) {
      // console.log('get user ' + JSON.stringify(user));
      this.isValidUser = true;
    },
    exit() {
      this.isValidUser = false;
    },
  },
  watch: {},
  computed: {},
  mounted() {},
  created() {
    this.START_ADD_TO_MAIN_STORAGE({ name: 'purchases', value: JSON.parse(JSON.stringify(this.purchases)) });
    this.START_ADD_TO_MAIN_STORAGE({ name: 'storage', value: JSON.parse(JSON.stringify(this.main_storage)) });
    this.START_ADD_TO_MAIN_STORAGE({ name: 'sales', value: JSON.parse(JSON.stringify(this.sales)) });
    this.SET_USER_PERMISSION(this.user_permissions);
  },
};
</script>

<template>
  <div id="app">
    <vMainWrapperVue @exit="exit" v-if="isValidUser" />
    <vSign v-else @user_valid="user_valid" />
  </div>
</template>

<style lang="scss">
// @import '~materialize-css/dist/css/materialize.min.css';
@import '~bootstrap/dist/css/bootstrap.css';

.table {
  // &__wrapper {
  //   display: flex;
  //   flex-direction: column;
  // }

  // &__header {
  //   user-select: none;
  //   width: 100%;
  // }

  &__tr {
    cursor: pointer;
    user-select: none;
  }

  // &__tr:hover {
  //   color: #fff;
  //   background-color: #1d6855;
  // }

  &__target {
    // color: #fff;
    background-color: #c1c1c4;
  }

  // &__status {
  //   width: 60px;
  // }

  &__status-content {
    position: relative;
    div {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: rgb(8, 170, 29);
    }
  }

  &__status-edited {
    div {
      background-color: rgb(203, 206, 14);
    }
  }

  &__status-error {
    div {
      background-color: rgb(255, 0, 0);
    }
  }

  &__status-new {
    div {
      background-color: rgb(218, 127, 24);
    }
  }

  &__status-delete {
    div {
      background-color: rgb(187, 63, 212);
    }
  }
  // &__number {
  //   width: 80px;
  // }

  // &__text {
  //   text-align: center;
  // }

  // &__article {
  //   width: 200px;
  // }

  // &__name {
  //   width: 300px;
  // }

  // &__price {
  //   width: 150px;
  // }

  // &__amount {
  //   width: 100px;
  // }

  // &__date {
  //   width: 200px;
  // }

  // &__other {
  // }
}
</style>
