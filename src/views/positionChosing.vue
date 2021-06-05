<template>
  <div class="block">
    <!-- <span class="demonstration">收货地址</span> -->
    <el-cascader
      placeholder="地址"
      :options="options"
      filterable
      :value="value"
      @input="addchange($event)"
    >
    </el-cascader>
  </div>
</template>


<script>
export default {
  methods: {
    addchange(value) {
      this.value = value;
      this.$emit("change", this.value);
      // console.log(this.value);
    },
  },
  props: {},
  data() {
    return {
      value: "",
      options: [
        {
          value: "银河系",
          label: "银河系",
          children: [
            {
              value: "地球",
              label: "地球",
            },

            {
              value: "月球",
              label: "月球",
              children: [
                {
                  value: "陆地",
                  label: "陆地",
                },
                {
                  value: "天空",
                  label: "天空",
                },
              ],
            },
          ],
        },

        {
          value: "河外星系",
          label: "河外星系",
        },
      ],
    };
  },
};
</script>