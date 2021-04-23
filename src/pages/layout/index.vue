<template>
  <div class="layout-contaienr">
    <div class="layout-header">
      <div class="layout-logo"><Icon type="chrome" /></div>
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
        <div @click="handleMinimize">
          <Icon type="minus" />
        </div>
        <div @click="handleMaximize" v-show="!fullScreen">
          <Icon type="plus-square" />
        </div>
        <div @click="handleUnmaximize" v-show="fullScreen">
          <Icon type="minus-square" />
        </div>
        <div @click="handleClose">
          <Icon type="close" />
        </div>
      </div>
    </div>
    <div class="layout-location">
      <Input class="location-href" v-model="location" />
      <Icon class="layout-refresh" type="reload" @click="handleReload" />
    </div>
  </div>
</template>
<style lang="less" scope>
@import url("./style.less");
</style>
<script>
import { mapActions, mapState } from 'vuex';
import { Input, Icon } from 'ant-design-vue';

export default {
  props: [],
  name: '',
  components: { Input, Icon },
  data() {
    return {
      location: location.href,
      fullScreen: false,
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
    // 最小化窗口
    handleMinimize() {
      window.electron.minimize();
    },
    // 最大化窗口
    handleMaximize() {
      window.electron.maximize().then(() => {
        this.fullScreen = true;
      });
    },
    // 取消最大化窗口
    handleUnmaximize() {
      window.electron.unmaximize().then(() => {
        this.fullScreen = false;
      });
    },
    // 关闭窗口
    handleClose() {
      window.electron.close();
    },
    // 刷新
    handleReload() {
      location.reload();
    },
  },
};
</script>
