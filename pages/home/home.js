// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    items: [
      {
        image: '../../images/home/swiper/daily.png',
      },
      // {
      //   image: '../../images/home/swiper/dog.png',
      // },
      // {
      //   image: '../../images/home/swiper/zebra.png',
      // },
    ],
    navigation: { type: 'dots' },
    navigation1: { type: 'dots-bar' },
    navigation2: { type: 'fraction' },
    navigation3: { type: '', hasNavBtn: true },
    homeItems: [
      {
        image: '../../images/home/icon/tree-hole.png',
        text: '树洞',
        page: '../tree-hole/tree-hole',
      },
      {
        image: '../../images/home/icon/music.png',
        text: '音乐',
        page: '../music/music',
      },
      {
        image: '../../images/home/icon/hot-line.png',
        text: '热线',
        page: '../hot-line/hot-line',
      },
      {
        image: '../../images/home/icon/active.png',
        text: '活动',
        page: '../active/active',
      },
      {
        image: '../../images/home/icon/articel.png',
        text: '文章',
        page: '../articel/articel',
      },
      {
        image: '../../images/home/icon/tips.png',
        text: '小知识',
        page: '../tips/tips',
      },
      // {
      //   image: '../../images/home/icon/treatment.png',
      //   text: '疗法',
      //   page: '../treatment/treatment',
      // },
    ],
  },
  onChange(e) {
    const {
      detail: { current, source },
    } = e;
    // console.log(current, source);
  },

  toPage(e) {
    const {
      currentTarget: { dataset: { page } }
    } = e;
    wx.navigateTo({
      url: page,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})