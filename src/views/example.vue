/**
* Created by chenjiajun on 2018/9/14.
*/
<template>
    <div class="test">
        <div>
            <h1 @click="showConfrim">confirm</h1>

            <pre>
                this.$confirm({
                  title: '123',
                  message: '是否确认该信息？'，
                  yesBtnText：'确定按钮显示的文字'，
                  noBtnText：'取消按钮显示的文字'
                })
                  .then(() => {//点击确定回调
                    console.log('yes');
                  })
                  .catch(() => {//点击取消回调
                    console.log('no');
                  });
            </pre>
        </div>

        <div>
            <h1 @click="showAlert">alert</h1>

            <pre>
            this.$alert({
              title: '123',
              message: '这是一个警告框',
              alertBtnText: '我知道了'
            });
            </pre>
        </div>

        <div>
            <h1 @click="showTip">tip</h1>
            <pre>
                this.$tip({
                  message: 'this is tip',
                  duration: 3000,
                  type: 'success' // success 、error
                });
            </pre>
        </div>

        <div>
            <h1 @click="showLoading">show loading</h1>
            <pre>
                this.$loading.show();
            </pre>
            <h1 @click="hideLoading">hide loading</h1>
            <pre>
                this.$loading.hide();
            </pre>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      showConfrim() {
        this.$confirm({
          title: '123',
          message: '是否确认该信息？'
        })
          .then(() => {
            console.log('yes');
          })
          .catch(() => {
            console.log('no');
          });
      },
      showAlert() {
        this.$alert({
          title: '123',
          message: '这是一个警告框',
          alertBtnText: '我知道了'
        });
      },
      showTip() {
        this.$tip({
          message: 'this is tip',
          duration: 3000,
          type: 'success'
        });
      },
      showLoading() {
        this.$loading.show();
      },
      hideLoading() {
        this.$loading.hide();
      }
    }
  };
</script>

<style>
    .test {
        width: 600px;
    }
</style>
