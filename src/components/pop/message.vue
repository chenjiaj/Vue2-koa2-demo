<template>
    <div :class="{'pop-up':true,'show':show}">
        <div class="popup-mask" v-if="hasMark"></div>
        <transition name="bottom">
            <div class="popup-note bottom">
                <div class="pop-content">
                    <div class="pop-tit">
                        {{title}}
                    </div>
                    <p class="pop-note hasTitle">
                        <span class="message" v-html="message"></span>
                    </p>
                    <div class="btn-wrapper" v-if="type == 'alert'" @click.stop="alertClick">
                        <span class="btn btn-block yes-btn">{{alertBtnText}}</span>
                    </div>
                    <div class="btn-wrapper" v-if="type == 'confirm'">
                        <span @touchstart.prevent="noClick" class="btn">{{noBtnText}}</span>
                        <span @touchstart.prevent="yesClick" class="btn yes-btn">{{yesBtnText}}</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '提示'
      },
      message: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'alert'
      },
      alertBtnText: {
        type: String,
        default: '我知道了'
      },
      yesBtnText: {
        type: String,
        default: '确定'
      },
      noBtnText: {
        type: String,
        default: '取消'
      },
      hasMark: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        promiseStatus: null,
        show: false
      };
    },
    methods: {
      confirm() {
        this.show = true;
        return new Promise((resolve, reject) => {
          this.promiseStatus = {
            resolve,
            reject
          };
        });
      },
      noClick() {
        this.show = false;
        if (this.promiseStatus) {
          this.promiseStatus.reject();
        }
      },
      yesClick() {
        this.show = false;
        if (this.promiseStatus) {
          this.promiseStatus.resolve();
        }
      },
      alertClick() {
        this.show = false;
        if (this.promiseStatus) {
          this.promiseStatus.resolve();
        }
      }
    }
  };
</script>


<style lang='less'>
    @zIndex3: 3003;

    @fontSize: 30px;
    @leftRight: 128px;
    @iconsWidth: 82px;
    .pop-up {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
        z-index: @zIndex3;
        transition: all .5s;
        &.show {
            visibility: visible;
            display: block;

            opacity: 1;
            transition: all .5s;
        }
        .popup-mask {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .2);
        }

        .popup-note {
            position: fixed;
            left: 40px;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #fff;
            border-radius: 10px;

            .pop-tit {
                text-align: center;
                font-size: 36px;
                padding: 45px 0 0 0;
                color: #000;
            }

            .pop-note {
                padding: 40px;
                text-align: center;
                font-size: 0;

                &.hasTitle {
                    color: #333;
                }
            }

            .btn-wrapper {
                font-size: 0;
                border-top: 1px solid #eaeaea;
                .btn {
                    display: inline-block;
                    width: 50%;
                    font-size: 34px;
                    text-align: center;
                    padding: 30px 0;
                    color: #666;
                }
                .yes-btn {
                    color: #ffa432;
                    border-left: 1px solid #eaeaea;
                }
                .btn-block {
                    width: 100%;
                }
            }

            .icons {
                display: inline-block;
                vertical-align: middle;
                width: @iconsWidth;
                height: @iconsWidth;
                margin-right: 20px;
                /*background: url("../../../images/icons-com.png") no-repeat;*/
                background-size: 200px 200px;
            }

            .icons-error {
                background-position: -71px -7px;
            }

            .icons-success {
                background-position: -7px -110px;
            }

            .message {
                vertical-align: middle;
                font-size: @fontSize;
                line-height: 1.5em;
                display: inline-block;
                text-align: left;
                word-break: break-all;
                color: #000;
                .resultNote {
                    font-size: 36px;
                    color: #000;
                }
            }
            .message2 {
                font-size: 30px;
                text-align: center;
                p {
                    line-height: 3
                }
                .addNumNote {
                    color: #333;
                    font-size: 30px;
                }
                .greenTxt {
                    color: #22d41e;
                }
            ;
                .orangeTxt {
                    color: #ffa00b;
                }
            }
        }

        &.tip {
            .popup-note {
                left: @leftRight;
                right: @leftRight;

                .img-wrapper {
                    margin-bottom: 20px;
                }
            }

            .pop-note {
                padding: 43px 30px;
            }
        }
    }

    .top-enter-active,
    .top-leave-active,
    .bottom-enter-active,
    .bottom-leave-active {
        transition: all .5s;
    }

    .top-enter,
    .top-leave-active {
        transform: translateY(-100%);
    }

    .bottom-enter,
    .bottom-leave-active {
        transform: translateY(100%);
    }

    @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
        .border-1px {
            &::after, &::before {
                -webkit-transform: scaleY(.7);
                -webkit-transform-origin: 0 0;
                transform: scaleY(.7);
            }
            &::after {
                -webkit-transform-origin: left bottom;
            }
        }
    }

    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
        .border-1px {
            &::after, &::before {
                -webkit-transform: scaleY(.5);
                transform: scaleY(.5);
            }
        }
    }

</style>
