<template>
  <div class="order">
    <head-guide :title="title"></head-guide>
    order
  </div>
</template>

<script>
import HeadGuide from '../../components/HeadGuide/HeadGuide'

export default {
  name: "Order",
  data () {
    return {
      title:"订单列表"
    }
  },
  components:{
    HeadGuide
  }
};
</script>
