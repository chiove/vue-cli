<template>
  <div class="contaier" @click="handleChange">
    我是登录页2{{ $store.state.login.b }}咯啊啊
    {{ $store.state.home.c }}
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import axios from 'src/utils/request';

export default {
  props: [],
  name: '',
  components: {},
  data() {
    return {};
  },
  created() {
    axios.get('/vue-test', {
      name: 'chaowei.lu',
      password: '666666',
    });
    axios.post('/post-test', {
      name: 'chaowei.lu-post',
      password: '666666-post',
    });
    // console.log(this.$store.state.login.b, this.$store.state.home.c);
  },
  mounted() {
    // console.log(this.$store.state, this.$store.state);
  },
  methods: {
    ...mapActions({
      change: 'global/change',
    }),
    handleChange() {
      this.$router.push('/home');
    },
  },
};
</script>
<style lang="less" scope>
@import "./style.less";
</style>
