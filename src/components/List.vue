<template>
  <div class="main">
    <table>
      <thead>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
        <td>性别</td>
        <td>地址</td>
        <td>工作</td>
      </tr>
      </thead>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <a href="javaScript:void(0)" class="addDataBtn" @click="dialogVisible = true">添加数据</a>


    <el-dialog
      title="添加数据"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form ref="dataForm" label-width="70px" >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="dataForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="dataForm.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="dataForm.sex"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="dataForm.address"></el-input>
        </el-form-item>
        <el-form-item label="工作" prop="job">
          <el-input v-model="dataForm.job"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import ElDialog from "../../node_modules/element-ui/packages/dialog/src/component"
  export default{
    data() {
      return {
        dialogVisible: false,
        dataForm:{
          id:'',
          name:'',
          age:'',
          sex:'',
          address:'',
          job:''
        }
      }
    },
    components : {
      ElDialog
    },
    methods:{
      submitForm(){
        this.dialogVisible = false
        const dataObj = this.dataForm
        this.$http.post("/api/hero",dataObj).then(
          function(response){
            console.log(response)
          }
        )
      }
    },
    mounted(){
      this.$http.get("/api/hero").then(
        function(response){
          console.log(response)
          this.dataForm = response

        }
      )
    }

  }

</script>
<style lang="scss">
  .main{
    text-align: center;
    table{
      width:80%;
      border-collapse: collapse;
      margin:0 auto;
      border:1px solid #ccc;
      text-align: center;
      thead{
        background: #ebebeb;
      }
      td{
        border:1px solid #ccc;
      }

    }
    .addDataBtn{
      width:80%;
      margin:0 auto;
      text-align: center;
      display: inline-block;
      background: #629feb;
      padding:10px 0 ;
      border-radius: 4px;
      color: #fff;
      margin-top: 20px;
      text-decoration: none;

      &:hover{
        opacity:.8;
      }

    }
  }

</style>
