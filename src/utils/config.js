const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'Blockscloud',
  prefix: 'BC',
  footerText: 'ixiaoquan  © 2017 tangtanglove',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/center/login`,
    userLogout: `${APIV1}/center/logout`,
    userRegister: `${APIV1}/center/register`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
