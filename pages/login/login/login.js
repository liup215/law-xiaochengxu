// pages/login/login.js
var reference = '';
var app = getApp();
var baseUrl = app.globalData.baseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    reference = options.reference;
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
  
  },

  formBindsubmit:function(e){
    var login = {
      phoneNumber:e.detail.value.phoneNumber,
      password:e.detail.value.password,
      loginType:1
    }

    wx.request({
      url: baseUrl+"login",
      data:login,
      method:"POST",
      dataType:"json",
      success:function(res){
        console.log(res);
        var tokenModel = res.data.data
        if (res.statusCode == 200) {
          wx.setStorage({
            key: 'userId',
            data: tokenModel.userId,
          })
          wx.setStorage({
            key: 'token',
            data: tokenModel.token,
          })
          wx.reLaunch({
            url: reference,
          })
          
        }
      }
    })
  },

  register:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  }
})