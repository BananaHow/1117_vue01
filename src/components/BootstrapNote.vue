<script>

</script>

<template>
    <div class="cool">
        <h1>Vue.js 安裝 Bootstrap </h1>
        <h3>1. 終端機輸入 npm install bootstrap @popperjs/core</h3>
        <h3>2. 在 src/assets 資料夾中建立 stylesheet 資料夾</h3>
        <h3>3. 從 node_module/bootstrap/scss 中找到 _variables並放進第二步驟的資料夾中</h3>
        <h3>4. 在assets/main.scss 中分別匯入function, _variables, bootstrap
            (function, bootstrap 在 node_module/bootstrap/scss/ )
            (_variables 則是匯入第二步驟資料夾中的檔案)
        </h3>
        <h3>5. 在 main.js 輸入 import 'bootstrap'</h3>


    </div>
</template>

<style scoped lang="scss"></style>