<template>
  <div @click="handleClick">我是首页</div>
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
    return {};
  },
  created() { },
  mounted() {

  },
  methods: {
    handleClick() {
      this.$store.commit('home/setState', { c: 77 });
      this.$router.push('/');
    },
  },
};
</script>
