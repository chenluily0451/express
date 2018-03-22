<template>
  <div class="detail">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"> <返回</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="job"
        label="工作">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default{
    data(){
        return{
          tableData:[]
        }
    },
    mounted(){
      this.$http.get("/api/hero/"+this.$route.params.id).then(
        (response) =>{
          this.tableData.push(response.body)
        }
      )
    }
  }
</script>
<style type="scss">
  .detail{
    width:80%;
    margin:0 auto;
  }
</style>
