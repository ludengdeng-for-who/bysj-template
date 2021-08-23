<template>
  <el-menu
    :background-color="sidebarStyles.bgc"
    :text-color="sidebarStyles.textColor"
    :active-text-color="sidebarStyles['active-text-color']"
    router
    :default-active="defaultActive"
  >
    <div v-for="item in sidebar" :key="item.title">
      <el-submenu :index="item.title" :key="item.title" v-if="item.children">
        <template slot="title">
          <i :class="[item.icon]"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          :index="child.path"
          v-for="child in item.children"
          :key="child.path"
          >{{ child.title }}</el-menu-item
        >
      </el-submenu>
      <el-menu-item v-else :index="item.path">
        <i :class="[item.icon]"></i>
        {{ item.title }}</el-menu-item
      >
    </div>
  </el-menu>
</template>

<script>
import { sidebar, sidebarStyles } from "@/config";
export default {
  data() {
    return {
      sidebar,
      sidebarStyles,
    };
  },
  computed: {
    defaultActive() {
      return this.$route.path || "";
    },
    isCollapse() {
      return this.$store.state.isClose;
    },
  },
};
</script>

<style lnag="less">
.aside-icons {
  margin-right: 10px;
}

.group {
  border-bottom: 1px solid #3f3f3f;
}
</style>