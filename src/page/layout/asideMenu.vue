<template>
  <div class="aside">
    <el-menu
      class="el-menu-vertical-demo"
      :unique-opened="true"
      router
      background-color="#eee"
      :collapse-transition='false'
    >
      <div v-for="item in menuList.children" :key="item.path">
        <el-menu-item :index="item.path" v-if="!item.children">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.meta.name }}</span>
        </el-menu-item>
        <el-submenu unique-opened :index="item.path" v-if="item.children">
          <template slot="title">
            <i class="el-icon-menu"></i>

            <span>{{ item.meta.name }}</span>
          </template>
          <el-menu-item-group
            index="item_children.path"
            v-for="item_children in item.children"
            :key="item_children.path"
          >
            <el-menu-item
              v-if="!item_children.children"
              :index="item_children.path"
              >{{ item_children.meta.name }}</el-menu-item
            >

            <el-submenu
              :index="item_children.path"
              v-if="item_children.children"
            >
              <template slot="title">{{ item_children.meta.name }}</template>
              <el-menu-item
                :index="v.path"
                v-for="v in item_children && item_children.children"
                :key="v.path"
                >{{ v.meta.name }}</el-menu-item
              >
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      menuList: (state) => state.menu.menuList,
    }),
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.aside,
.el-menu {
  height: 100%;
}
.el-submenu .el-menu-item {
  min-width: 0;
}
</style>