<template>
    <div :class="{'show':isShow,'loading-wrapper':true}">
        <div>{{message}}</div>
    </div>
</template>

<script>
  export default {
    props: {
      message: {// 显示的信息
        type: String,
        default: 'loading'
      },
      duration: {// 多少时间后关闭提示信息，单位 秒
        type: Number,
        default: 2500
      },
      type: {
        type: String,
        default: 'success'
      }
    },
    data() {
      return {
        isShow: false,
        timer: null
      };
    },
    methods: {
      show() {
        this.isShow = true;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          this.hide();
        }, this.duration);
      },
      hide() {
        this.isShow = false;
      }
    }
  };
</script>


<style lang='less' type="text/less">
    .loading-wrapper {
        display: none;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 100px;

        &.show{
            display: block;
        }
    }
</style>
