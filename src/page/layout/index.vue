<template>
  <div class="layout">
    <el-row>
      <el-col :span="6"><asideMenu /></el-col>
      <el-col :span="18"> <mainContent /></el-col>
    </el-row>
  </div>
</template>

<script>
import asideMenu from "./asideMenu.vue";
import mainContent from "./content.vue";
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
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  components: {
    asideMenu,
    mainContent,
  },
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.layout ,.el-row ,.el-col{
  height: 100%;
}
</style>