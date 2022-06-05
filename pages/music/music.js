// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList: [],
    currentRadio: '',
    coverImg: '/images/music/cover-bg@2x.png',
    prevIcon: '/images/music/prev@2x.png',
    pauseIcon: '/images/music/pause@2x.png',
    nextIcon: '/images/music/next@2x.png',
    emotionItems: [
      {
        icon: '/images/music/sad@2x.png',
        desc: '忧伤',
        music: 'sad',
      },
      {
        icon: '/images/music/happy@2x.png',
        desc: '快乐',
        music: 'happy',
      },
      {
        icon: '/images/music/calm@2x.png',
        desc: '平静',
        music: 'calm',
      },
      {
        icon: '/images/music/interest@2x.png',
        desc: '兴趣',
        music: 'interest',
      },
      {
        icon: '/images/music/lonely@2x.png',
        desc: '寂寞',
        music: 'lonely',
      },
      {
        icon: '/images/music/cure@2x.png',
        desc: '治愈',
        music: 'cure',
      },
    ],
    currentMusicList: [],
    isShowEmotion: false,
    selectedIcon: 1,
  },

  distroyCurrentMusic() {
    return new Promise((resolve, reject) => {
      if (this.data.currentRadio) {
        this.data.currentRadio.destroy();
      }
      resolve(1);
    })
  },

  setAudio() {
    this.distroyCurrentMusic().then(() => {
      this.setData({
        currentRadio: wx.createInnerAudioContext(),
      })
      console.log('this.data.currentMusicList[0]:', this.data.currentMusicList[0]);
      this.data.currentRadio.src = `http://localhost:4000/file/getMusic?music=${this.data.currentMusicList[0]}`;
      this.data.currentRadio.play();
    })
  },

  prevMusic() {

  },

  pauseMusic() {
    this.data.currentRadio.pause();
  },

  nextMusic() {

  },

  getAudio() {
    wx.request({
      url: 'http://127.0.0.1:4000/file/getMusic',
      success: (res) => {
        console.log('res:', res);
        this.setData({
          musicUrl: res.data,
        })
      },
    })
  },

  getMusicList(index) {
    wx.request({
      url: 'http://127.0.0.1:4000/file/getMusicList',
      method: 'POST',
      data: {
        emotion: this.data.emotionItems[index].music,
      },
      success: (res) => {
        this.setData({
          currentMusicList: res.data,
        }, () => {
          this.setAudio();
        })
      }
    })
  },

  hideEmotion() {
    this.setData({
      isShowEmotion: false,
    })
  },

  showEmotion() {
    this.setData({
      isShowEmotion: true,
    })
  },

  selectIcon(e) {
    const { index } = e.currentTarget.dataset;
    this.getMusicList(index);
    this.setData({
      selectedIcon: index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.useAudio();
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