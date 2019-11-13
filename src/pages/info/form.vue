<template>
  <div>
    <a-form :form="form">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-item label="公司名称">
            <a-input
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入公司名称!',
                    },
                  ],
                },
              ]"
              placeholder="请输入公司名称"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="公司图片">
            <a-upload
              name="upload_file"
              listType="picture-card"
              class="avatar-uploader"
              :customRequest="customRequest"
              :beforeUpload="beforeUpload"
              :headers="headers"
              @change="handleChangeImage"
              v-decorator="[
                `imgurl`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入公司图片!',
                    },
                  ],
                },
              ]"
              placeholder="请输入公司图片"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else class="image_margin">
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <footer-toolbar></footer-toolbar>
  </div>

</template>

<script>
import postImageService from "@/services/fileService";
import FooterToolbar from '@/component/footer-toolbar';
import axios from "axios";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      imageUrl: "",
      loading: false,
      headers: {}
    };
  },
  components:{
    FooterToolbar
  },
  methods: {
    beforeUpload(file) {
      const isJPG = file.type.indexOf("image/") > -1;

      if (!isJPG) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleChangeImage(info) {
      // console.log(info);
      // console.log("handleChangeImage");
      // // if(info.file.status==='uploading'){
      // //   console.log("loading")
      // //   this.loading=true;
      // //   return;
      // // }
      // if(info.file.status==='done'){
      //   console.log("done")
      //   getBase64(info.file.originFileObj,imageUrl=>{
      //     this.imageUrl=imageUrl;
      //     this.loading=false;
      //   });
      // }
    },
    customRequest(params) {
      const _this = this;
      const file = params.file;
      const formData = new FormData();
      formData.append("upload_file", file);
      this.loading = true;
      axios({
        method: "POST",
        url: "/file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(res => {
          if (res) {
            console.log(res);
            _this.loading = false;
            _this.imageUrl = res;
            console.log(_this.loading);
            console.log(_this.imageUrl);
          }
        })
        .catch(err => {});
      console.log(_this.loading);
      console.log(_this.imageUrl);
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