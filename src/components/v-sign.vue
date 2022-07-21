<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'v-sign',
  components: {},
  props: {},
  data() {
    return {
      isSign: false,
      signTitle: 'вход',
      inputData: {
        name: '',
        pass: '',
        pass_again: '',
      },
      error: {
        name: '',
        pass: '',
      },
    };
  },
  methods: {
    ...mapActions(['SET_CURRENT_USER', 'SET_USERS']),
    toggle_sign() {
      this.inputData.name = '';
      this.inputData.pass = '';
      this.inputData.pass_again = '';

      this.error.name = '';
      this.error.pass = '';
      if (!this.isSign) {
        this.isSign = true;
        this.signTitle = 'регистрация';
      } else {
        this.isSign = false;
        this.signTitle = 'вход';
      }
    },
    validData() {
      this.error.name = '';
      this.error.pass = '';
      if (!this.isSign) {
        // console.log('in ');

        if (this.inputData.name.length > 0 && this.inputData.name.trim()) {
          if (this.inputData.pass.length > 0 && this.inputData.pass.trim()) {
            if (
              this.GET_USERS.find((item) => item.name === this.inputData.name && item.pass === this.inputData.pass) !=
              undefined
            ) {
              // console.log('login ok');
              this.SET_CURRENT_USER(this.inputData.name);
              this.$emit('user_valid', this.inputData.name);
            } else {
              let keys = Object.keys(localStorage);
              for (let key of keys) {
                if (key === this.inputData.name) {
                  this.SET_CURRENT_USER(this.inputData.name);
                  this.$emit('user_valid', this.inputData.name);
                }
              }
              this.error.name = 'нет такого пользователя';
              this.error.pass = 'нет такого пользователя';
            }
          } else {
            this.error.pass = 'заполните поле';
          }
        } else {
          this.error.name = 'заполните поле';
        }
      } else {
        if (this.inputData.name.length > 0 && this.inputData.name.trim()) {
          if (
            this.inputData.pass.length > 0 &&
            this.inputData.pass.trim() &&
            this.inputData.pass_again.length > 0 &&
            this.inputData.pass_again.trim()
          ) {
            if (this.inputData.pass === this.inputData.pass_again) {
              // console.log(JSON.stringify(this.GET_USERS));
              // console.log(this.GET_USERS.find((item) => item.name === this.inputData.name));
              if (this.GET_USERS.find((item) => item.name === this.inputData.name) === undefined) {
                delete this.inputData.pass_again;
                this.SET_USERS(this.inputData);
                this.inputData.name = '';
                this.inputData.pass = '';
                this.inputData.pass_again = '';
                this.isSign = false;
                this.signTitle = 'вход';
              } else {
                this.error.name = 'имя занято';
              }
            } else {
              this.error.pass = 'пароли не совпадают';
            }
          } else {
            this.error.pass = 'заполните поле';
          }
        } else {
          this.error.name = 'заполните поле';
        }
      }
    },
  },
  watch: {},
  computed: {
    ...mapGetters(['GET_USERS']),
  },
  mounted() {},
};
</script>

<template>
  <div class="sign">
    <div class="sign__wrapper">
      <div class="sign__header">
        <input type="submit" class="sign__input" value="Войти" :disabled="!isSign" @click.prevent="toggle_sign" />
        <input
          type="submit"
          class="sign__input"
          value="Зарегистрироваться"
          :disabled="isSign"
          @click.prevent="toggle_sign"
        />
      </div>
      <div class="sign__body" @keydown.enter="validData">
        <h2 class="sign__title">{{ signTitle }}</h2>
        <div class="sign__items">
          <div class="sign__item">
            <div class="sign__name">Логин:</div>
            <input type="text" class="sign__input" v-model="inputData.name" />
            <div class="sign__error-text" v-if="error.name.length != 0">{{ error.name }}</div>
          </div>

          <div class="sign__item">
            <div class="sign__password">Пароль:</div>
            <input type="password" class="sign__input" v-model="inputData.pass" />
            <div class="sign__error-text" v-if="error.pass.length != 0">{{ error.pass }}</div>
          </div>

          <div class="sign__item" v-if="isSign">
            <div class="sign__password">Повторить пароль:</div>
            <input type="password" class="sign__input" v-model="inputData.pass_again" />
            <div class="sign__error-text" v-if="error.pass.length != 0">{{ error.pass }}</div>
          </div>

          <div class="sign__button">
            <input type="submit" class="sign__input" value="отправить" @click.prevent="validData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sign {
  background-color: rgb(49, 57, 61);
  width: 100%;
  height: 100vh;

  color: #fff;

  &__wrapper {
    width: 400px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__header {
    margin: 0 0 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    input {
      color: #000;
      height: 25px;
      cursor: pointer;
    }
  }

  &__title {
    font-size: 20px;
    text-align: center;
    text-transform: capitalize;
  }

  &__butt {
  }

  &__body {
  }

  &__items {
  }

  &__item {
    position: relative;
    margin: 0 0 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      height: 35px;
      flex: 1 1 auto;
    }

    input {
      flex: 0 1 270px;
      letter-spacing: 0.1em;
    }
  }

  &__error-text {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-15%);
    font-size: 12px;
    color: red;
    letter-spacing: 0.1em;
  }

  &__name {
  }

  &__input {
    color: #fff;
  }

  &__password {
  }

  &__button {
    input {
      width: 100%;
      height: 37px;
      border-radius: 15px;
      border: 1px solid rgb(90, 88, 88);
      text-transform: uppercase;
      background-color: #216d5a;
      cursor: pointer;
      letter-spacing: 0.1em;
      font-weight: 600;
    }

    input:hover {
      background-color: #32927a;
      color: #000;
    }
  }
}
.butt {
}
</style>
