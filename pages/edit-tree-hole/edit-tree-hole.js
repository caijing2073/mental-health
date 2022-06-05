// pages/edit-tree-hole/edit-tree-hole.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitText: '',
  },

  changeText(e) {
    const {value} = e.detail;
    this.setData({
      submitText: value,
    })
  },

  submitContent() {
    console.log('submitText:', this.data.submitText)
    wx.showToast({
      title: '树洞发表成功～',
      icon: 'success',
    })
  },

  uploadImage() {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'http://127.0.0.1:4000/file/image',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data;
            console.log('上传成功:', res);
          },
          fail: (error) => {
            console.log('上传失败：', error);
          }
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showToast({
      title: '图片上传成功',
      icon:'success'
    })
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