// pages/hot-line/hot-line.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardItems: [
      {
        title: '重庆邮电大学',
        cardContent: [
          {
            title: '咨询预约电话',
            contact: ['023-62461245'],
            tag: [],
          }
        ],
      },
    ],
  },

  makeACall(e) {
    const {
      currentTarget: { dataset: { phone } }
    } = e;
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },

  getHotLineInfo() {
    wx.request({
      url: 'http://127.0.0.1:4000/hotline/getInfo',
      success: (res) => {
        const { data } = res;
        // console.log(data);
        const regionList = [];
        const hotLineList = [];
        data.forEach(item => {
          // 1.判断这个地区是否出现：未出现则直接塞进去；如果出现过则塞到同一卡片中
          const regionIndex = regionList.indexOf(item.region);
          if (regionIndex < 0) {
            const regionData = {
              title: item.region,
              cardContent: [
                {
                  title: item.title,
                  contact: item.contact.split('；'),
                  tag: item.online.split('，'),
                }
              ]
            }
            regionList.push(item.region);
            hotLineList.push(regionData)
          } else {
            const cardContent = {
              title: item.title,
              contact: item.contact.split('；'),
              tag: item.online.split('，') || '',
            };
            hotLineList[regionIndex].cardContent.push(cardContent);
          }
        })
        this.setData({
          cardItems: [...this.data.cardItems, ...hotLineList],
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getHotLineInfo()
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