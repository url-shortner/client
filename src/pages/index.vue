<template>
  <div class="home">
    <div class="wrapper">
      <div class="container">
        <img class="logo" src="../assets/Ucut.in.svg"/>
        <p class="logo-paragraph">shorten url, share link, take pics</p>
        <input class="search-input" placeholder="Shorten your link"/>
        <Button class="search-btn">
          <span>SHORTEN IT!</span>
        </Button>
        <p class="description">By clicking SHORTEN IT!, you are agreeing to Ucut.in’s <span>Terms of Service</span> and
          <span>Privacy policy</span>
        </p>
        <!--        <div class="camera">-->
        <!--          <div>-->
        <!--            <img src="../assets/Union.png">-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
    <div class="url-wrapper">
      <div class="search-container">
        <img src="../assets/search-icon.png"
             class=""/>
        <input placeholder="키 주소 혹은 랜딩페이지 주소로 검색해보세요"/>
      </div>
      <div class="url-title pc-url-title">
        <div style="width:124px;">키 주소</div>
        <div class="url-title-margin" style="width:564px;">랜딩페이지 주소</div>
        <div class="url-title-margin" style="width:60px;">조회수</div>
        <div class="url-title-margin" style="width:96px; text-align: right">생성일</div>
        <div class="url-title-margin" style="width:138px; text-align: right">유효기간</div>
      </div>
      <div class="url-title mobile-url-title">
        <div style="width:90px;">키 주소</div>
        <div class="url-title-margin" style="width:240px;">랜딩페이지 주소</div>
        <div class="url-title-margin" style="width:60px;">조회수</div>
        <div class="url-title-margin" style="width:60px; text-align: right">생성일</div>
        <div class="url-title-margin" style="width:100px; text-align: right">유효기간</div>
      </div>
      <UrlOutput></UrlOutput>
      <UrlOutput></UrlOutput>
      <UrlOutput></UrlOutput>
      <UrlOutput></UrlOutput>
      <UrlOutput :is-last="true"></UrlOutput>
    </div>
  </div>
</template>

<script>
  import Button from "../components/Button"
  import UrlOutput from "../components/UrlOutput";

  export default {
    scrollToTop: true,
    components: {
      UrlOutput,
      Button,
    },
    name: 'Home',
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  .pc-url-title {
    display: flex;
  }

  .mobile-url-title {
    display: none;
  }

  .inline-block {
    display: inline-block;
  }

  .home {
    min-height: 100vh;
  }

  .wrapper {
    padding: 24px;
    text-align: center;
    font-size: 0;
    margin-top: 136px;
  }

  .container {
    display: inline-block;
    text-align: start;
    width: 100%;
    margin-bottom: 70px;
    max-width: 1216px;
  }

  .logo {
    width: 282px;
  }

  .logo-paragraph {
    font-size: 24px;
    margin-top: 16px;
    color: #525c66;
  }

  .container > .search-input, .search-btn {
    border-radius: 16px;
  }

  .search-btn {
    background: linear-gradient(335.22deg, #0080FF 0%, #66CCFF 100.62%);
    box-shadow: 10px 10px 25px #D2D4D5, -10px -10px 25px #FFFFFF;
    display: inline-block;
    width: 240px;
    vertical-align: sub;
    height: 60px;
    /*border: solid 2px;*/
    /*border-image: linear-gradient(90deg, #00CCFF 0%, #0073E5 100%);*/
  }

  .search-btn span {
    color: white;
    font-weight: bold;
  }

  .container > .search-input, .search-input::placeholder, .search-btn span,
  .search-container input, .search-container input::placeholder {
    font-size: 21px;
  }

  .container > .search-input {
    width: calc(100% - 276px);
    background: linear-gradient(180deg, #F7F9FA 0%, #FCFDFD 100%);
    box-shadow: 5px 5px 15px #D2D4D5, -5px -5px 15px #FFFFFF;
    border: none;
    padding: 10px 24px;
    margin: 0;
    margin-right: 36px;
    margin-top: 60px;
    height: 60px;
    display: inline-block;
  }

  .search-input::placeholder {
    color: #A1AAB3;
  }

  .description {
    font-size: 12px;
    color: #BBC2CC;
    margin-top: 24px;
  }

  .description span {
    text-decoration: underline;
  }

  .camera {
    margin: auto;
    margin-top: 60px;
    width: 120px;
    height: 120px;
    padding: 12px;
    background: linear-gradient(180deg, #F7F9FA 0%, #FCFDFD 100%);
    box-shadow: 5px 5px 15px #D2D4D5, -5px -5px 15px #FFFFFF;
    border-radius: 16px;
  }

  .camera div {
    border-radius: 8px;
    height: 100%;
  }

  .camera img {
    margin-top: 22px;
  }

  .url-wrapper {
    background: #F7F9FA;
    box-shadow: 5px 5px 15px rgba(210, 212, 213, 0.54), -5px -5px 15px rgba(255, 255, 255, 0.54);
    border-radius: 16px;
    padding: 24px;
    width: 1216px;
    margin-left: calc(50% - 608px);
    margin-bottom: 120px;
  }

  .url-wrapper .search-container {
    width: 100%;
    background: linear-gradient(180deg, #F7F9FA 0%, #FCFDFD 100%);
    box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 0.54), inset 2px 2px 8px rgba(210, 212, 213, 0.54);
    border-radius: 8px;
    border: none;
    display: flex;
    padding: 0 24px;
    margin-bottom: 24px;
  }

  .search-container img {
    height: 18px;
    width: 18px;
    margin-right: 16px;
    align-self: center;
    margin-bottom: -2px;
  }

  .search-container input {
    width: calc(100% - 45px);
    background-color: transparent;
    border: none;
    height: 60px;
  }

  .search-container input::placeholder {
    color: #A1AAB3;
  }

  .url-title {
    padding-left: 12px;
    height: 53px;
    border: none;
    border-bottom: 1px solid #77828c;
  }

  .url-title div {
    font-size: 21px;
    font-weight: bold;
  }

  .url-title-margin {
    margin-left: 36px;
  }

  @media screen and (max-width: 1264px) {
    .url-wrapper {
      margin-left: 24px;
    }
  }

  @media screen and (max-width: 814px) {
    .pc-url-title {
      display: none;
    }

    .mobile-url-title {
      display: flex;
    }

    .logo {
      width: 174px;
    }

    .logo-paragraph {
      font-size: 16px;
    }

    .container > .search-input, .search-input::placeholder, .search-btn span {
      font-size: 18px;
    }

    .container > .search-input, .search-btn {
      display: block;
      width: 100%;
      height: 48px;
      border-radius: 8px;
    }

    .search-container input, .search-container input::placeholder {
      font-size: 16px;
    }

    .search-container input {
      height: 48px;
    }

    .container > .search-input {
      margin-bottom: 12px;
    }

    .url-wrapper {
      width: 766px;
    }

    .url-title {
      height: 39px;
    }

    .url-title div {
      font-size: 16px;
    }
  }
</style>
