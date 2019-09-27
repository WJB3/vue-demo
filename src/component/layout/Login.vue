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
import RandomCode from "./RandomCode";
import CanvasCode from "./CanvasCode";
import SlideVerificationCode from "./SlideVerificationCode";
export default {
  data() {
    return {
      form: null
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  components: {},
  methods: {
    handleSubmitForm(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style lang="less">
.login_component {
 
  width:380px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  
  
}
</style>