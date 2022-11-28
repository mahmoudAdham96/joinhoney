<script>
import pageHeader from "./pageHeader.vue";
import secVideo from "./secVideo.vue";
import secVideo2 from "./secVideo2.vue";
import secVideo3 from "./secVideo3.vue";
import secVideo4 from "./secVideo4.vue";
import secImage from "./secImage.vue";
import loginPage from "./loginPage.vue";

export default {
  components: {
    pageHeader,
    secVideo,
    secVideo2,
    secVideo3,
    secVideo4,
    secImage,
    loginPage,
  },
};
</script>
<template>
  <div id="app" dir="rtl">
    <pageHeader></pageHeader>
    <secVideo></secVideo>
    <secVideo2></secVideo2>
    <secVideo3></secVideo3>
    <secVideo4></secVideo4>
    <secImage></secImage>
    <login-page></login-page>
  </div>
</template>

<style></style>
