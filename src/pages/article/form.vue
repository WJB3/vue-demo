<template>
  <a-card :bordered="bordered">
    <a-form :form="form">
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="课程分类" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <pop-select-lesson
              class="brand"
              :disabled="disabled"
              v-decorator="[
                `class`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入课程分类!',
                    },
                    
                  ],
                  initialValue:initialBrand
                },
              ]"
              placeholder="请输入品牌"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="标题:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input
              :disabled="disabled"
              v-decorator="[
                `title`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入标题!',
                    },
                    
                  ],
                  initialValue:current.title
                },
              ]"
              placeholder="请输入标题"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="链接:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input
              :disabled="disabled"
              v-decorator="[
                `urls`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入链接!',
                    },
                    
                  ],
                  initialValue:current.urls
                },
              ]"
              placeholder="请输入链接"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="16">
          <a-form-item label="描述:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-textarea
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
              placeholder="请输入描述"
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
import PopSelectLesson from "@/component/pop-select-lesson";
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
      initialBrand: this.lesson.id
        ? { id: this.lesson.id, name: this.lesson.name }
        : { id: "", name: "" }
    };
  },
  components: {
    FooterToolbar,
    FileUploader,
    PopSelectLesson
  },
  mounted() {},
  props: ["current", "type","lesson"],
  methods: {
    customRequest(params) {},
    handleSubmit() {
      this.form.validateFields((err, vals) => {
        if (!err) {
          const values = vals;

          const { uuid } = this.current;

          const newFormData = new FormData();
          newFormData.append("title", values.title);
          newFormData.append("descs", values.descs);
          newFormData.append("urls", values.urls);
          newFormData.append("classid", values.class.id);
          if (this.type === "ADD") {
            this.$store.dispatch("article/add", newFormData).then(res => {
              console.log(res);
              if (res) {
                this.$emit("onAddSuccess");
              }
            });
          } else if (this.type === "EDIT") {
            console.log("EDIT");
            newFormData.append("uuid", uuid);
            this.$store.dispatch("article/edit", newFormData).then(res => {
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