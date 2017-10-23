// pages/myneeds/tax/add/add.js
const app = getApp();
var baseUrl = app.globalData.baseUrl;

var contactAddress = [[],[],[],[]];
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
    var columInit = 0;
    var _this = this;
    wx.showLoading({
      title: '正在加载...',
    })
    areaInit(contactAddress,0);
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

})

function areaInit(area,position){
  if(position<3){
    var parent = position == 0 ? 0 : (area[position - 1][0].id)
    wx.request({
      url: baseUrl + "area/child-of-" + parent,
      method:"GET",
      success:function(res){
        contactAddress[position+1] = res.data.data;
        areaInit(area,position+1);
      }
    })
  }else{
    var parent = area[position][0].id
    wx.request({      
      url: baseUrl + "area/child-of-" + parent,
      method: "GET",
      success: function (res) {
        contactAddress[position + 1] = res.data.data;
        wx.hideLoading();
      }
    })
  }
}