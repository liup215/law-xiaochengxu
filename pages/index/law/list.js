//index.js
//获取应用实例
const app = getApp()
var baseUrl = app.globalData.baseUrl
var lawData = {};

Page({
  data: {},
  onLoad: function () {
    wx.showLoading({
      title: '正在加载',
    })
    var _this = this;
    wx.request({
      url: baseUrl+'law',
      success:function(res){
        var resData = res.data;
        if(resData.code==200){
          _this.setData({
            lawData:resData.data,
            length:resData.data.length
          })
          wx.hideLoading();
        }
      }
    })
    // this.setData({
    //   taxData: taxData.data
    // });
  },

  getDetail: function (event) {
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../../detail/law/law?id=' + id,
    })
  }
})
