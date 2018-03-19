<template>
  <div class="main">
    <table>
      <thead>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
      </thead>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <a href="javaScript:void(0)" class="addDataBtn" @click="modalShow()">添加数据 {{dialogVisible}}</a>


    <el-dialog
      title="添加数据"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form>
        <el-form-item label="名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import ElDialog from "../../node_modules/element-ui/packages/dialog/src/component"
  export default{
    data() {
      return {
        dialogVisible: false
      }
    },
    components : {
      ElDialog
    },
    methods:{
      modalShow(){
          this.dialogVisible = true
      }
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
