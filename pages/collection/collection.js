const { effects } = require('../../data/effects.js');

Page({
  data: {
    list: []
  },
  onShow() {
    const favIds = wx.getStorageSync('favorites') || [];
    const list = effects.filter(e => favIds.includes(e.id));
    this.setData({ list });
  },
  goCard(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/card/card?id=${id}` });
  },
  clearAll() {
    wx.showModal({
      title: '清空收藏',
      content: '确定清空所有收藏吗？',
      success: (res) => {
        if (res.confirm) {
          wx.setStorageSync('favorites', []);
          this.setData({ list: [] });
        }
      }
    });
  }
});