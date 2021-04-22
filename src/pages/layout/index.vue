<template>
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
      <div class="layout-menu-item" @click="handleReload">刷新</div>
    </div>
    <div class="layout-title"></div>
    <div class="layout-tool">
      <div>-</div>
      <div>[]</div>
      <div @click="handleClose">+</div>
    </div>
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
