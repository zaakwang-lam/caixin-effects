const { effects, categories } = require('../../data/effects.js');

Page({
  data: {
    category: {},
    list: [],
    favorites: []
  },
  onLoad(options) {
    const id = options.id || 'daily';
    const cat = categories.find(c => c.id === id) || categories[0];
    const list = effects.filter(e => e.category === id);
    const favorites = wx.getStorageSync('favorites') || [];
    this.setData({ category: cat, list, favorites });
  },
  goCard(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/card/card?id=${id}` });
  }
});