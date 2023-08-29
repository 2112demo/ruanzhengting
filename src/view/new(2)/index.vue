<template>
  <div class="new">
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
      <div class="box">
        <div>
          <label for="">项目名称：</label>
          <span>外卖骑手项目</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newtwo',
  data () {
    return {
      taskList: ['快递服务', '餐饮服务', '物流服务', '互联网服务', '管理咨询', '贸易服务', '生产制造', '共享经济', '商业服务', '工程咨询', '电子商务', '教育培训', '影视文化', '研发技术', '信息技术', '文化创意'],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '',
      value2: ''
    }
  }
}
</script>

<style>
@import './index.css'
</style>
