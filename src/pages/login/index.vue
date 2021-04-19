<template>
  <div class="contaier" @click="handleChange">
    我是登录页2{{ name }}咯啊啊
    {{ password }}
  </div>
</template>


<script>


export default {
  props: [],
  name: '',
  components: {},
  data() {
    return {};
  },
  created() {
  },
  computed: {
  },
  methods: {
    handleChange() {
      this.$router.push('/home');
    },
  },
};
</script>
<style lang="less" scope>
@import "./style.less";
</style>
