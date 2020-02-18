<template>
  <div class="search">
    <head-guide :title="title"></head-guide>
  </div>
</template>
<script>
import HeadGuide from '../../components/HeadGuide/HeadGuide'

export default {
    name:"Search",
    data () {
      return {
        title:"搜索框"
      }
    },
    components:{
      HeadGuide
    }
}
</script>