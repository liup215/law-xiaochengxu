// pages/myneeds/index.js
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
    var token = wx.getStorageSync("token");
    var userId = wx.getStorageSync("userId");
    var authentication = userId + "_" + token;
    wx.request({
      url: baseUrl + "authCheck",
      data: {
        authentication: authentication
      },
      method: "POST",
      dataType: "json",
      success: function (res) {
        console.log(res)
        var authCheck = res.data.data;
        if (!authCheck.authCheck) {
          wx.redirectTo({
            url: '../login/login/login?reference=../../myneeds/index',
          })
        }
      }
    })
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

  goToTax:function(){
    wx.navigateTo({
      url: 'tax/list',
    })
  },

  goToLaw: function () {
    wx.navigateTo({
      url: 'law/list',
    })
  },

  publish:function(){
    wx.navigateTo({
      url: 'add',
    })
  },

})