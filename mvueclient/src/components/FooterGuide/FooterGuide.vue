<template>
    <div class="footerguide">
        <router-link to="/msite">
            <i class="iconfont icon-waimai"></i>
            <span>首页</span>
        </router-link>
        
        
        <router-link to="/search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索</span>
        </router-link>
        <router-link to="/order">
            <i class="iconfont icon-dingdan"></i>
            <span>订单</span>
        </router-link>
        <router-link to="/profile">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "FooterGuide"
};
</script>

<style scoped>
.footerguide {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  border-top: 1px solid #777;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footerguide > a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #444;
}
.active span,
.active i {
  color: #02a774;
}
</style>
