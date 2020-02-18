<template>
  <div class="msite">
    <head-guide :title="title">
      <i slot="left" class="iconfont icon-sousuo"></i>
      <button slot="right" class="btn">登录/注册</button>
    </head-guide>


    <div class="msite_nav">
      <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>

            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/2.jpg" alt="">
              </div>
              <span>蛋糕</span>
            </a>

            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>

            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>

            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>

            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>

            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>

            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>

            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
          <div class="swiper-slide">Slide 2</div>
          
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    </div>
    msite
  </div>
</template>

<script>
import HeadGuide from '../../components/HeadGuide/HeadGuide'
// swiper 插件引入
import Swiper from 'swiper'
import "../../../node_modules/swiper/css/swiper.css"

export default {
  name: "MSite",
  data() {
    return {
      title:"江苏省镇江市丹阳市河阳镇"
    }
  },
  components:{
    HeadGuide
  },
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })        
  },
  methods: {
    HandleClick(){
      this.$router.push("/profile")
    }
  },
};
</script>
<style scoped>
    .msite{
      width: 100%;
    }
    .msite_nav{
      height: 200px;
      background: #fff;
    }

    .swiper-container,
    .swiper-wrapper {
      width:100%;
      height:100%;
    } 
  .swiper-slide{
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;  
  }
  .link_to_food{
    width: 25%;
  }
  .food_container{
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    font-size: 0; 
  }
  .food_container img{
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .food_container span{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #666;
  }
</style>
