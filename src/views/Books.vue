<template>
  <el-card class="card">
    <el-row type="flex" justify="space-between">
      <el-col :span="2">
        <el-button type="primary" @click="add">添加</el-button>
      </el-col>
      <el-col :span="6">
        <div style="display: flex">
          <el-input placeholder="根据名称搜索"></el-input>
          <el-button style="margin-left: 10px">搜索</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table :data="books">
      <el-table-column align="center" prop="name" label="书籍名称" />
      <el-table-column align="center" prop="author" label="书籍作者" />
      <el-table-column align="center" prop="time" label="出版时间" />
      <el-table-column align="center" prop="where" label="出版社" />
      <el-table-column align="center" prop="type" label="书籍类型" />
      <el-table-column align="center" prop="status" label="是否借阅">
        <template slot-scope="{ row }">
          <el-tag :type="row.status ? 'danger' : 'success'" effect="dark">
            {{ row.status ? "已借阅" : "未借阅" }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="visible" title="内容">
      <span>这是一段信息</span>
      <span slot="footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary">确定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
import { DB } from "@/utils";
import { books } from "./data.js";
const Books = new DB("books");
if (Books.isNull()) {
  Books.init(books);
}
export default {
  data() {
    return {
      books: Books.getList(),
      visible: false,
    };
  },
  methods: {
    cancel() {
      this.visible = false;
    },
    add() {
      this.visible = true;
    },
  },
};
</script>

<style>
</style>