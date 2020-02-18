<template>
  <div class="profile">
    <head-guide :title="title"></head-guide>
    profile
  </div>
</template>

<script>
import HeadGuide from '../../components/HeadGuide/HeadGuide'

export default {
  name: "Profile",
  data () {
    return {
      title:"我的"
    }
  },
  components:{
      HeadGuide
    }
};
</script>
