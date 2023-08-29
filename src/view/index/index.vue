<template>
  <div class="index">
    <div class="main-head"><van-icon name="cashier-o" />/首页</div>
    <div class="content">
      <div class="rec_project">
        <div class="head">最近项目</div>
        <div class="rec_main">
          <div class="item" v-for="item in list" :key="item.id">
            <!-- 线 -->
            <div class="circleLine">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="message">
              <div class="time">{{ item.time }}</div>
              <div class="msg-card">
                <div>
                  项目：<span>{{ item.type }}</span>
                </div>
                <div>
                  进度：<span>{{ item.progress }}</span>
                </div>
                <div>
                  订单量：<span class="count">{{ item.num }}</span>
                </div>
                <div>
                  订单额：<span class="money">{{ item.price }}元</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="changeMoney">
        <div class="head">资金动态</div>
        <div class="money_main">
          <ul>
            <li>
              <van-icon name="arrow" />
              <span class="text">平台结算</span>
              <span class="price">-0.02</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="content_link">
        <div class="payment">
          <div class="img-div">
            <img src="../../assets/订单.png" alt="" />
          </div>
          <div class="msg">
            <span>批量打款</span>
            <span>批量订单快速到账</span>
          </div>
        </div>
        <div class="payment">
          <div class="img-div">
            <img src="../../assets/excel-01.png" alt="" />
          </div>
          <div class="msg">
            <span>模板下载</span>
            <span>批量订单快速到账</span>
          </div>
        </div>
        <div class="speed-link">
          <div class="head">快速链接</div>
          <div class="like_main">
            <div>项目列表</div>
            <div>项目列表</div>
            <div>项目列表</div>
            <div>项目列表</div>
            <div>项目列表</div>
            <div>项目列表</div>
            <div>项目列表</div>
            <div>项目列表</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [
        {id: 1, time: '2023-08-23 08:43:11', type: '外卖骑手项目', progress: '带报审', num: 2, price: '0.04'},
        {id: 2, time: '2023-08-23 08:43:11', type: '外卖骑手项目', progress: '带报审', num: 2, price: '0.04'},
        {id: 3, time: '2023-08-23 08:43:11', type: '外卖骑手项目', progress: '已结算', num: 2, price: '0.04'}
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
@import './index.css'
</style>
