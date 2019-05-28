Page({

  /**
   * 页面的初始数据
   */
  data: {
    object:{
    date:'Jan 28 2017'
    },
    title:'三大大多数',
    postImg:'/image/ford1.jpg',
    avatar:'/image/5.jpg',
    content:'大打算发的大梵蒂冈官方活动单位飞洒发郭德纲和规范化',
    readingNum:'92',
    collectionNum:{
      array:[108]},
    commentNum:'7'
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){
    console.log("加载")
    var carInfor = {
      object: {
        date: 'Jan 28 2017'
      },
      title: '大速度大多数',
      postImg: '/image/ford1.jpg',
      avatar: '/image/5.jpg',
      content: '大打算发的大位飞洒发郭德纲和规范化',
      readingNum: '92',
      collectionNum: {
        array: [107]
      },
      commentNum: '6'
    }
    this.setData({
      postData: carinfor
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("渲染")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("卸载")
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
