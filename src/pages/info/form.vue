<template>
  <div>
    <a-form :form="form">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-item label="公司名称:"  :label-col="{ span:24 }" :wrapper-col="{ span: 24 }"> 
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
         <a-col :span="12">
          <a-form-item label="描述" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-textarea
              class="descs"
             
              v-decorator="[
                `descs`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入描述!',
                    },
                     
                  ],
                 
                },
              ]"
            />
          </a-form-item>
        </a-col>
        <!-- <a-col :span="8">
          <a-form-item label="公司图片:" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-upload
              name="upload_file"
              listType="picture-card"
              class="avatar-uploader"
              :beforeUpload="beforeUpload"
              :headers="headers"
              @change="handleChangeImage"
              action="/file"
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
        </a-col> -->
      </a-row>
    </a-form>
    <footer-toolbar>
      <a-button type="primary"  @click="handleSubmit" :loading="loading">确定</a-button>
    </footer-toolbar>
  </div>

</template>

<script>
import postImageService from "@/services/fileService";
import FooterToolbar from '@/component/footer-toolbar';
import { mapState } from "vuex";
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
      headers: {},
      currentCompany:{}
    };
  },
  components:{
    FooterToolbar
  },
  computed: mapState({
    data: state => state.discount.data,
    pagination: state => state.discount.pagination,
    type: state => state.company.type,
    current: state => state.company.current,
    visible: state => state.discount.visible,
    loading: state => state.company.loading,
    searchText:state=>state.discount.searchText
  }),
  mounted:function(){
    this.getDetail()
  },
  methods: {
    getDetail(){
      this.$store.dispatch("company/getDetail", {}).then(res=>{
        this.currentCompany=res.rows && res.rows.length>0?res.rows[0]:{};
       
        this.form.setFieldsValue({
          name:this.currentCompany.name,
          descs:this.currentCompany.descs
        })
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
    handleChangeImage(info) {
       if (info.file.status === 'uploading') {
          this.loading = true;
          return;
        }
        if (info.file.status === 'done') {
       
          getBase64(info.file.originFileObj, imageUrl => {
            this.imageUrl = imageUrl;
            this.loading = false;
          });
        }
    },
    handleSubmit() {
      this.form.validateFields((err, vals) => {
        if (!err) {
          const values = vals;

          const { uuid } = this.current;

          const newFormData = new FormData();
          newFormData.append("name", values.name);
          newFormData.append("descs", values.descs);
          
          if (this.type === "ADD") {
            this.$store.dispatch("discount/add", newFormData).then(res => {
             
              if (res) {
                this.$emit("onAddSuccess");
              }
            });
          } else if (this.type === "EDIT") {
            
            this.$store.dispatch("company/edit", newFormData).then(res => {
              if (res) {
                this.getDetail()
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