<script>
import { mapGetters } from 'vuex';
export default {
  name: 'vs-top-menu',
  components: {},
  props: {
    state_buttons: {
      type: Object,
      default() {
        return {
          isOpenActive: false,
          isCreateActive: false,
          isPublicActive: false,
          isDeleteActive: false,
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    remove_target() {
      this.$emit('remove_target');
    },
    create_new_item() {
      if (this.state_buttons.isCreateActive) {
        this.$emit('create_new_item');
      }
    },
    open_active_item() {
      if (this.state_buttons.isOpenActive) {
        this.$emit('open_active_item');
      }
    },
    public_edited_item() {
      if (this.state_buttons.isPublicActive) {
        this.$emit('public_edited_item');
      }
    },
    cancel_edited_item() {
      if (this.state_buttons.isPublicActive) {
        this.$emit('cancel_edited_item');
      }
    },
    delete_active_item() {
      if (this.state_buttons.isDeleteActive) {
        this.$emit('delete_active_item');
      }
    },
  },
  watch: {},
  computed: {
    ...mapGetters(['GET_USER_PERMISSION']),
  },
  mounted() {},
};
</script>

<template>
  <div class="top-menu__body" @click="remove_target">
    <ul class="top-menu__list">
      <li
        class="top-menu__create"
        v-bind:class="{ active__cursor: state_buttons.isCreateActive }"
        @click="create_new_item"
      >
        <div>
          <img class="top-menu__img" src="@/assets/ico/create.png" alt="image" />
        </div>
        <div class="top-menu__text">Создать</div>
      </li>

      <li
        class="top-menu__edit"
        v-bind:class="{ active__cursor: state_buttons.isOpenActive }"
        @click="open_active_item"
      >
        <div>
          <img class="top-menu__img" src="@/assets/ico/edit.png" alt="image" />
        </div>
        <div class="top-menu__text">Открыть</div>
      </li>

      <li
        class="top-menu__edit"
        v-bind:class="{ active__cursor: state_buttons.isDeleteActive }"
        @click="delete_active_item"
      >
        <div>
          <img class="top-menu__img" src="@/assets/ico/delete.png" alt="image" />
        </div>
        <div class="top-menu__text">удалить</div>
      </li>

      <li
        class="top-menu__cancel"
        v-bind:class="{ active__cursor: state_buttons.isPublicActive }"
        @click="cancel_edited_item"
      >
        <div>
          <img class="top-menu__img" src="@/assets/ico/cancel.png" alt="image" />
        </div>
        <div class="top-menu__text">Отмена</div>
      </li>

      <li
        class="top-menu__public"
        v-bind:class="{ active__cursor: state_buttons.isPublicActive }"
        @click="public_edited_item"
      >
        <div>
          <img class="top-menu__img" src="@/assets/ico/public.png" alt="image" />
        </div>
        <div class="top-menu__text">Провести</div>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.top-menu {
  &__body {
    user-select: none;
    background-color: #278f75;
  }

  &__list {
    padding: 0 0 0 10px;
    color: #fff;
    margin: 0;
    display: flex;
    font-display: row;

    li {
      margin: 0 40px 0 0;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;

      div:first-child {
        width: 20px;
        margin: 0 10px 0 0;
        display: flex;
        justify-content: center;

        img {
          max-width: 100%;
        }
      }

      div:last-child {
        height: 40px;
        line-height: 40px;
      }
    }

    span {
      display: inline-block;
    }
  }

  &__img {
    filter: grayscale(100%);
  }

  &__create {
  }

  &__text {
    color: #aeaeae;
    text-transform: capitalize;
  }

  &__edit {
  }
}

.active__cursor {
  div {
    img {
      filter: grayscale(0%);
    }
  }
  cursor: pointer;
  .top-menu__text {
    color: #fff;
  }
}
</style>
