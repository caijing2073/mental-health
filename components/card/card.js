Component({
  properties: {
    content: {
      type: String,
      value: '互相督促、养成读书的习惯.互相督促、养成读书的习惯.互相督促、养成读书的习惯.互相督促、养成读书的习惯',
    },
    bgImg: {
      type: String,
      value: '',
    },
    cardIndex: {
      type: String,
    },
    id: {
      type: String,
    }
  },
  data: {
    isShowPop: false,
  },
  methods: {
    showPop() {
      this.setData({
        isShowPop: true
      })
    },
    hidePop() {
      if (this.data.isShowPop) {
        this.setData({
          isShowPop: false
        })
      }
    },
    choose() {
      console.log('111')
    },
    deleteTreeHole() {
      console.log('index:', this.properties.index);
    },
  },
})