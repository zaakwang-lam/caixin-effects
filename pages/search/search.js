const { effects } = require('../../data/effects.js');

Page({
  data: {
    keyword: '',
    results: [],
    hot: ['沉没成本', '损失厌恶', '锚定', '从众', '达克效应']
  },
  onInput(e) {
    const keyword = e.detail.value;
    this.setData({ keyword });
    if (!keyword) {
      this.setData({ results: [] });
      return;
    }
    const results = effects.filter(e => 
      e.name.includes(keyword) || e.alias.toLowerCase().includes(keyword.toLowerCase()) || e.explanation.includes(keyword)
    );
    this.setData({ results });
  },
  goCard(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/card/card?id=${id}` });
  },
  searchHot(e) {
    const word = e.currentTarget.dataset.word;
    this.setData({ keyword: word });
    this.onInput({ detail: { value: word } });
  }
});