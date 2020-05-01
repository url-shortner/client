<template>
  <div class="logo">
    <img class="logo-img" src="../assets/Ucut.in.svg" alt="로고이미지"/>
    <p class="logo-paragraph">shorten url, share link, take pics</p>
  </div>
</template>

<script>
  export default {
    name: "Logo"
  }
</script>

<style scoped>
  .logo {
    font-size: 0;
  }

  .logo-img {
    width: 282px;
  }

  .logo-paragraph {
    font-size: 24px;
    margin-top: 16px;
    color: #525c66;
  }

  @media screen and (max-width: 814px) {
    .logo-img {
      width: 174px;
    }

    .logo-paragraph {
      font-size: 16px;
    }
  }
</style>
