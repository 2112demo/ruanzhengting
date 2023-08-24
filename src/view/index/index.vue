<template>
  <div class="main">
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

<style lang="less" scoped>
.main {
  .main-head {
    text-align: left;
    padding: 0 15px;
    box-sizing: border-box;

    .van-icon {
      font-size: 26px;
      color: #2c4198;
      margin-right: 10px;
    }
  }

  .content {
    display: flex;
    margin-top: 30px;

    >div {
      flex: 1;
      margin-left: 15px;
    }

    .rec_project {
      background: white;
      box-shadow: 0px 0px 14px #989898;

      .head {
        font-size: 16px;
        height: 60px;
        border-bottom: 1px solid #e8e8e8;
        line-height: 60px;
        text-align: left;
        box-sizing: border-box;
        padding: 0 30px;
        font-weight: bold;
      }

      .rec_main {
        box-sizing: border-box;
        padding: 0 22px;
        margin-top: 10px;

        .item {
          display: flex;

          .circleLine {
            display: flex;
            flex-direction: column;
            align-items: center;

            .circle {
              width: 12px;
              height: 12px;
              background: #6777ef;
              border-radius: 50%;
            }

            .line {
              height: 166px;
              width: 1px;
              background: #e0e4eb;
            }
          }

          .message {
            margin-left: 10px;
            width: 100%;

            .time {
              text-align: left;
              font-size: 14px;
              color: #aeb0b3;
              margin-bottom: 6px;
            }

            .msg-card {
              width: 100%;
              background: white;
              box-shadow: 0px 0px 10px #ddd;
              padding: 24px 20px 10px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              text-align: left;

              div {
                margin-bottom: 10px;
                font-size: 14px;
              }

              div:nth-child(1) span {
                color: #8b79e2;
              }

              div:nth-child(2) span {
                color: #9f52ff;
              }

              div:nth-child(3) span {
                color: blue;
              }
            }
          }
        }
      }
    }

    .changeMoney {
      background: white;
      box-shadow: 0px 0px 14px #989898;

      .head {
        font-size: 16px;
        height: 60px;
        border-bottom: 1px solid #e8e8e8;
        line-height: 60px;
        text-align: left;
        box-sizing: border-box;
        padding: 0 30px;
        font-weight: bold;
      }

      .money_main {
        padding: 0 22px;
        box-sizing: border-box;

        ul {
          li {
            text-align: left;
            height: 29px;
            border-bottom: 1px solid #f1f3f8;
            font-size: 14px;
            color: #7b7b7b;
            line-height: 30px;
            display: flex;
            align-items: center;

            .van-icon {
              margin-right: 30px;
            }

            .text {
              flex: 1;
            }

            .price {
              color: #6bfb70;
            }
          }
        }
      }
    }

    .content_link {
      .payment {
        height: 130px;
        background: white;
        box-shadow: 0px 0px 15px #9f9f9f;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 28px;
        justify-content: space-between;
        margin-bottom: 16px;

        .img-div {
          img {
            width: 56px;
            height: 56px;
          }
        }

        .msg {
          display: flex;
          flex-direction: column;

          :nth-child(1) {
            font-size: 18px;
            font-weight: bold;
          }

          :nth-child(2) {
            font-size: 12px;
            font-weight: bold;
            color: #6777ef;
            margin-top: 10px;
          }
        }
      }

      .speed-link {
        background: white;
        box-shadow: 0px 0px 15px #9f9f9f;
        height: 314px;
        .head {
          font-size: 16px;
          height: 60px;
          border-bottom: 1px solid #e8e8e8;
          line-height: 60px;
          text-align: left;
          box-sizing: border-box;
          padding: 0 30px;
          font-weight: bold;
        }
        .like_main{
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          padding: 0 16px;
          div{
            width: 30%;
            margin: 0 1%;
            height: 36px;
            border: 1px solid #e6e8ec;
            line-height: 36px;
            background: #f7f8fb;
            font-size: 14px;
            border-radius: 4px;
            margin-top: 16px;
          }
        }

      }
    }
  }
}
</style>
