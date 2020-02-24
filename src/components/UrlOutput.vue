<template>
  <div>
    <div class="pc-url-title url-output-wrapper" :class="{bottomline:!isLast}">
      <div class="route text-bold" style="width:124px;">AaNnCo</div>
      <div class="normal" style="width:564px;">https://www.modoo.at/management/edit?siteId=2725358#275?</div>
      <div class="normal text-bold" style="width:60px; color:#454c53;">27,679</div>
      <div class="normal" style="width:96px; text-align: right">23시간 전</div>
      <div class="normal" style="width:138px; text-align: right">13시간 36분 남음</div>
    </div>
    <div class="mobile-url-title url-output-wrapper" :class="{bottomline:!isLast}">
      <div class="route text-bold" style="width:90px;">AaNnCo</div>
      <div class="normal" style="width:240px;">https://www.modoo.at/management/edit?siteId=2725358#275?</div>
      <div class="normal text-bold" style="width:60px; color:#454c53;">27,679</div>
      <div class="normal" style="width:60px; text-align: right">23시간 전</div>
      <div class="normal" style="width:100px; text-align: right">13시간 36분 남음</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UrlOutput",
    props: [
      'isLast'
    ]
  }
</script>

<style scoped>
  .text-bold {
    font-weight: bold;
  }

  .url-output-wrapper {
    display: flex;
    padding: 16px 12px;
    padding-right: 0;
  }

  .bottomline {
    border-bottom: 1px solid #e4e8ed;
  }

  .url-output-wrapper div {
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .url-output-wrapper .normal {
    margin-left: 36px;
    color: #77828c;
  }

  .url-output-wrapper .route {
    color: #0090ff;
  }

  .pc-url-title {
    display: flex;
  }

  .mobile-url-title {
    display: none;
  }

  @media screen and (max-width: 814px) {
    .pc-url-title {
      display: none;
    }

    .mobile-url-title {
      display: flex;
    }

    .url-output-wrapper div {
      font-size: 14px;
    }
  }
</style>
