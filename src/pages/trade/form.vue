<template>
  <a-card :bordered="bordered" :style="{'padding-bottom':'20px'}">
    <a-form :form="form">
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="规格型号:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input
              :disabled="disabled"
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入规格型号!',
                    },
                    
                  ],
                  initialValue:current.name
                },
              ]"
              placeholder="请输入规格型号"
            />
          </a-form-item>
        </a-col>
         
        <a-col :span="8">
          <a-form-item label="商品图片:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <file-uploader
              name="商品图片"
              v-decorator="[
                `imgurl`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入商品图片!',
                    },
                  ],
                  initialValue:current.imgurl
                },
              ]"
            ></file-uploader>
          </a-form-item>
        </a-col>
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
      </a-row>
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="价格:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input-number
              class="input_number"
              :disabled="disabled"
              v-decorator="[
                `price`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入价格!',
                    },
                     
                  ],
                  initialValue:current.price
                },
              ]"
              placeholder="请输入价格"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="积分值:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input-number
              class="input_number"
              :disabled="disabled"
              v-decorator="[
                `jfcount`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入积分值!',
                    },
                     
                  ],
                  initialValue:current.jfcount
                },
              ]"
              placeholder="请输入积分值"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="库存数量:" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-input-number
              class="input_number"
              :disabled="disabled"
              v-decorator="[
                `stock`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入库存数量!',
                    },
                     
                  ],
                  initialValue:current.stock
                },
              ]"
              placeholder="请输入库存数量"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="优惠券" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <pop-select-discount
              class="discount"
              :disabled="disabled"
              v-decorator="[
                `discount`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入优惠券!',
                    },
                    
                  ],
                  initialValue:initialDiscount
                },
              ]"
              placeholder="请输入优惠券"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="是否是特价产品" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-radio-group
              name="radioGroup"
              :disabled="disabled"
              v-decorator="[
                `tjgoods`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入是否是特价产品!',
                    },
                    
                  ],
                  initialValue:current.tjgoods||0
                },
              ]"
              placeholder="请输入是否是特价产品"
            >
              <a-radio :value="0">否</a-radio>
              <a-radio :value="1">是</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="是否是库存处理产品" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <a-radio-group
              name="radioGroup"
              :disabled="disabled"
              v-decorator="[
                `kcgoods`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入是否是库存处理产品!',
                    },
                    
                  ],
                  initialValue:current.kcgoods||0
                },
              ]"
              placeholder="请输入是否是库存处理产品"
            >
              <a-radio :value="0">否</a-radio>
              <a-radio :value="1">是</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="{md: 8, lg: 24, xl: 48}">
        <a-col :span="8">
          <a-form-item label="品牌" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <pop-select-brand
              class="brand"
              :disabled="disabled"
              v-on:change="handleChangeBrand"
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
        <a-col :span="8">
          <a-form-item label="分类" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
            <pop-select-model
              class="model"
              :disabled="disabled"
              :parameter="{brand_id:brand_id}"
              v-decorator="[
                `model`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入分类!',
                    },
                    
                  ],
                  initialValue:initialModel
                },
              ]"
              placeholder="请输入分类"
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
import PopSelectDiscount from "@/component/pop-select-discount";
import PopSelectModel from "@/component/pop-select-model";
 
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
      initialDiscount: this.current.brandid
        ? { id: this.current.couponid, name: this.current.couponname }
        : { id: "", name: "" },
      initialBrand: this.current.brandid?{id:this.current.brandid,name:this.current.brandname}:{id:"",name:""},
      initialModel:this.current.typeid?{id:this.current.typeid,name:this.current.typename}:{id:"",name:""},
      brand_id:""
    };
  },
  components: {
    FooterToolbar,
    FileUploader,
    PopSelectBrand,
    PopSelectDiscount,
    PopSelectModel
  },
  mounted() {},
  props: ["current", "type"],
  methods: {
    customRequest(params) {},
    handleSubmit() {
      this.form.validateFields((err, vals) => {
        if (!err) {
          const values = vals;

          const { uuid,goodsid } = this.current;

          const newFormData = new FormData();
          newFormData.append("name", values.name);
          newFormData.append("goodsnumber", values.goodsnumber);
          newFormData.append("imgurl", values.imgurl); 
          newFormData.append("price", values.price);
          newFormData.append("jfcount", values.jfcount);
          newFormData.append("stock", values.stock);
          newFormData.append("couponid", values.discount.id);
          newFormData.append("tjgoods", values.tjgoods);
          newFormData.append("kcgoods", values.kcgoods);
          newFormData.append("brandid", values.brand.id);
          newFormData.append("typeid", values.model.id);
          newFormData.append("descs",values.descs);


          if (this.type === "ADD") {
            this.$store.dispatch("trade/add", newFormData).then(res => {
              console.log(res);
              if (res) {
                this.$emit("onAddSuccess");
              }
            });
          } else if (this.type === "EDIT") {
            console.log("EDIT");
            newFormData.append("uuid", goodsid);
            this.$store.dispatch("trade/edit", newFormData).then(res => {
              if (res) {
                this.$emit("onEditSuccess");
              }
            });
          }
        }
      });
    },
    handleChangeBrand(current){
      this.brand_id=current.id;
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