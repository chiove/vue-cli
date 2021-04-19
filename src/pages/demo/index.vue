<template>
  <div>
    <div>用户名：{{ name }}</div>
    <div>密码：{{ password }}</div>
  </div>
</template>

<style lang="less">
@import url("./style.less");
</style>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: [],
  name: '',
  components: {},
  data() {
    return {};
  },
  created() {
    this.demoGet({
      name: 'demo1',
      password: 'demo',
    });
  },
  mounted() { },
  computed: {
    ...mapState({
      name: (state) => state.demo.name,
      password: (state) => state.demo.password,
    }),
  },
  methods: {
    ...mapActions({
      demoGet: 'demo/get',
      demoPost: 'demo/post',
    }),
  },
};
</script>
