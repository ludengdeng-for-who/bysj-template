<template>
  <el-container>
    <el-aside
      :style="{
        width: isCollapse ? '250px' : '70px',
        background: sidebarStyles.bgc,
      }"
    >
      <Aside />
    </el-aside>
    <el-container>
      <el-header  :style="{background:rightStyles.headerBgc}">
        <MyHeader />
      </el-header>
      <el-main class="main" :style="{background:rightStyles.mainBgc}">
        <router-view></router-view>
      </el-main>
      <el-footer
        :style="{background:rightStyles.footerBgc}"
        >designed by{{ `${loginInfo.info} ${loginInfo.username}` }}</el-footer
      >
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside";
import MyHeader from "./MyHeader";
import { loginInfo, sidebarStyles, rightStyles} from "@/config";
export default {
  components: {
    Aside,
    MyHeader,
  },
  data() {
    return {
      loginInfo,
      sidebarStyles,
      rightStyles
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isClose;
    },
  },
  methods: {
    back() {},
  },
};
</script>

<style lang="less">
.el-aside {
  color: #333;
  height: 100vh;
  transition: 0.2s all;
  .aside-header {
    height: 66px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(63, 63, 63);
    cursor: pointer;
    .title {
      font-size: 1.1rem;
      font-weight: 400;
      margin-left: 12px;
    }
  }
}
.el-header {
  height: 66px !important;
}
.el-main {
  color: #333;
  height: calc(100vh - 118px);
  overflow: hidden;
}
.el-footer {
  text-align: right;
  line-height: 52px;
  background-color: #fff;
  height: 52px !important;
  color: #a3a4a6;
  font-size: 14px;
  padding: 0 32px;
}
</style>