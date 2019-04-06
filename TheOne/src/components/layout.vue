<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path:'/'}">
          <img src="../assets/NASA.jpg">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li> {{ username }}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
            <li v-if="username=== ''" @click="logClick">登录</li>
            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li @click="regClick">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>© 2019 🌲🌲硬核菊哥🌲🌲</p>
    </div>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog :is-show="isShowDialog" @on-close="closeDialog('isShowDialog')">
      <p><span style="font-size: 23px;color: #af0008">Web前端</span><br>
        兢兢业业<br>
        勤勤恳恳<br>
        朝九晚五<br>
        任劳任怨<br>
        呕心沥血<br>
        筋疲力尽<br>
        竭尽脑汁<br>
      </p>
    </my-dialog>
  </div>
</template>
<script>
  import Dialog from './dialog'
  import LogForm from './logForm'
  import RegForm from './regForm'

  export default {
    components: {
      myDialog: Dialog,
      LogForm,
      RegForm,
    },
    data() {
      return {
        isShowDialog: false,
        isShowLogDialog: false,
        isShowRegDialog: false,
        username: '',
      }
    },
    methods: {
      aboutClick() {
        this.isShowDialog = true;
      },
      logClick() {
        this.isShowLogDialog = true;
      },
      regClick() {
        this.isShowRegDialog = true;
      },
      closeDialog(attr) {
        this[attr] = false;
      },
      onSuccessLog(data) {
        console.log(data)
        this.closeDialog('isShowLogDialog')
        this.username = data.username
      }
    }
  }
</script>

<style>
  body {
    height: 90vh;
    color: #fff;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    -webkit-animation: Gradient 13s ease infinite;
    -moz-animation: Gradient 13s ease infinite;
    animation: Gradient 13s ease infinite;
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    color: #444;
  }

  .app-head {
    background: #242121;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }

  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }

  .app-head-inner img {
    width: 185px;
    height: 90px;
  }

  .head-logo {
    float: left;
    margin-top: 20px;
  }

  .head-logo img {
    width: 50px;
  }

  .head-nav {
    float: right;
  }

  .head-nav ul {
    overflow: hidden;
  }

  .head-nav li {
    cursor: pointer;
    float: left;
  }

  .nav-pile {
    padding: 0 10px;
  }

  .app-foot {
    text-align: center;
    height: 60px;
    width: 100%;
    line-height: 60px;
    background: #f8f8f8;
    clear: both;
    margin-top: 30px;
    color: #000000;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }

  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background: #4fc08d;
  }

  .g-form {

  }

  .g-form-line {
    padding: 15px 0;
  }

  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }

  .g-form-input {
    display: inline-block;
  }

  .g-form-error {
    color: red;
    padding-left: 15px;
  }

  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  .g-form-btn {
    padding-left: 100px;
  }
</style>

