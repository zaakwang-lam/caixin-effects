const { effects, categories } = require('../../data/effects.js');

Page({
  data: {
    cats: categories,          // 供页面内的分类切换条使用
    activeId: 'daily',
    category: {},
    list: [],
    favorites: []
  },
  onLoad(options) {
    // tabBar 页面拿不到 query，options.id 通常为空 → 兜底 daily
    this.build(options && options.id ? options.id : 'daily');
  },
  onShow() {
    // 首页分类卡片通过 storage 传参（switchTab 不支持 query）
    const pending = wx.getStorageSync('cat_pending');
    if (pending) {
      wx.removeStorageSync('cat_pending');
      if (pending !== this.data.activeId) {
        this.build(pending);
        return;
      }
    }
    this.refreshFavorites();
  },
  build(id) {
    const cat = categories.find(c => c.id === id) || categories[0];
    const list = effects.filter(e => e.category === cat.id);
    const favorites = wx.getStorageSync('favorites') || [];
    this.setData({ activeId: cat.id, category: cat, list, favorites });
  },
  refreshFavorites() {
    this.setData({ favorites: wx.getStorageSync('favorites') || [] });
  },
  switchCat(e) {
    const id = e.currentTarget.dataset.id;
    if (id === this.data.activeId) return;
    this.build(id);
  },
  goCard(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/card/card?id=${id}` });
  }
});