<template>
  <button @click="click">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "Button",
    methods: {
      click: function (e) {
        this.$emit('click', e);
      }
    }
  }
</script>

<style scoped>
  button {
    line-height: 1;
    text-align: center;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }

</style>
