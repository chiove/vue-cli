<template>
  <div class="layout-contaienr">
    <div class="layout-header">
      <div class="layout-logo"></div>
      <div class="layout-menu">
        <div class="layout-menu-item">文件(F)</div>
        <div class="layout-menu-item">选择(S)</div>
        <div class="layout-menu-item">编辑(E)</div>
        <div class="layout-menu-item">查看(V)</div>
        <div class="layout-menu-item">转到(G)</div>
        <div class="layout-menu-item">运行(R)</div>
        <div class="layout-menu-item">终端(T)</div>
      </div>
      <div class="layout-title"></div>
      <div class="layout-tool">
        <div><Icon type="minus" /></div>
        <div><Icon type="fullscreen" /></div>
        <div @click="handleClose"><Icon type="close" /></div>
      </div>
    </div>
    <div class="layout-location">
      <Input class="location-href" v-model="location" />
      <Icon class="layout-refresh" type="retweet" @click="handleReload" />
    </div>
  </div>
</template>
<style lang="less" scope>
@import url("./style.less");
</style>
<script>
import { mapActions, mapState } from 'vuex';
import { Button, Input, Icon } from 'ant-design-vue';

export default {
  props: [],
  name: '',
  components: { Button, Input, Icon },
  data() {
    return {
      location: location.href,
    };
  },
  created() {
  },
  mounted() {
  },
  computed: {
    ...mapState({
    }),
  },
  methods: {
    ...mapActions({
    }),
    handleClose() {
      window.electron.close();
    },
    handleReload() {
      location.reload();
    },
  },
};
</script>
