<template>
    <a-tabs v-model="activeKey" type="editable-card"  @edit="onEdit" >
        <a-tab-pane tab="列表" key="list">
             
        </a-tab-pane>
        
    </a-tabs>
</template>

<script>
export default {
    data(){
        const panes=[
            //{ title: '列表', content: <div></div>, key: '1' },
        ]
        return {
            // activeKey:panes[0].key,
            // panes,
            // newTabIndex:0
        }
    },
    methods:{
        onEdit(targetKey,action){
            this[`${action}Tab`](targetKey);
        },
        addTab(){
            const panes=this.panes;
            const activeKey=`newTab${this.newTabIndex++}`;
            panes.push({title:"NEW Tab", content: 'Content of new Tab', key: activeKey})
            this.panes=panes;
            this.activeKey=activeKey;
        },
        removeTab(targetKey){
            let activeKey=this.activeKey;
            let lastIndex;
            this.panes.forEach((pane,i)=>{
                if(pane.key===targetKey){
                    lastIndex=i-1;
                }
            });
            const panes=this.panes.filter(pane=>pane.key!==targetKey);
            if(panes.length && activeKey===targetKey){
                if(lastIndex>=0){
                    activekey=panes[lastIndex].key;
                }else{
                    activeKey=panes[0].key;
                }
            }
            this.panes=panes;
            this.activeKey=activeKey;

        }
    }
}
</script>

<style>

</style>