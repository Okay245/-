<template>
  <div class="divlist">
    <h3 class="title">
      <span class="t1">食品</span>
      <span class="t2">More<i class="el-icon-arrow-right"></i></span>
    </h3>
    <ul class="list clearfix" clipContent="false">
      <li v-for="(info, i) in goodslist" :key="i">
        <goods :style="{ marginRight: wrap(i + 1) }" v-bind="info"></goods>
      </li>
    </ul>
  </div>
</template>

<script>
import goods from "../components/goods";
import { request } from "../network/request";
export default {
  data() {
    var good = {
      name: "汉堡包",
      price: 10,
      number: 100,
    };
    return {
      goodslist: Array(17).fill(good),
      goodslist1: null,
    };
  },
  methods: {
    wrap(i) {
      // console.log(i % 5);
      if (i % 5 == 0) {
        return "0";
      }
      return "";
    },
  },
  components: {
    goods,
  },
  created: function () {
    request({
      url: "/home/multidata",
      method: "get",
    }).then(
      (value) => {
        // console.log(value.data);
        this.goodslist1 = value.data;
      },
      (reason) => {
        console.log(reason);
      }
    );
  },
};
</script>

<style scoped>
.title {
  height: 20px;
  margin-top: 20px;
  line-height: 20px;
}

.title .t1 {
  font-size: 20px;
  font-weight: 300;
  margin-top: 20px;
}

.title .t2 {
  float: right;
  font-size: 14px;
  font-weight: 300;
  padding: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  user-select: none;
  cursor: pointer;
}

.title .t2:hover {
  background-color: sandybrown;
}

.divlist {
  width: 1200px;
  margin: 0 auto;
}

.list {
  width: 1200px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>