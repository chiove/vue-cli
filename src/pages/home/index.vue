<template>
  <div class="container" @click="handleClick">我是首页<Button type="info">提交</Button></div>
</template>

<style lang="less" scoped>
 @import url("./style.less");
</style>
<script>
import { Button } from 'vant';

export default {
  props: [],
  name: '',
  components: { Button },
  data() {
    return {
      text: '',
    };
  },
  created() { },
  mounted() {
  },
  methods: {
    handleClick() {
      this.$router.history.push('demo');
    },
  },
};
</script>
