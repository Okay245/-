<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router="true"
        @select="handleSelect"
      >
        <el-menu-item class="el-menu-demo-item" index="/">首页</el-menu-item>
        <el-submenu index="2">
          <template class="el-menu-demo-item" slot="title">我的</template>
          <el-menu-item index="2-1">买过</el-menu-item>
          <el-menu-item index="2-2">足迹</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">收藏</template>
            <el-menu-item index="2-4-1">宝贝</el-menu-item>
            <el-menu-item index="2-4-2">店铺</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item class="el-menu-demo-item" index="3"> 消息 </el-menu-item>
        <el-menu-item class="el-menu-demo-item" index="/shoppingCart">
          <i class="el-icon-shopping-cart-1"></i>购物车
        </el-menu-item>
      </el-menu>
    </el-header>

    <el-main style="">
      <intro class="intro">
        <span class="block">
          <el-carousel trigger="click" height="600px" style="width: 400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </span>

        <span>
          <el-form ref="form" :model="sizeForm" label-width="80px" size="">
            <div style="text-align: center; padding-bottom: 30px">
              <h1>{{ title }}</h1>
            </div>

            <el-form-item prop="price" label="价格："></el-form-item>

            <el-form-item
              size="mini"
              prop="remain"
              label="剩余："
            ></el-form-item>
            <el-form-item
              size="mini"
              prop="saleAmount"
              label="月销量："
            ></el-form-item>

            <el-form-item label="尺码">
              <el-radio-group v-model="sizeForm.type">
                <el-radio-button label="S" name="type"></el-radio-button>
                <el-radio-button label="M" name="type"></el-radio-button>
                <el-radio-button label="L" name="type"></el-radio-button>
                <el-radio-button label="XL" name="type"></el-radio-button>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="颜色">
              <el-radio-group v-model="sizeForm.type">
                <el-radio-button label="黑色" name="type"></el-radio-button>
                <el-radio-button label="白色" name="type"></el-radio-button>
                <el-radio-button label="米色" name="type"></el-radio-button>
                <el-radio-button label="墨绿色" name="type"></el-radio-button>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="服务">
              <el-radio-group v-model="sizeForm.resource" size="medium">
                <el-radio border label="直接付款"></el-radio>
                <el-radio border label="分期付款"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item size="large">
              <el-button type="primary" @click="onSubmit">立即购买</el-button>
              <el-button>加入购物车</el-button>
            </el-form-item>
          </el-form>
        </span>
      </intro>

      <div class="details">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      title: "title",
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.intro {
  display: flex;
  justify-content: center;
}

.intro .block {
  padding-right: 100px;
}
</style>