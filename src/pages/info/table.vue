<template>
  <a-table bordered :dataSource="dataSource" :columns="columns">

  </a-table>
</template>

<script>
export default {
    data(){
        return {
            dataSource:[
                {
                    key:'0',
                    name:"上海畅为有限公司",
                    desc:"打造中国PPE外包服务第一品牌",
                    imgurl:"http://www.baidu.com"
                }
            ],
            columns:[
                {
                    title:"公司名",
                    dataIndex:"name"
                },
                {
                    title:"描述",
                    dataIndex:"desc"
                },
                {
                    title:"图片地址",
                    dataIndex:"imgurl"
                }
            ]
        }
    }
}
</script>

<style>

</style>