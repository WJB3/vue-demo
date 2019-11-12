<template>
  <div class="login_component">
    <a-form :form="form" @submit="handleSubmitForm">
      <a-form-item>
        <a-input
          v-decorator="[
            'username',
            {rules:[{required:true,message:'请填写姓名'}]}
          ]"
          placeholder="请填写姓名"
          size="large"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: '请填写密码' }] }
        ]"
          type="password"
          placeholder="请填写密码"
          size="large"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              initialValue: true,
            }
          ]"
        >记住密码</a-checkbox>
      </a-form-item>
      <a-button type="primary" block html-type="submit" size="large">登录</a-button>
    </a-form>
  </div>
</template>

<script>
 
export default {
  data() {
    return {
      form: null
    };
  },
  created() {
    this.form = this.$form.createForm(this);
  },
  components: {},
  methods: {
    handleSubmitForm(e) {
      e.preventDefault();
      const _this=this;
      console.log(_this);
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch("login",{
            username:values.username,
            password:values.password
          }).then(res=>{
            console.log(!res)
            if(!res){
              _this.$message.error("系统检测到你输入到的信息有误！请重新输入！");
              return ;
            }else{
              _this.$router.push({path:"/"})
            }
          })
        }
      });
      
    }
  }
};
</script>

<style lang="less">
.login_component {
  width: 380px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>