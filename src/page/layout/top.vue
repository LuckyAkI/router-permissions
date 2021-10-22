<template>
  <div class="header-top">
    <el-button size="medium" type="info" @click="login_out">退出</el-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations({
      CLEAR_TOKEN: "CLEAR_TOKEN",
      test: "menu/test",
      CLEAR_PERMISSIONSlIST: "menu/CLEAR_PERMISSIONSlIST",
      CLEAR_MENUlIST: "menu/CLEAR_MENUlIST",
    }),
    login_out() {
      this.CLEAR_TOKEN();

      this.test();

      this.$router.replace("/login");
      window.location.reload()
      // this.CLEAR_MENUlIST();
      // this.CLEAR_PERMISSIONSlIST();
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.header-top {
  padding: 10px 30px;
  height: 50px;
  border-bottom: 2px solid skyblue;
  display: flex;
  justify-content: end;
}
</style>