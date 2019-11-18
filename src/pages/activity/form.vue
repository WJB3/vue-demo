<template>
  <a-card :bordered="bordered">
    <a-form :form="form">
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="活动标题:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input
              :disabled="disabled"
              v-decorator="[
                `title`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入活动标题!',
                    },
                    
                  ],
                  initialValue:current.title
                },
              ]"
              placeholder="请输入活动标题"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="活动图片:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <file-uploader
              name="活动图片"
              v-decorator="[
                `imgurl`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入活动图片!',
                    },
                  ],
                  initialValue:current.imgurl
                },
              ]"
            ></file-uploader>
          </a-form-item>
        </a-col>
         
      </a-row>
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="12">
          <a-form-item label="正文" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-textarea
              class="texts"
              :disabled="disabled"
              v-decorator="[
                `texts`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入正文!',
                    },
                     
                  ],
                  initialValue:current.texts
                },
              ]"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
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
          newFormData.append("title", values.title);
          newFormData.append("imgurl", values.imgurl);
          newFormData.append("texts", values.texts);
          newFormData.append("descs", values.descs);
          if (this.type === "ADD") {
            this.$store.dispatch("activity/add", newFormData).then(res => {
              console.log(res);
              if (res) {
                this.$emit("onAddSuccess");
              }
            });
          } else if (this.type === "EDIT") {
            console.log("EDIT");
            newFormData.append("uuid", uuid);
            this.$store.dispatch("activity/edit", newFormData).then(res => {
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