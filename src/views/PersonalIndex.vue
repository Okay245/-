<template >
  <!-- 左侧导航栏 -->
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <!-- 默认打开的导航栏 -->
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-user"></i>我</template>
          <el-menu-item index="1-3" @click="toggleTab('PersonalInfo')"
            >个人信息</el-menu-item
          >
          <el-menu-item index="1-4" @click="toggleTab('CorrectInfo')"
            >修改信息</el-menu-item
          >
          <el-menu-item index="1-5" @click="unlogin">退出登录</el-menu-item>
          <!-- 每一个tab绑定一个点击事件，分别传入更改的组件名为参数 -->
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-star-off"></i>收藏</template>
          <!-- <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group> -->
          <el-menu-item-group>
            <el-menu-item index="2-3">收藏的商品</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group index="2-4">
            <!-- <template slot="title"></template> -->
            <el-menu-item index="2-4-1">收藏的店铺</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-time"></i>历史</template>
          <el-menu-item-group>
            <el-menu-item index="2-3">买过</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <el-menu-item index="2-3">足迹</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"
            ><i class="el-icon-shopping-cart-1"></i>购物车</template
          >
          <el-menu-item index="4-1" @click="toggleTab('ShoppingCart')"
            >购物车</el-menu-item
          >
        </el-submenu>

        <el-submenu index="5">
          <template slot="title"><i class="el-icon-message"></i>消息</template>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 上方导航栏 -->
      <el-header
        style="
          position: relative;
          text-align: center;
          font-size: 12px;
          height: 100px;
        "
      >
        <span style="color: grey; font-size: 40px; line-height: 100px"
          >个人中心</span
        >
        <span style="position: absolute; right: 50px; line-height: 100px">
          <el-dropdown>
            <i class="el-icon-user" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{userData.userName}}</span>
        </span>
      </el-header>

      <keep-alive>
        <component
          v-bind:is="currentTabComponent"
          :tableData="userData"
        ></component>
      </keep-alive>
    </el-container>
  </el-container>
</template>

<script>
import PersonalInfo from "./PersonalInfo.vue";
import CorrectInfo from "./CorrectInfo";
import ShoppingCart from "./ShoppingCart.vue";
import { request, reqnode } from "../network/request";

export default {
  components: {
    //声明子组件
    PersonalInfo,
    CorrectInfo,
    ShoppingCart,
  },
  data() {
    return {
      currentTabComponent: PersonalInfo,
      userData: {
        userName: "Tom33",
        account: 1,
        gender: "f",
        phoneNumber: "1122334455",
        birthday: "2020 2 2",
        address: "...",
      },
    };
  },
  methods: {
    toggleTab(tab) {
      // this.currentTabComponent = tab;   //tab为当前触发标签页的组件名
      if (tab == "PersonalInfo") {
        this.currentTabComponent = PersonalInfo;
        console.log(tab);
      } else if (tab == "CorrectInfo") {
        this.currentTabComponent = CorrectInfo;
        console.log(tab);
      } else if (tab == "ShoppingCart") {
        this.currentTabComponent = ShoppingCart;
        console.log(tab);
      }
    },
    unlogin() {
      reqnode({
        url: "/delsession",
        method: "get",
      }).then((value) => {
        if (value.data.status == 1) {
          this.$router.push("/");
        }
      });
    },
  },
  created() {
    // console.log(this.$root.uid);
    reqnode({
      url: "/getsession",
      method: "get",
    }).then((value) => {
      // console.log(value);
      if (value.data.status == 1) {
        request({
          url: "/user/userInfo/" + value.data.uid,
          post: "get",
        }).then((value) => {
          // console.log(value.data);
          (this.userData.userName = value.data.userName),
            (this.userData.account = value.data.uid),
            (this.userData.gender = value.data.gender),
            (this.userData.phoneNumber = value.data.phoneNumber),
            (this.userData.birthday = value.data.birthday),
            (this.userData.address = value.data.address);
        });
      } else {
        alert("请先登录");
        this.$router.push("/login");
      }
    });
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>