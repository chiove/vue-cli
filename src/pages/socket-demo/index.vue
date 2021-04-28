<template>
  <div class="socket-test">
    <Input v-model="text" />
    <Button type="primary" @click="getValue">发送</Button>
  </div>
</template>

<style lang="less">
@import url("./style.less");
</style>
<script>
import { mapActions, mapState } from 'vuex';
import { Input, Button } from 'ant-design-vue';


export default {
  props: [],
  name: '',
  components: { Input, Button },
  data() {
    return {
      text: '',
      ws: {},
      send: () => { },
    };
  },
  created() {
  },
  mounted() {
    const ws = new WebSocket('ws://127.0.0.1:3001/');
    this.ws = ws;
    // ws.onopen = function () {
    //   ws.send('222');
    //   this.send = ws.send;
    // };
    // ws.onmessage = function (evt) {
    //   const received_msg = evt.data;
    //   console.log(`数据已接收...${evt.data}`);
    // };

    // ws.onclose = function () {
    //   // 关闭 websocket
    //   console.log('连接已关闭...');
    // };
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
    getValue() {
      this.ws.send(this.text);
    },
  },
};
</script>
