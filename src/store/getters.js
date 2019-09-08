const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  theme: state => state.app.theme,
  tagsView: state => state.app.tagsView,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => {
    let cachedViews = []
    state.tagsView.visitedViews.forEach(view => {
      if (view.meta.noCache === true) {
        cachedViews.push(view.name)
      }
    })
    return cachedViews
  },
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name,
  // introduction: state => state.user.introduction,
  // roles: state => state.user.roles,
  permission_routes: state => state.permission.routes
  // errorLogs: state => state.errorLog.logs
}
export default getters
