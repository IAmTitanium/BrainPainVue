<template>
    <div>
      <div>
        <div class="dialog-wrap">
          <div class="dialog-cover" @click="closeMyself" v-show="isShow">
          </div>
            <transition name="bounce">
            <div class="dialog-content" v-show="isShow">
              <p class="dialog-close" @click="closeMyself" >x</p>
               <slot>无内鬼</slot>
            </div>
            </transition>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props:{
          isShow:{
             type:Boolean,
             default:false,
          }
        },
        data(){
           return{}
        },
        methods:{
           closeMyself(){
               this.$emit('on-close')
           }
        }
    }
</script>

<style scoped>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
