<template>
  <div class="main">
    <div class="header">
      <van-icon name="newspaper-o" />
      <span> / 项目任务 / 批量新建订单</span>
    </div>
    <div class="content">
      <div class="steps-box">
        <!-- 第一个 -->
        <div class="steps-item">
          <h1>01</h1>
          <div class="steps-msg">
            <span>项目信息</span>
            <span>项目名称、类型、预算等</span>
          </div>
        </div>
        <div class="steps-circle">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <!-- 第二个 -->
        <div class="steps-item">
          <h1>02</h1>
          <div class="steps-msg">
            <span>人员导入</span>
            <span>批量导入人员数据</span>
          </div>
        </div>
        <div class="steps-circle">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <!-- 第三个 -->
        <div class="steps-item">
          <h1>03</h1>
          <div class="steps-msg">
            <span>数据效验</span>
            <span>检查数据是否有误</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newOrder',
  data () {}
}
</script>

<style lang="less" scoped>
  .main {
    box-sizing: border-box;
    padding: 0 14px;
    .header {
      text-align: left;
      height: 60px;
      line-height: 60px;
      .van-icon {
        font-size: 30px;
        color: #2c4198;
      }
    }
    .content {
      background: white;
      .steps-box {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .steps-item {
          display: flex;
          align-items: center;
          color: #999999;
          h1 {
            font-family: "方正汉真广标简体";
            font-size: 60px;
            margin-right: 6px;
          }
          .steps-msg {
            text-align: left;
            display: flex;
            flex-direction: column;
            span:nth-child(1) {
              font-weight: bold;
            }
            span:nth-child(2) {
              font-size: 14px;
              margin-top: 10px;
            }
          }
        }
        .steps-circle {
          display: flex;
          align-items: center;
          div:nth-child(2) {
            width: 14px;
            height: 14px;
          }
          div {
            width: 10px;
            height: 10px;
            margin: 0 4px;
            border-radius: 40px;
            background: #999999;
          }
        }
        .steps-item:nth-child(1) {
          color: #28c76f;
        }
      }
    }
  }
</style>
