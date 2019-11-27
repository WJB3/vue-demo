<template>
  <a-card :bordered="bordered">
    <a-form :form="form">
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="分类名称:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input
              :disabled="disabled"
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入分类名称!',
                    },
                    
                  ],
                  initialValue:current.name
                },
              ]"
              placeholder="请输入分类名称"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="品牌" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <pop-select-brand
              class="brand"
              :disabled="disabled"
              v-decorator="[
                `brand`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入品牌!',
                    },
                    
                  ],
                  initialValue:initialBrand
                },
              ]"
              placeholder="请输入品牌"
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
      bordered: false,
      initialBrand: this.current.brandid?{id:this.current.brandid,name:this.current.brandname}:{id:"",name:""}
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
          newFormData.append("brandid", values.brand.id)
          if (this.type === "ADD") {
            this.$store.dispatch("model/add", newFormData).then(res => {
              console.log(res);
              if (res) {
                this.$emit("onAddSuccess");
              }
            });
          } else if (this.type === "EDIT") {
            console.log("EDIT");
            newFormData.append("uuid", uuid);
            this.$store.dispatch("model/edit", newFormData).then(res => {
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