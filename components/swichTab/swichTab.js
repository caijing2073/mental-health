// components/swichTab/swichTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    switchItems: {
      type: Array,
      value: [],
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    selectedIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e) {
      this.setData({
        selectedIndex: this.data.selectedIndex ? 0 : 1,
      })
      this.noticeParent();
    },
    noticeParent() {
      const returnData = {
        selectedIndex: this.data.selectedIndex,
      };
      this.triggerEvent('listen', returnData);
    },
  }
})
