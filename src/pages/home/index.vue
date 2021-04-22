<template>
  <div>我是首页{{ text }}</div>
</template>

<style lang="less">
@import url("./style.less");
</style>
<script>
export default {
  props: [],
  name: '',
  components: {},
  data() {
    return {
      text: '',
    };
  },
  created() { },
  mounted() {
  },
  methods: {
  },
};
</script>
