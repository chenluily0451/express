<template>
  <div class="main">
    <el-table
      :data="tableData"
      border
      stripe
      :cell-style="{'text-align':'center'}"
      style="width: 80%">
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
    <a href="javaScript:void(0)" class="addDataBtn" @click="dialogVisible = true">添加数据</a>


    <el-dialog
      title="添加数据"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="70px" >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="dataForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="dataForm.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="dataForm.sex" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="dataForm.address"></el-input>
        </el-form-item>
        <el-form-item label="工作" prop="job">
          <el-input v-model="dataForm.job"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('dataForm')">提交</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>
<script>
  import ElDialog from "../../node_modules/element-ui/packages/dialog/src/component"
  export default{
    data() {

      var ageValidator = (rule, value, callback) => {
        setTimeout(()=>{
          if(!Number.isInteger(value*1)){
            callback(new Error('请输入数字'))
          }else if (value <18){
            callback(new Error('年龄必须满18岁'))
          }else{
            callback()
          }
        })
      };

      return {
        tableData:[],
        options:[
          {
            value:'女',
            label:'女'
          },
          {
            value:'男',
            label:'男'
          }
        ],
        dialogVisible: true,
        dataForm:{
          id:'',
          name:'',
          age:'',
          sex:'',
          address:'',
          job:''
        },
        rules:{
          name:[
            {required:true, message:'请输入姓名', trigger:'blur'},
            {min:3, max:8, message:'长度在3-8之间', trigger:'blur'}
          ],
          age:[
            {required:true, message:'请输入年龄', trigger:'blur'},
            { validator: ageValidator, trigger:'blur'}
          ],
          sex:[
            {required:true, message:'请选择性别'},
          ],
          address:[
            {required:true, message:'请输入地址'},
          ],
          job:[
            {required:true, message:'请输入工作'},
          ]
        }
      }
    },
    components : {
      ElDialog
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) =>{
            if(valid) {
                alert('submit!')
            } else{
              console.log('error.....')
              return false
            }
        })




//        this.dialogVisible = false
//        const dataObj = this.dataForm
//        this.$http.post("/api/hero",dataObj).then(
//          function(response){
//            console.log(response)
//            this.tableData = response.body
//          }
//        )
      }
    },
    mounted(){
      this.$http.get("/api/hero").then(
        function(response){
          console.log(response)
          this.tableData = response.body

        }
      )
    }

  }

</script>
<style lang="scss">
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .cell{
      text-align: center;
    }
    .el-select{
      width:100%;
    }
  }

</style>
