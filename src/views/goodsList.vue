<template>
  <div class="divlist">
    <!-- 食品 -->
    <h3 class="title">
      <span class="t1">食品</span>
      <span class="t2">More<i class="el-icon-arrow-right"></i></span>
    </h3>
    <ul class="list clearfix" clipContent="false">
      <li v-for="(info, i) in goodslist" :key="i">
        <goods :style="{ marginRight: wrap(i + 1) }" v-bind="info"></goods>
      </li>
    </ul>
    <!-- 手机 -->
    <h3 class="title">
      <span class="t1">手机</span>
      <span class="t2">More<i class="el-icon-arrow-right"></i></span>
    </h3>
    <ul class="list clearfix" clipContent="false">
      <li v-for="(info2, i) in goodslist2" :key="i">
        <goods :style="{ marginRight: wrap(i + 1) }" v-bind="info2"></goods>
      </li>
    </ul>
    <!-- 衣服 -->
    <h3 class="title">
      <span class="t1">衣服</span>
      <span class="t2">More<i class="el-icon-arrow-right"></i></span>
    </h3>
    <ul class="list clearfix" clipContent="false">
      <li v-for="(info3, i) in goodslist3" :key="i">
        <goods :style="{ marginRight: wrap(i + 1) }" v-bind="info3"></goods>
      </li>
    </ul>
  </div>
</template>

<script>
import goods from "../components/goods";
import { request } from "../network/request";
export default {
  data() {
    let good = {
      id: 1,
      name: "汉堡包",
      price: 10,
      number: 100,
      picurl:
        "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    };

    let good2 = {
      id: 2,
      name: "苹果12",
      price: 1999,
      number: 5000,
      picurl:
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=200&h=200&f=webp&q=90",
    };
    let good3 = {
      id: 3,
      name: "女装",
      price: 688,
      number: 182,
      picurl:
        "https://img.alicdn.com/imgextra/i4/103981365/O1CN012Rep4q1LxDJQJWZ5H_!!0-saturn_solar.jpg_468x468q75.jpg_.webp",
    };
    return {
      goodslist: Array(10).fill(good),
      goodslist2: Array(10).fill(good2),
      goodslist3: Array(10).fill(good3),
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