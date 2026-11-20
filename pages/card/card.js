const { effects } = require('../../data/effects.js');

Page({
  data: {
    card: {},
    index: 0,
    total: 0,
    list: [],
    isFav: false
  },
  onLoad(options) {
    const id = options.id;
    const list = effects.filter(e => e.category === (effects.find(x => x.id === id)?.category || 'daily'));
    const index = list.findIndex(e => e.id === id);
    const card = list[index] || list[0];
    const favorites = wx.getStorageSync('favorites') || [];
    this.setData({
      list,
      index: index >= 0 ? index : 0,
      total: list.length,
      card,
      isFav: favorites.includes(card.id)
    });
  },
  prev() {
    if (this.data.index > 0) this.switchTo(this.data.index - 1);
  },
  next() {
    if (this.data.index < this.data.total - 1) this.switchTo(this.data.index + 1);
  },
  switchTo(i) {
    const card = this.data.list[i];
    const favorites = wx.getStorageSync('favorites') || [];
    this.setData({
      index: i,
      card,
      isFav: favorites.includes(card.id)
    });
  },
  toggleFav() {
    let favorites = wx.getStorageSync('favorites') || [];
    const id = this.data.card.id;
    if (this.data.isFav) {
      favorites = favorites.filter(f => f !== id);
    } else {
      favorites.push(id);
    }
    wx.setStorageSync('favorites', favorites);
    this.setData({ isFav: !this.data.isFav });
    wx.vibrateShort();
    wx.showToast({ title: this.data.isFav ? '已收藏' : '已取消', icon: 'none' });
  }
});