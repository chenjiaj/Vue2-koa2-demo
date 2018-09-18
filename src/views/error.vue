<template>
    <div class="error">
        <h1>{{ status }}</h1>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        status: '你查看的页面不存在...'
      };
    }
  };
</script>

<style lang="less" type="text/less">
    @import "../static/less/base";

    body {
        .error {
            color: blue;
            display: flex;
        }
    }
</style>
