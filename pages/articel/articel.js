// pages/test/test.js
const app = getApp();
const map = {
  0: '全部',
  1: '亲密关系',
  2: '性格人格',
  3: '情绪管理',
  4: '其他',
};
let totalArticle = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navItems: [
      {
        image: '/images/test/all@2x.png',
        selectedImage: '/images/test/all-selected@2x.png',
        desc: '全部'
      },
      {
        image: '/images/test/intimacy@2x.png',
        selectedImage: '/images/test/intimacy-selected@2x.png',
        desc: '亲密关系'
      },
      {
        image: '/images/test/character@2x.png',
        selectedImage: '/images/test/character-selected@2x.png',
        desc: '性格人格'
      },
      {
        image: '/images/test/emotion@2x.png',
        selectedImage: '/images/test/emotion-selected@2x.png',
        desc: '情绪管理'
      },
      {
        image: '/images/test/other@2x.png',
        selectedImage: '/images/test/other-selected@2x.png',
        desc: '其他'
      },
    ],
    switchItems: [
      { desc: '最新' },
      { desc: '最热' },
    ],
    article: [],
  },

  switchChanged(e) {
    const { selectedIndex } = e.detail;
    console.log('switchChange:', selectedIndex);
  },

  navChange(e) {
    const navIndex = e.detail;
    let nowArticle;
    if (navIndex === 0) {
      nowArticle = totalArticle;
    } else {
      nowArticle = totalArticle.filter(item => {
        return item.type === map[navIndex];
      })
    }
    this.setData({
      article: nowArticle,
    })
  },

  toArticle(e) {
    console.log('e', e);
    const { index } = e.currentTarget.dataset;
    app.globalData.articleInfo = this.data.article[index];
    wx.navigateTo({
      url: '/pages/articel-content/articel-content',
    })
  },

  getArticle() {
    wx.request({
      url: 'http://127.0.0.1:4000/article/getInfo',
      method: 'get',
      success: (res) => {
        const { article } = res.data;
        totalArticle = article;
        console.log('article:', article)
        this.setData({
          article: article
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getArticle()
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