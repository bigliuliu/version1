// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
      img: "../../images/main/EmptyBanner.jpg",
      openpath: "../../pages/figure/figure"
    }, {
        img: "../../images/main/EmptyBanner1.jpg",
      openpath: "../../pages/bankQuery/bankQuery"
    }, {
        img: "../../images/main/EmptyBanner2.jpg",
      openpath: "../../pages/IDCard/IDCard"
    }, {
        img: "../../images/main/EmptyBanner3.jpg",
      openpath: "../../pages/MobileHome/MobileHome"
    }],
    server: [
      {
        img: "../../images/main/kfz.png",
        openpath: "../../pages/IDCard/IDCard",
        text: "查课表"
      },
      {
        img: "../../images/main/liaotian.png",
        openpath: "../../pages/bankQuery/bankQuery",
        text: "查成绩"
      },
      {
        img: "../../images/main/liaotian1.png",
        openpath: "../../pages/MobileHome/MobileHome",
        text: "图书查询"
      },
      {
        img: "../../images/main/tianqi1.png",
        openpath: "../../pages/figure/figure",
        text: "校历"
      },
      {
        img: "../../images/main/wait.png",
        openpath: "../../pages/gojuuonn/gojuuonn",
        text: "研官网"
      },
      {
        img: "../../images/main/wzj.png",
        openpath: "../../pages/calculator-index/index",
        text: "计算器"
      },
      {
        img: "../../images/main/yhk.png",
        openpath: "../../pages/game/game",
        text: "校车服务"
      },
      {
        img: "../../images/main/yhk.png",
        text: "程序员黄历",
        openpath:"../../pages/computer/computer"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})