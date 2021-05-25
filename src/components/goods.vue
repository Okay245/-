<template>
  <div class="goods">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    />
    <div class="float_right">
      <h3>{{ name }}</h3>
      <p>
        <span>价格:{{ price }}元</span>
      </p>
      <p>
        <span>剩余数量:{{ number }}</span>
      </p>
      <p><el-button>购买</el-button></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    number: Number,
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style>
.goods {
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  transition: all 1s;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.goods:hover {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
.image {
  float: left;
  height: 200px;
}

.float_right {
  margin-left: 100px;
}

.float_right h3,
.float_right p {
  text-align: center;
}
</style>