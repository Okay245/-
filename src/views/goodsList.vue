<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="6"
        v-for="(good, index) in goodslist"
        :key="index"
        :offset="0"
      >
        <goods v-bind="good"></goods>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import goods from "../components/goods";
export default {
  data() {
    var good = {
      name: "汉堡包",
      price: 10,
      number: 100,
    };
    return {
      goodslist: Array(20).fill(good),
    };
  },
  components: {
    goods,
  },
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>