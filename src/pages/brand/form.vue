<template>
  <div>
    <a-form :form="form">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-item label="品牌名称:" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入品牌名称!',
                    },
                    
                  ],
                  initialValue:current.name
                },
              ]"
              placeholder="请输入品牌名称"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="品牌图片:" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
             <file-uploader name="品牌图片"  v-decorator="[
                `imgurl`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入公司图片!',
                    },
                  ],
                },
              ]"></file-uploader>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="优先级:" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input-number
              v-decorator="[
                `aindex`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入优先级!',
                    },
                     
                  ],
                  initialValue:current.aindex
                },
              ]"
              placeholder="请输入公司名称"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <footer-toolbar>
      <a-button type="primary" @click="handleSubmit">确定</a-button>
    </footer-toolbar>
  </div>
</template>

<script>
import postImageService from "@/services/fileService";
import FooterToolbar from "@/component/footer-toolbar";
import FileUploader from '@/component/file-loader'
import axios from "axios";
 
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      imageUrl: this.current.imgurl ? this.current.imgurl : "",
      loading: false,
      headers: {}
    };
  },
  components: {
    FooterToolbar,
    FileUploader
  },
  mounted() {},
  props: ["current", "type"],
  methods: {
   
    
    customRequest(params) {},
    handleSubmit() {
      this.form.validateFields((err, vals) => {
        if (!err) {
          const values = vals;
 
          if (values.imgurl && values.imgurl.file) {
            values.imgurl = values.imgurl.file.response;
          }else if(values.imgurl){
            values.imgurl = values.imgurl;
          }

          const newFormData = new FormData();
          newFormData.append("name", values.name);
          newFormData.append("imgurl", values.imgurl);
          newFormData.append("aindex", values.aindex);
          if (this.type === "ADD") {
            this.$store.dispatch("brand/add", newFormData).then(res => {
              console.log(res);
            });
          }else if(this.type === "EDIT"){
            this.$store.dispatch("brand/edit", newFormData).then(res => {
              console.log(res);
            });
          }
          this.$emit("onAddSuccess");
        }
      });
    }
  }
};
</script>

<style lang="less">
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.image_margin {
  margin-top: 32px;
}
</style>