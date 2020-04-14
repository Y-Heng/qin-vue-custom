const avatars = [
  'http://localhost:6688/clpz-avatar.png'
]

const positions = [
  'JAVA工程师 | 蚂蚁金服-计算服务事业群-微信平台部',
  '前端工程师 | 蚂蚁金服-计算服务事业群-VUE平台',
  '前端工程师 | 蚂蚁金服-计算服务事业群-REACT平台',
  '产品分析师 | 蚂蚁金服-计算服务事业群-IOS平台部'
]

const sayings = [
  '那是一种内在的东西，他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么'
]

const logos = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'
]

const admins = ['CLPZ']

const groups = ['科学搬砖组', '骗你学计算机', '程序员日常']

const users = [{
  name: 'CLPZ',
  avatar: avatars[0],
  groupId: 0
}]

const teams = groups.map((item, index) => {
  return {
    name: item,
    avatar: avatars[0]
  }
})

export {
  logos,
  sayings,
  positions,
  avatars,
  admins,
  groups,
  users,
  teams
}