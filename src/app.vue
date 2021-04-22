<template>
  <div>
    <layout />
    <router-view />
  </div>
</template>

<script>
import layout from './pages/layout';

export default {
  name: 'App',
  components: { layout },
};
</script>
