<template>
  <div class="header">
    <div class="title" @click="goHome">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
import {title,rightStyles} from "@/config"
export default {
  data(){
    return {
      title,
    }
  },
  methods:{
    goHome(){
      this.$router.push("/")
    }
  }
};
</script>

<style lang="less">
.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size: 22px;
  font-weight: 700;
  padding-left: 12px;
  padding-right: 12px;
  .title{
    cursor: pointer;
  }
}
</style>