<template>
  <el-container class="el-container">
  <el-header><i class="el-icon-shopping-cart-1"></i> 购物车</el-header>
  <el-main>

    <el-table class="el-table"
    :data="tableData"
    style="width: 100%">
    <!-- <el-table-column
      fixed
      width="150">
      `checked` 为 true 或 false
      <el-checkbox v-model="checked">get√</el-checkbox>
    </el-table-column> -->
    <el-table-column
      prop="name"
      label="商品名称"
      width="280">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="150">
    </el-table-column>
    <el-table-column
      prop="amount"
      label="数量"
      width="180">
      <!-- <el-input-number 
      v-model="num"   
      @change="handleChange" 
      :min="1" 
      :max="99"
      size="small">
      </el-input-number> -->
      <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
      <template slot-scope="scope">
        <button class="reduce">-</button>
        <span>{{scope.row.num}}</span>
        <!-- scope指定范围，使用该范围内的num -->
        <button class="add">+</button>
      </template>
    </el-table-column>
    <el-table-column
      prop="attribute"
      label="属性"
      width="170">
    </el-table-column>
    <el-table-column
      prop="shop"
      label="店铺"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
        
      </template>
    </el-table-column>
  </el-table>
  </el-main>
  <el-footer>
    <div>

    </div>
    <div>
      <el-button type="info" plain>结算</el-button>
    </div>
  </el-footer>
</el-container>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {

//   },
// })

export default {
    methods:{
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
        handleChange(scope,value) {
        console.log(scope);
        console.log(value);
      // },{
      //   amountChange() {
          
      
      //   }
       }
    },
    data() {
      return {
        num: 1,
        checked: true,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          num:1,
          price: '上海',
          amount: '普陀区',
          attribute: 200333,
          shop: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          num:2,
          price: '上海',
          amount: '普陀区',
          attribute: 200333,
          shop: '上海市普陀区金沙江路 1518 弄'
        }, {
         date: '2016-05-03',
          name: '王小虎',
          num:3,
          price: '上海',
          amount: '普陀区',
          attribute: 200833,
          shop: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          num:1,
          price: '上海',
          amount: '普陀区',
          attribute: 200533,
          shop: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          num:1,
          price: '上海',
          amount: '普陀区',
          attribute: 20333,
          shop: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          num:1,
          price: '上海',
          amount: '普陀区',
          attribute: 20333,
          shop: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          num:1,
          price: '上海',
          amount: '普陀区',
          attribute: 20033,
          shop: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }

  var reduce = document.getElementsByClassName('.reduce');
  var add = document.getElementsByClassName('.add');
  reduce.onclick = function() {
    this.num-=1;
  }
  add.onclick = function() {
    this.num+=1;
  }
</script>


<style scoped>
.el-container{
  height: 100%;
}
</style>