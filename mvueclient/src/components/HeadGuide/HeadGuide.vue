<template>
    <div class="headguide">
        <slot name="left"></slot>
        <span >{{title}}</span>
        <slot name="right"></slot>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style scoped>
    .headguide{
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;
        background-color: #02a774;
        color: #e4e4e4;
        height: 50px;
        line-height: 50px;
        text-align: center;
        display: flex;
        justify-content:space-around;
        align-items:center;
        z-index: 100;
    }
</style>

