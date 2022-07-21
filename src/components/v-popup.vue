<script>
import { mapGetters } from 'vuex';
export default {
  name: 'v-popup',
  components: {},
  props: {
    edit_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      temp_edit_data: {
        status: undefined,
        id: undefined,
        article: undefined,
        amount: undefined,
        price: undefined,
        specific: undefined,
        name: undefined,
        date: undefined,
      },
      errorText: {
        name: '',
        article: '',
        amount: '',
        price: '',
        specific: '',
        date: '',
        amount_error: 0,
      },
      IsEditing: false,
      isNewItem: false,
      text_popup: '',
    };
  },
  methods: {
    popupClose() {
      this.$emit('popup_close');
    },
    validDate() {
      this.errorText.amount_error = 0;
      this.errorText.name = '';
      this.errorText.article = '';
      this.errorText.amount = '';
      this.errorText.price = '';
      this.errorText.specific = '';
      this.errorText.date = '';

      if (this.temp_edit_data.name === undefined || this.temp_edit_data.name === '') {
        this.errorText.name = 'имя не может быть пустым';
        this.errorText.amount_error++;
      }

      if (this.temp_edit_data.article === undefined || this.temp_edit_data.article.length < 4) {
        this.errorText.article = 'минимум 4 символа (ХХХХ)';
        this.errorText.amount_error++;
      }

      if (this.temp_edit_data.amount === undefined || this.temp_edit_data.amount < 1) {
        this.errorText.amount = 'колличество должно быть >=1';
        this.errorText.amount_error++;
      }

      if (this.temp_edit_data.price === undefined || this.temp_edit_data.price < 1) {
        this.errorText.price = 'цена должна быть >=1';
        this.errorText.amount_error++;
      }

      if (this.temp_edit_data.specific === undefined || this.temp_edit_data.specific.length === 0) {
        this.errorText.specific = 'требуется указывать описание';
        this.errorText.amount_error++;
      }

      if (this.temp_edit_data.date === undefined || this.temp_edit_data.date.length != 10) {
        this.errorText.date = 'требуется указывать дату';
        this.errorText.amount_error++;
      }

      if (this.errorText.amount_error === 0) {
        this.$emit('return_edited_item', this.temp_edit_data);
      }
    },
    popupClosePress(event) {
      if (event.key === 'Escape') {
        this.popupClose();
      }
    },
  },
  watch: {},
  computed: {
    ...mapGetters(['GET_PRODUCT', 'GET_USER_PERMISSION']),
  },
  mounted() {
    this.IsEditing = this.GET_USER_PERMISSION.isEdit;

    if (!this.IsEditing) {
      this.text_popup = 'Только чтения';
    } else {
      this.temp_edit_data = JSON.parse(JSON.stringify(this.edit_data));

      // console.log(JSON.stringify(this.temp_edit_data));

      if (this.temp_edit_data.status === 'new') {
        this.isNewItem = true;
        this.text_popup = 'Новый';
        if (this.GET_PRODUCT('sales').length != 0) {
          this.temp_edit_data.id = `000${
            parseInt(this.GET_PRODUCT('sales')[this.GET_PRODUCT('sales').length - 1].id) + 1
          }`;
        } else {
          this.temp_edit_data.id = `0001`;
        }
      } else {
        this.text_popup = 'Редактирование';
      }
    }

    // console.log(JSON.stringify(this.temp_edit_data));
  },
  created() {
    document.addEventListener('keydown', this.popupClosePress, true);
  },
  unmounted() {
    document.removeEventListener('keydown', this.popupClosePress, true);
  },
};
</script>

<template>
  <div class="popup__wrapper">
    <div class="popup__body">
      <div class="popup__header">
        <span
          >ID:
          <span class="popup__state" :class="{ new__id: isNewItem, edit__id: !isNewItem }">{{
            temp_edit_data.id
          }}</span></span
        >
        <span>{{ text_popup }}</span>
        <span class="material-icons" @click="popupClose"> close</span>
      </div>
      <div class="popup__amount-error">
        <span v-if="errorText.amount_error != 0">Найдено ошибок: {{ errorText.amount_error }}</span>
      </div>
      <div class="popup__content">
        <!-- <slot></slot> -->
        <!-- {{ temp_data }} -->
        <div class="popup__content-items">
          <div class="popup__item">
            <div class="popup__data-text">Название:</div>
            <input type="text" v-model="temp_edit_data.name" :readonly="!IsEditing" />
            <span v-if="errorText.name.length != 0" class="popup__error-text">{{ errorText.name }}</span>
          </div>
          <div class="popup__item">
            <div class="popup__data-text">Артикул:</div>
            <input type="text" v-model="temp_edit_data.article" :readonly="!IsEditing" />
            <span v-if="errorText.article.length != 0" class="popup__error-text">{{ errorText.article }}</span>
          </div>
          <div class="popup__item">
            <div class="popup__data-text">Колличество:</div>
            <input type="number" v-model="temp_edit_data.amount" :readonly="!IsEditing" />
            <span v-if="errorText.amount.length != 0" class="popup__error-text">{{ errorText.amount }}</span>
          </div>
          <div class="popup__item">
            <div class="popup__data-text">Цена(шт):</div>
            <input type="number" v-model="temp_edit_data.price" :readonly="!IsEditing" />
            <span v-if="errorText.price.length != 0" class="popup__error-text">{{ errorText.price }}</span>
          </div>
          <div class="popup__item">
            <div class="popup__data-text">Описание:</div>
            <input type="text" v-model="temp_edit_data.specific" :readonly="!IsEditing" />
            <span v-if="errorText.specific.length != 0" class="popup__error-text">{{ errorText.specific }}</span>
          </div>
          <div class="popup__item">
            <div class="popup__data-text">Дата:</div>
            <input type="date" v-model="temp_edit_data.date" :readonly="!IsEditing" />
            <span v-if="errorText.date.length != 0" class="popup__error-text">{{ errorText.date }}</span>
          </div>
        </div>
      </div>
      <div class="popup__footer">
        <button class="popup__close" @click="popupClose">Отмена</button>
        <button class="popup__submit" @click="validDate" :disabled="!IsEditing">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  &__wrapper {
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #e0e0e08c;
  }

  &__body {
    z-index: 10;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 500px;
    padding: 16px;
    background-color: #e0e0e0;
    box-shadow: 0 0 2px 3px rgba(114, 109, 109, 0.562);
    display: flex;
    flex-direction: column;
  }

  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    flex: 0 1 50px;
  }

  &__footer {
  }

  &__amount-error {
    text-align: center;
    height: 30px;
  }

  &__close {
    padding: 8px;
    color: #fff;
    background-color: #21bd35;
    border: 1px solid rgba(8, 245, 193, 0.5);
    border-radius: 5px;
    cursor: pointer;
  }

  &__submit {
    padding: 8px;
    color: #fff;
    background-color: rgb(197, 26, 26);
    border: 1px solid rgba(8, 245, 193, 0.5);
    border-radius: 5px;
    cursor: pointer;
  }

  &__submit:disabled {
    color: #d3c8c8;
    background-color: #615c5c;
    cursor: not-allowed;
  }

  &__state {
    position: relative;
  }

  &__state::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
  }

  &__content {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content-items {
    width: 600px;
  }

  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-height: 50px;
    position: relative;

    input {
      padding: 0 20px 0 0;
    }
  }

  &__error-text {
    position: absolute;
    bottom: -15px;
    left: 55%;
    transform: translateX(-50%);
    font-size: 12px;
    color: red;
  }

  &__warning-text {
    position: absolute;
    bottom: -15px;
    left: 55%;
    transform: translateX(-50%);
    font-size: 12px;
    color: rgb(255, 145, 0);
  }

  &__data-text {
    width: 120px;
    margin: 0 20px 0 0;
    text-align: right;
    line-height: 50px;
  }
}
.material-icons {
  cursor: pointer;
}

.require {
  border: 1px solid red;
}

.new__id::before {
  background-color: green;
}

.edit__id::before {
  background-color: rgb(218, 127, 24);
}
</style>
