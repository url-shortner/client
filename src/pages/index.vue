<template>
  <div class="home">
    <div class="wrapper">
      <div class="container">
        <img class="logo" src="../assets/Ucut.in.svg" alt="로고이미지"/>
        <p class="logo-paragraph">shorten url, share link, take pics</p>
        <label for="url-shorten" class="label-hidden">URL Shorten</label>
        <input id="url-shorten" type="text" class="search-input color-strength" placeholder="Shorten your link"/>
        <Button class="search-btn">
          <span>SHORTEN IT!</span>
        </Button>
        <p class="description">By clicking SHORTEN IT!, you are agreeing to Ucut.in’s <span>Terms of Service</span> and
          <span>Privacy policy</span>
        </p>
        <!--        <div class="camera">-->
        <!--          <div>-->
        <!--            <img src="../assets/Union.png" alt="카메라 이미지">-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
    <div class="url-wrapper">
      <div class="search-container">
        <img src="../assets/search-icon.png" alt="검색 아이콘"
             class=""/>
        <label for="shorten-search" class="label-hidden">Shorten Search</label>
        <input id="shorten-search" type="text" class="color-strength" placeholder="키 주소 혹은 랜딩페이지 주소로 검색해보세요"/>
      </div>
      <!--      nth-child 활용하는방안-->
      <div class="url-title pc-url-title">
        <div class="color-strength" style="width:124px;">키 주소</div>
        <div class="url-title-margin color-strength" style="width:564px;">랜딩페이지 주소</div>
        <div class="url-title-margin color-strength" style="width:60px;">조회수</div>
        <div class="url-title-margin color-strength" style="width:96px; text-align: right">생성일</div>
        <div class="url-title-margin color-strength" style="width:138px; text-align: right">유효기간</div>
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

  .label-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    border: 0;
    overflow: hidden
  }

  .pc-url-title {
    display: flex;
  }

  .mobile-url-title {
    display: none;
  }

  .color-strength {
    color: #454c53;
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
    border-radius: 12px;
  }

  .search-btn {
    background: linear-gradient(320deg, #0080FF 0%, #66CCFF 100%);
    box-shadow: 6px 6px 16px 0px #D1DBEB, -6px -6px 16px 0px #fff;
    display: inline-block;
    width: 240px;
    vertical-align: sub;
    height: 60px;
    /*border: solid 2px;*/
    /*border-image: linear-gradient(90deg, #00CCFF 0%, #0073E5 100%);*/
    transition: all .2s;
  }

  .search-btn:hover {
    box-shadow: 6px 6px 16px 0px rgba(0, 128, 255, .38), -6px -6px 16px 0px rgba(102, 204, 255, .16);
  }

  .search-btn:focus {
    box-shadow: 6px 6px 16px 0px rgba(0, 128, 255, .38), -6px -6px 16px 0px rgba(102, 204, 255, .16);
  }

  .search-btn:active {
    box-shadow: 0 0 transparent, 0 0 transparent, inset 0 2px 5px 2px rgba(0,0,0,.16);
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
    background: #F2F3F7;
    box-shadow: 0px 0px 0px 0px #D1DBEB, 0px 0px 0px 0px #fff, inset 6px 6px 8px 0px #D1DBEB, inset -6px -6px 8px 0px #fff;
    width: calc(100% - 276px);
    border: none;
    padding: 10px 24px;
    margin: 0;
    margin-right: 36px;
    margin-top: 60px;
    height: 60px;
    display: inline-block;
    transition: all .2s;
  }

  .container > .search-input:focus {
    background: #FFFFFF;
    box-shadow: 6px 6px 16px 0px #D1DBEB, -6px -6px 16px 0px #fff, inset 0px 0px 0px 0px #D1DBEB, inset 0px 0px 0px 0px #fff;
  }

  .container > .search-input:hover {
    background: #FAFBFF;
    box-shadow: 6px 6px 16px 0px #D1DBEB, -6px -6px 16px 0px #fff, inset 0px 0px 0px 0px #D1DBEB, inset 0px 0px 0px 0px #fff;

  }

  .search-input::placeholder {
    color: #A1AAB3;
  }

  .description {
    font-size: 12px;
    margin-top: 24px;
    color: #b8c2cc;
  }

  .description span {
    text-decoration: underline;
    color: #98a5b3;
  }

  .camera {
    margin: auto;
    margin-top: 60px;
    width: 120px;
    height: 120px;
    padding: 12px;
    background: #F2F3F7;
    box-shadow: 5px 5px 15px #D2D4D5, -5px -5px 15px #FFFFFF;
    border-radius: 12px;
  }

  .camera div {
    border-radius: 8px;
    height: 100%;
  }

  .camera img {
    margin-top: 22px;
  }

  .url-wrapper {
    background: #F2F3F7;
    box-shadow: 6px 6px 16px 0px #D1DBEB, -6px -6px 16px 0px #fff, inset 0px 0px 0px 0px #D1DBEB, inset 0px 0px 0px 0px #fff;
    border-radius: 12px;
    padding: 24px;
    width: 1216px;
    margin: 0;
    margin-left: calc(50% - 608px);
    margin-bottom: 120px;
  }

  .url-wrapper .search-container {
    width: 100%;
    background: #F2F3F7;
    box-shadow: 0px 0px 0px 0px #D1DBEB, 0px 0px 0px 0px #fff, inset 6px 6px 8px 0px #D1DBEB, inset -6px -6px 8px 0px #fff;
    border-radius: 8px;
    border: none;
    display: flex;
    padding: 0 24px;
    margin-bottom: 24px;
    transition: all .2s;
  }

  .search-container:hover {
    background: #FAFBFF;
    box-shadow: 6px 6px 16px 0px #D1DBEB, -6px -6px 16px 0px #fff, inset 0px 0px 0px 0px #D1DBEB, inset 0px 0px 0px 0px #fff;
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
