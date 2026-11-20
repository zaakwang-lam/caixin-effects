const { categories, effects } = require('../../data/effects.js');

Page({
  data: {
    categories,
    recommend: effects.find(e => e.id === 'money_01')
  },
  onLoad() {},
  goCategory(e) {
    // ⚠️ pages/category/category 是 tabBar 页面：
    //    wx.navigateTo 跳不过去（静默失败，页面无反应）
    //    wx.switchTab 又不支持 query 参数（?id= 会被丢弃）
    // → 用 storage 传参，由分类页 onShow 读取
    const id = e.currentTarget.dataset.id;
    wx.setStorageSync('cat_pending', id);
    wx.switchTab({ url: '/pages/category/category' });
  },
  goCard(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/card/card?id=${id}` });
  },
  goSearch() {
    wx.switchTab({ url: '/pages/search/search' });
  }
});