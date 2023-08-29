<template>
  <div class="new">
    <div class="header">
      <van-icon name="newspaper-o" />
      <span> / 项目任务 / 批量新建订单</span>
    </div>
    <div class="content">
      <div class="steps-box">
        <!-- 第一个 -->
        <div class="steps-item green">
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
        <div class="steps-item" :class="pageIndex == 2 ? 'red' : ''">
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
        <div class="input-box" v-show="pageIndex == 1">
          <div>
            <label for=""><span>*</span>任务类型</label>
            <select name="" id="">
              <option value="item" v-for="(item, index) in taskList" :key="index">{{ item }}</option>
            </select>
          </div>
          <div>
            <label for=""><span>*</span>省份</label>
            <select name="" id=""></select>
            <span class="propSelect">(上一次选择的是北京市)</span>
          </div>
          <div>
            <label for="">城市</label>
            <select name="" id=""></select>
          </div>
          <div class="day">
            <label for="">项目时间</label>
            <!-- <div :value="date" @click="show = true">
          <span class="iconfont icon-rili"></span>
          <span class="statr">2023-08-29</span>
          <span>至</span>
          <span class="end">2023-08-29</span>
        </div> -->
            <div class="block">
              <!-- <span class="demonstration">默认</span> -->
              <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
          </div>
          <div>
            <label for="">项目名称</label>
            <select name="" id=""></select>
          </div>
          <div>
            <label for="">任务描述</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="button">
            <el-button type="primary" round @click="pageIndex = 2">下一步 人员导入</el-button>
          </div>
        </div>
        <div class="project-box" v-show="pageIndex == 2">
          <div class="">
            <label for="">项目名称：</label>
            <span>外卖骑手项目</span>
          </div>
          <div>
            <label for="">人员模板：</label>
            <div>
              <img src="../../assets/excel-01.png" alt="">
              <span>下载模板</span>
            </div>
          </div>
          <div>
            <label for="">上传数据：</label>
            <div class="file">
              <img src="../../assets/logo.png" alt="">
              <span><span>点击上传</span>，或将填好数据的Exce文件拖拽到虚线框内
                仅支持上传xls .xlsx扩展名的Excel文件
                文件中不可有外部引用的数据，不能含有公式
                上传数据前请再次核对是否存在人员信息重复，避免造成资金损失！</span>
            </div>
          </div>
         <div class="button">
          <el-button type="info" plain @click="pageIndex=1">项目信息</el-button>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newOrder',
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
      value2: '',
      pageIndex: 2
    }
  }
}
</script>

<style>
@import './new.css'
</style>
