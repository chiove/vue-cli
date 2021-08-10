<template>
  <div class="container" @click="handleClick"><Button type="info">提交{{text}}</Button></div>
</template>

<style lang="less" scoped>
 @import url("./style.less");
</style>
<script>
import { Button } from 'vant';
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  props: [],
  name: '',
  components: { Button },
  data() {
    return {
      text1: '',
    };
  },
  created() { },
  mounted() {

  },
  computed: {
    ...mapState('home', ['text']),
  },
  methods: {
    ...mapActions('home', ['login']),
    ...mapMutations('home', ['setState']),
    handleClick() {
      this.login({ text: '222' });
      setTimeout(() => {
        this.$router.history.push('./demo');
      }, 2000);
    },
  },
};
</script>
