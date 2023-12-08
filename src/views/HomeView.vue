<script >
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import bootstrapNote from "../components/BootstrapNote.vue"
export default {
  data(){
    return{
      test:""
    }
  },
  methods: {
    ...mapActions(counter, ["setLocation" ,"testPra","getWeather"]),
    cool(){
      const btnV = document.getElementById("Btn")
      this.testPra(btnV.value)
    }
  },
  mounted(){
    this.setLocation(1)
  },
  components:{
    bootstrapNote
  }
}
</script>

<template>
  <!-- <h1>HomeView</h1>
  <h2>我是董人豪</h2>
  <h2>畢業於XX大學</h2> -->
  <hr>

  <h2> 同學到了就趕快檢查自己的code</h2>
  <h2> git 該弄該合併得趕快弄</h2>
  <h2> 簡報該修的記得修</h2>
  <h2> 09:20 開始報告</h2>
  <h3> 第一位:李紹人, 第二位:吳梓宏, 第三位:陳冠佑</h3>
  
  <input type="text" v-model="test">
  <button type="button" @click="this.cool()" id="Btn" value="prd">Btn</button>
  
<!-- <bootstrapNote /> -->
  <!-- <h2>面試技術問題</h2>
    <h2>1. 如果有一個區塊不希望顯示出來，你會怎麼做(使用CSS)</h2>
    <h2>2. 你會如何拉寬空間呢?</h2>
    <h2>3. 要怎麼對畫面背景做設定呢?</h2>
    <h2>4. 要怎麼做才能終止循環(Loop)</h2>
    <h2>5. 如何創建 java 專案的環境，是老師幫忙搭載呢?還是由自己操作呢?</h2>
    <h2>6. js 中，陣列列表如何做出來呢?</h2>
    <hr>
  <h2>如果會英文，也要把英文版的自介準備好，至少要可以說明我是誰幾歲哪裡畢業正在幹嘛之類的</h2>-->
</template>

<style scoped lang="scss"></style>
