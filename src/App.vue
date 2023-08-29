<template>
  <div id="app">
    <div class="boxApp">
    <div class="left" :class=" isMove === 1 ? 'size' : '' ">
      <div class="head">
        <span>灵活用工服务平台</span>
      </div>
      <div class="left_main" v-show="isMove === 0">
        <div class="item">
          <span>常用操作</span>
          <van-collapse v-model="activeNames">
            <van-collapse-item name="5" class="active">
              <template #title>
                <div><van-icon name="cashier-o" /><span>首页</span></div>
              </template>
            </van-collapse-item>
          </van-collapse>
        </div>
        <div class="item">
          <span>业务管理</span>
          <van-collapse v-model="activeNames">
            <van-collapse-item name="1">
              <template #title>
                <div><van-icon name="newspaper-o" /><span>项目任务</span></div>
              </template>
              <div class="son-list">
                <div class="son-list-item" @click="listNum=1" :class="listNum==1?'rou':''">
                  <van-icon name="arrow"/>
                 <a href="#/new"><span>批量新建订单</span></a>
                </div>
                <div class="son-list-item" @click="listNum=2" :class="listNum==2?'rou':''">
                  <van-icon name="arrow"/>
                  <span>项目列表</span>
                </div>
                <div class="son-list-item" @click="listNum=3" :class="listNum==3?'rou':''">
                  <van-icon name="arrow"/>
                  <span>任务派单</span>
                </div>
                <div class="son-list-item" @click="listNum=4" :class="listNum==4?'rou':''">
                  <van-icon name="arrow"/>
                  <span>订单列表</span>
                </div>
              </div>
            </van-collapse-item>
            <van-collapse-item name="2">
              <template #title>
                <div><van-icon name="balance-pay" /><span>资金发票</span></div>
              </template>
              内容
            </van-collapse-item>
            <van-collapse-item name="3">
              <template #title>
                <div><van-icon name="friends-o" /><span>资金发票</span></div>
              </template>
              内容
            </van-collapse-item>
          </van-collapse>
        </div>
        <div class="item">
          <span>服务中心</span>
          <van-collapse v-model="activeNames">
            <van-collapse-item name="4">
              <template #title>
                <div><van-icon name="newspaper-o" /><span>身份&安全</span></div>
              </template>
              内容
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
      <div class="left_icon" v-show="isMove === 1">
        <div @click="num=1" :class="num===1?'active':''"><van-icon name="cashier-o" /></div>
        <div @click="num=2" :class="num===2?'active':''"><van-icon name="newspaper-o" /></div>
        <div @click="num=3" :class="num===3?'active':''"><van-icon name="balance-pay" /></div>
        <div @click="num=4" :class="num===4?'active':''"><van-icon name="friends-o" /></div>
        <div @click="num=5" :class="num===5?'active':''"><van-icon name="newspaper-o" /></div>
      </div>
    </div>
    <div class="right" :class=" isMove === 1 ? 'rSize' : '' ">
      <div class="right-head">
       <div class="head-icon" >
        <van-icon name="wap-nav" v-bind:state="isMove" @click="changeStat" :class="cla" @mousedown="cla='blue'" @mouseup="cla=''" />
        <van-icon name="enlarge" @click="enterFullscreen" />
       </div>
       <div class="head-text"></div>
      </div>
      <router-view/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeNames: ['1'],
      isMove: 0,
      cla: '',
      size: '10%',
      num: 1,
      listNum: 1
    }
  },
  methods: {
    changeStat () {
      if (this.isMove) {
        this.isMove = 0
      } else {
        this.isMove = 1
      }
    },
    enterFullscreen () {
      var element = document.documentElement // 获取HTML元素

      if (element.requestFullscreen) {
        element.requestFullscreen() // 全屏显示
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen() // Firefox
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen() // Chrome, Safari and Opera
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen() // Internet Explorer
      }
    }
  }
}
</script>

<style>
@import './App.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background: #ddd;
}

</style>
