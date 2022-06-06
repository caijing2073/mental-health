// pages/questionnaire/questionnaire.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic: '在过去的两周里, 你生活中以下症状出現的频率有多少？',
    questions: [
      {
        title: '感觉紧张，焦虑或急切',
        seletedOption: '',
        options: [
          'A.没有',
          'B.有几天',
          'C.一半以上时间',
          'D.几乎天天',
        ],
      },
      {
        title: '不能够停止或控制担忧',
        seletedOption: '',
        options: [
          'A.没有',
          'B.有几天',
          'C.一半以上时间',
          'D.几乎天天',
        ],
      },
      {
        title: '对各种各样的事情担忧过多',
        seletedOption: '',
        options: [
          'A.没有',
          'B.有几天',
          'C.一半以上时间',
          'D.几乎天天',
        ],
      },
      {
        title: '很难放松下来',
        seletedOption: '',
        options: [
          'A.没有',
          'B.有几天',
          'C.一半以上时间',
          'D.几乎天天',
        ],
      },
      {
        title: '由于不安而无法静坐',
        seletedOption: '',
        options: [
          'A.没有',
          'B.有几天',
          'C.一半以上时间',
          'D.几乎天天',
        ],
      },
      {
        title: '变得容易烦恼或急躁',
        seletedOption: '',
        options: [
          'A.没有',
          'B.有几天',
          'C.一半以上时间',
          'D.几乎天天',
        ],
      },
      {
        title: '感到似乎将有可怕的事情发生而害怕',
        seletedOption: '',
        options: [
          'A.没有',
          'B.有几天',
          'C.一半以上时间',
          'D.几乎天天',
        ],
      },

    ],
    isSubmit: false,
    currentQuestionIndex: 0,
  },

  changeQuestionIndex(currentIndex) {
    wx.showLoading();
    this.setData({
      currentQuestionIndex: this.data.currentQuestionIndex + currentIndex,
    }, wx.hideLoading())
  },

  onChange(event) {
    const { value: selectOption } = event.detail;
    const { index: questionIndex } = event.currentTarget.dataset;
    const { questions } = this.data;
    questions[questionIndex].seletedOption = selectOption;
    this.setData({
      questions: questions,
    })
    if (this.data.currentQuestionIndex === questions.length - 1) {
      this.setData({
        currentQuestionIndex: this.data.currentQuestionIndex + 1,
      }, () => {
        this.setData({
          currentQuestionIndex: this.data.currentQuestionIndex - 1,
        })
      })
      return;
    }
    this.changeQuestionIndex(1);
  },

  prevQuestion() {
    this.changeQuestionIndex(-1);
  },

  submitQuestion() {
    if (this.data.questions[this.data.questions.length - 1].seletedOption === '') return;
    let finalScore = 0;
    this.data.questions.forEach(item => {
      finalScore += item.seletedOption;
    })
    this.setData({
      isSubmit: true,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('questions:', questions);
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