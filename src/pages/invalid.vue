<template>
  <div class="invalid">
    <div class="wrapper">
      <div class="container">
        <Logo></Logo>
        <p class="searched-url">https://ucut.in/uCUtiN</p>
        <p style="margin-bottom:120px; color: #3D454D; ">This address expired on 24th January, 2020.</p>

        <p style="margin-bottom:24px; color: #525C66;">Want to generate your looooooooong address short?</p>
        <button class="goto-main-button" @click="goToHome()">
          <span>GO TO MAIN PAGE</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from "../components/Logo";

  export default {
    name: "invalid",
    components: {Logo},
    methods: {
      goToHome: function () {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .invalid {
    min-height: 100vh;
  }

  .invalid .wrapper {
    text-align: center;
    padding: 24px;
    padding-top: 0;
    margin-top: 160px;
  }

  .invalid .container {
    width: 100%;
    display: inline-block;
  }

  .searched-url {
    margin-top: 140px;
    margin-bottom: 48px;
    color: #454C53;
    font-size: 48px;
    font-weight: bold;
  }

  .goto-main-button {
    background: linear-gradient(325.69deg, #0080FF 0%, #66CCFF 100%);
    box-shadow: 10px 10px 25px #D2D4D5, -10px -10px 25px #FFFFFF;
    border-radius: 16px;
    height: 60px;
    max-width: 360px;
    width: 100%;
  }

  .goto-main-button span {
    color: white;
    font-size: 21px;
    font-weight: bold;
  }

  @media screen and (max-width: 814px) {
    .searched-url {
      font-size: 24px;
    }
  }
</style>
