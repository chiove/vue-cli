<template>
  <div>1</div>
</template>

<style lang="less">
@import url("./style.less");
</style>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: [],
  name: 'demo',
  components: {},
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
  },
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
