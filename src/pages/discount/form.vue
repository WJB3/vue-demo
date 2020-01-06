<template>
  <a-card :bordered="bordered">
    <a-form :form="form">
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="优惠券名称:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input
              :disabled="disabled"
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入名称!',
                    },
                    
                  ],
                  initialValue:current.name
                },
              ]"
              placeholder="请输入优惠券名称"
            />
          </a-form-item>
        </a-col>

        <a-col :span="8">
          <a-form-item label="满减值:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input-number
              class="input_number"
              :disabled="disabled"
              v-decorator="[
                `fullred`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入满减值!',
                    },
                     
                  ],
                  initialValue:current.fullred
                },
              ]"
              placeholder="请输入满减值"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="优惠力度:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input-number
              class="input_number"
              :disabled="disabled"
              v-decorator="[
                `red`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入优惠力度!',
                    },
                     
                  ],
                  initialValue:current.red
                },
              ]"
              placeholder="请输入优惠力度"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="优惠开始时间" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-date-picker
              :disabled="disabled"
              v-decorator="[
                `starttime`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入优惠开始时间!',
                    },
                     
                  ],
                  initialValue:filterStartTime
                },
              ]"
              placeholder="请输入优惠开始时间"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="优惠结束时间" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-date-picker
              :disabled="disabled"
              v-decorator="[
                `endtime`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入优惠结束时间!',
                    },
                     
                  ],
                  initialValue:filterEndTime
                },
              ]"
              placeholder="请输入优惠结束时间"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="优惠券类别" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-select
              :disabled="disabled"
              v-decorator="[
                `lb1`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入优惠券类别!',
                    },
                     
                  ],
                  initialValue:current.lb1
                },
              ]"
            >
              <a-select-option :value="0">现金抵用券</a-select-option>
              <a-select-option :value="1">满减卷</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">
          <a-form-item label="优惠券产品类别" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-select
              :disabled="disabled"
              v-decorator="[
                `lb2`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入优惠券产品类别!',
                    },
                     
                  ],
                  initialValue:current.lb2
                },
              ]"
            >
              <a-select-option :value="0">通用卷</a-select-option>
              <a-select-option :value="1">轮胎类</a-select-option>
              <a-select-option :value="2">机油类</a-select-option>
              <a-select-option :value="3">电池类</a-select-option>
            </a-select>
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
import moment from "moment";

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      imageUrl: this.current.imgurl ? this.current.imgurl : "",
      loading: false,
      headers: {},
      disabled: this.type === "VIEW",
      bordered: false,
      filterStartTime: moment(this.current.starttime),
      filterEndTime: moment(this.current.endtime)
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
          newFormData.append("fullred", values.fullred);
          newFormData.append("red", values.red);
          newFormData.append("lb1", values.lb1);
          newFormData.append("lb2", values.lb2);
          newFormData.append(
            "starttime",
            values.starttime.format("YYYY-MM-DD")
          );
          newFormData.append("endtime", values.endtime.format("YYYY-MM-DD"));
          if (this.type === "ADD") {
            this.$store.dispatch("discount/add", newFormData).then(res => {
              console.log(res);
              if (res) {
                this.$emit("onAddSuccess");
              }
            });
          } else if (this.type === "EDIT") {
            console.log("EDIT");
            newFormData.append("uuid", uuid);
            this.$store.dispatch("discount/edit", newFormData).then(res => {
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