<template>
  <el-container class="el-container">
    <el-header><i class="el-icon-shopping-cart-1"></i> 购物车</el-header>

    <el-main class="el-main">
      <el-table class="el-table" :data="tableData" style="width: 100%" fit>
        <el-table-column fixed width="150">
          <el-checkbox v-model="checkList">get√</el-checkbox>
        </el-table-column>

        <el-table-column
          prop="name"
          label="商品名称"
          width="280"
        ></el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="150"
        ></el-table-column>

        <el-table-column prop="amount" label="数量" width="200">
          <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
          <template slot-scope="scope">
            <!-- <button class="reduce" @click="reduce(scope.row)">-</button> -->
            <el-button @click="reduce(scope.row)">-</el-button>
            <input
              type="text"
              class="amountSpan"
              v-model="scope.row.amount"
              :min="0"
            />
            <!-- scope指定范围，使用该范围内的num -->
            <!-- <button class="add" @click="add(scope.row)">+</button> -->
            <el-button @click="add(scope.row)">+</el-button>
          </template>
        </el-table-column>

        <el-table-column
          prop="attribute"
          label="属性"
          width="170"
        ></el-table-column>
        <el-table-column prop="shop" label="店铺" width="300"></el-table-column>

        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

    <el-footer>
      <div></div>
      <div>
        <el-button type="info" plain @click="js">结算</el-button>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { request, reqnode } from "../network/request";
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleChange(scope, value) {
      console.log(scope);
      console.log(value);
    },
    add(row) {
      row.amount++;
    },
    reduce(row) {
      if (row.amount) {
        row.amount--;
      }
    },
    checkList() {},
    js() {
      alert("结算成功");
    },
  },
  data() {
    return {
      num: 1,
      checked: true,
      tableData: new Array(),
    };
  },
  created() {
    reqnode({
      url: "/getsession",
      method: "get",
    }).then((value) => {
      // console.log(value);
      if (value.data.status == 1) {
        request({
          url: "/cart/showGood/" + value.data.uid,
          post: "get",
        }).then((value) => {
          console.log(value.data);
          this.tableData = value.data;
        });
      } else {
        alert("请先登录");
        this.$router.push("/login");
      }
    });
  },
};
</script>


<style scoped>
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  height: 100%;
}

.amountSpan {
  /* background-color: aqua; */
  /* display: inline-block; */
  width: 55px;
  line-height: 35px;
  text-align: center;
}

input[type="text"] {
  border-color: #dcdfe6;
}
</style>