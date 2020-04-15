export default {
  namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'head',
    systemName: '空气质量预报分析系统',
    copyright: 'copyright',
    menuString: '',
    footerLinks: [
      {
        link: '#',
        name: ''
      }
    ],
    multipage: true
  },
  mutations: {
    setDevice(state: any, isMobile: boolean) {
      state.isMobile = isMobile
    },
    setTheme(state: any, theme: string) {
      state.theme = theme
    },
    setMenuString(state: any, menuString: string) {
      console.log(menuString)
      state.menuString = menuString
    },
    setLayout(state: any, layout: any) {
      state.layout = layout
    },
    setMultipage(state: any, multipage: any) {
      state.multipage = multipage
    }
  }
}
