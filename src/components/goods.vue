<template>
  <div class="goods" @click="skipToDetails()">
    <div class="divimage">
      <img :src="picurl" class="image" />
    </div>

    <div class="content">
      <h3>{{ name }}</h3>
      <p>
        <span>剩余数量:{{ number }}</span>
      </p>
      <p>
        <span>价格:{{ price }}元</span>
      </p>
      <el-button size="mini" style="display: block; margin: 0 auto"
        >购买</el-button
      >
      <p class="data">
        <span>上架时间:{{ currentDate }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    number: Number,
    picurl: String,
  },
  data() {
    return {
      currentDate: new Date().toDateString(),
    };
  },
  methods:{
    skipToDetails(){
      this.$router.push("/goodInfo");
    }
  }
};
</script>

<style scoped>
.goods {
  width: 220px;
  height: 300px;
  padding: 20px 0;
  margin-right: 25px;
  background-color: #fff;
  margin-top: 25px;
  /* border-radius: 5px; */
  overflow: hidden;
  transition: all 0.4s linear;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  overflow: hidden;
}

.goods:hover {
  box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
  transform: translate3d(0, -2px, 0);
  /* box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2), 0 -10px 10px rgba(0, 0, 0, 0.2); */
}

.divimage {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  overflow: hidden;
}

.image {
  width: 150px;
}

.content {
  width: 100%;
  height: 100%;
}

.content h3 {
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  color: #333;
  margin: 10px 0;
}

.content p {
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  color: #333;
  margin: 10px 0;
}

.content .data {
  font-size: 10px;
  color: #777;
}
</style>