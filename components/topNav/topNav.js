// components/topNav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navItems: {
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
    selectItem(e) {
      const { index } = e.currentTarget.dataset;
      if (index === this.data.selectedIndex) return;
      this.setData({
        selectedIndex: index,
      })
      this.noticeParant(index);
    },
    noticeParant(index) {
      this.triggerEvent('listen', index);
    },
  }
})
