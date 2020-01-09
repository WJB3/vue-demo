<template>
  <a-upload
    name="upload_file"
    listType="picture-card"
    class="avatar-uploader"
    :showUploadList="false"
    :beforeUpload="beforeUpload"
    :headers="headers"
    @change="handleChangeImage"
    action="https://www.lianghaisy.com/upload"
    :placeholder="placeholder"
     
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else class="image_margin">
      <a-icon :type="loading ? 'loading' : 'plus'" />
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>

<script>
import axios from "axios";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  props: ["name", "value"],
  data() {
    return {
      placeholder: `请输入${this.name}`,
      headers: {
        //'Content-Type':"multipart/form-data"
      },
      imageUrl: "",
      loading: false
    };
  },
  mounted: function() {
    this.imageUrl = this.value;
  },
  methods: {
    customRequest({ action, data, file, withCredentials, headers }) {
      const _this = this;
      const formData = new FormData();
      formData.append("upload_file", file);
      axios
        .post(action, formData, {
          withCredentials,
          headers
          // onUploadProgress: ({ total, loaded }) => {
          //   onProgress({ percent: Math.round(loaded / total * 100).toFixed(2) }, file);
          // },
        })
        .then(res => {
          console.log(res);
          _this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },

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
    triggerChange: function(changedValue) {
      this.$emit("change", changedValue);
    },
    handleChangeImage(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
          this.triggerChange(info.file.response);
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
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