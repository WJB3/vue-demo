<template>
  <a-card :bordered="bordered">
    <a-form :form="form">
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="品牌名称:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input
              :disabled="disabled"
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
          <a-form-item label="品牌图片:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <file-uploader
              name="品牌图片"
              v-decorator="[
                `imgurl`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入公司图片!',
                    },
                  ],
                  initialValue:current.imgurl
                },
              ]"
            ></file-uploader>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="优先级:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input-number
              class="input_number"
              :disabled="disabled"
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
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="描述" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-textarea
              class="descs"
              :disabled="disabled"
              v-decorator="[
                `descs`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入描述!',
                    },
                     
                  ],
                  initialValue:current.descs
                },
              ]"
            />
          </a-form-item>
        </a-col>
         <a-col :span="8">
          <a-form-item label="详情链接" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-textarea
              class="descs"
              :disabled="disabled"
              v-decorator="[
                `detail`,
                {
                  rules: [
                    {
                      required: false,
                      message: '请输入详情链接!',
                    },
                     
                  ],
                  initialValue:current.detail
                },
              ]"
            />
          </a-form-item>
        </a-col>
      </a-row>
       
    </a-form>
    <footer-toolbar>
      <a-button type="primary" @click="handleSubmit" :disabled="disabled">确定</a-button>
    </footer-toolbar>
  </a-card>
</template>

<script>
import postImageService from "@/services/fileService";
import FooterToolbar from "@/component/footer-toolbar";
import FileUploader from "@/component/file-loader";
import PopSelectBrand from "@/component/pop-select-brand";
import axios from "axios";

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      imageUrl: this.current.imgurl ? this.current.imgurl : "",
      loading: false,
      headers: {},
      disabled: this.type === "VIEW",
      bordered: false
    };
  },
  components: {
    FooterToolbar,
    FileUploader,
    PopSelectBrand
  },
  mounted() {},
  props: ["current", "type"],
  methods: {
    customRequest(params) {},
    handleSubmit() {
      this.form.validateFields((err, vals) => {
        if (!err) {
          const values = vals;

          const { uuid } = this.current;

          const newFormData = new FormData();
          newFormData.append("name", values.name);
          newFormData.append("imgurl", values.imgurl);
          newFormData.append("aindex", values.aindex);
          newFormData.append("detail", values.detail);
          newFormData.append("descs", values.descs);
          if (this.type === "ADD") {
            this.$store.dispatch("brand/add", newFormData).then(res => {
              console.log(res);
              if (res) {
                this.$emit("onAddSuccess");
              }
            });
          } else if (this.type === "EDIT") {
            console.log("EDIT");
            newFormData.append("uuid", uuid);
            this.$store.dispatch("brand/edit", newFormData).then(res => {
              if (res) {
                this.$emit("onEditSuccess");
              }
            });
          }
        }
      });
    }
  }
};
</script>

<style lang="less">
.input_number {
  width: 80%;
}
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