App({
  onLaunch() {
    // 初始化收藏
    if (!wx.getStorageSync('favorites')) {
      wx.setStorageSync('favorites', []);
    }
  },
  globalData: {
    userInfo: null
  }
});