<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import flowChild1 from '../components/flowChild1.vue'
import flowChild2 from '../components/flowChild2.vue'
export default{
    data(){
        return{
            objInfo:{},
            chanage:false,
            text:""
        }
    },
    methods:{
        ...mapActions(counter, ["setLocation"]),
        getInfo(x){
            console.log(x)
            this.objInfo = x
            console.log(this.objInfo)
            this.chanage = !this.chanage
        },
        chanPage(){
            this.chanage = !this.chanage
        }
    },
    mounted(){
        this.setLocation(10)
    },
    components:{
        flowChild1,
        flowChild2
    }
    
}
</script>

<template>
<h1>DataFlow</h1>
<h3>資料需求:姓名、手機、性別(radio)、地址、年齡</h3>
<h3>{{ this.objInfo }}</h3>
<h3>change:{{ this.chanage }}</h3>
<h3>text:{{ this.text }}</h3>
<div class="showArea">
    <flowChild1  @get="getInfo" v-show="this.chanage == false" v-model:text="this.text"/>
    <!-- <flowChild2 
    :name="this.objInfo.name" 
    :phone="this.objInfo.phone"
    :sex="this.objInfo.sex"
    :address="this.objInfo.address"
    :age="this.objInfo.age"/> -->
    <flowChild2 v-bind="this.objInfo" v-show="this.chanage == true" @back="chanPage()"/>
</div>
</template>


<style lang="scss" scoped>
.showArea{
    width:100vw ;
    height: 100%;
    display: flex;
    justify-content: center;
}
</style>