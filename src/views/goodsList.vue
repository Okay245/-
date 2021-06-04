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
    // let good = {
    //   id: 1,
    //   name: "汉堡包",
    //   price: 10,
    //   number: 100,
    //   picurl:
    //     "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    // };

    return {
      // goodslist: Array(10).fill(good),
      goodslist: new Array(),
      goodslist2: new Array(),
      goodslist3: new Array(),
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
    //首页请求数据
    let getList = async (page) => {
      return request({
        url: "/good/findAll/" + page + "/10",
        method: "get",
      }).then(
        (value) => {
          // console.log(value.data.content);
          return value.data.content;
        },
        (reason) => {
          console.log(reason);
        }
      );
    };
    let post = async () => {
      this.goodslist = await getList(0);
      this.goodslist2 = await getList(1);
      this.goodslist3 = await getList(2);
    };
    post();
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