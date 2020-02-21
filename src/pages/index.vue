<template>
  <div class="wrapper">
    <div class="container">
      <img src="../assets/Ucut.in.svg"/>
      <p>shorten url, share link, take pics</p>
      <Button class="search-btn">
        <span>SHORTEN IT!</span>
      </Button>
      <p>By clicking SHORTEN IT!, you are agreeing to Ucut.in’s Terms of Service and Privacy policy</p>
    </div>
  </div>
</template>

<script>
  import Button from "../components/Button"

  export default {
    scrollToTop: true,
    components: {
      Button,
    },
    name: 'Home',
  }
</script>

<style>
  .wrapper {
    padding: 24px;
    text-align: center;
  }

  .container {
    display: inline-block;
    text-align: start;
  }

  .search-btn {
    background: linear-gradient(335.22deg, #0080FF 0%, #66CCFF 100.62%);
    box-shadow: 10px 10px 25px #D2D4D5, -10px -10px 25px #FFFFFF;
    border-radius: 8px;
    width: 100%;
    border: solid 2px;
    border-image: linear-gradient(90deg, #00CCFF 0%, #0073E5 100%);
  }

  .search-btn span {
    color: white;
    font-weight: bold;
  }
</style>
