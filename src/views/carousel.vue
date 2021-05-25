<template>
  <div>
    <el-carousel :interval="1500" type="card" height="300px" trigger="click">
      <el-carousel-item v-for="(url, i) in urls" :key="i">
        <div
          class="carousel"
          :style="{ backgroundImage: 'url(' + url + ')' }"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urls: [
        "https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg",
        "https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg",
        "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
      ],
    };
  },
};
</script>

<style>
.carousel {
  width: 100%;
  height: 100%;
  background-color: blue;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>