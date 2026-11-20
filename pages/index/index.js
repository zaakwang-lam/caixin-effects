const { categories, effects } = require('../../data/effects.js');

Page({
  data: {
    categories,
    recommend: effects.find(e => e.id === 'money_01')
  },
  onLoad() {},
  goCategory(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/category/category?id=${id}` });
  },
  goCard(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/card/card?id=${id}` });
  },
  goSearch() {
    wx.switchTab({ url: '/pages/search/search' });
  }
});