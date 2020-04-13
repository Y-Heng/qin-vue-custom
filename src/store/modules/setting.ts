export default {
  namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'side',
    systemName: '空气质量预报分析系统',
    copyright: 'copyright',
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
    setLayout(state: any, layout: any) {
      state.layout = layout
    },
    setMultipage(state: any, multipage: any) {
      state.multipage = multipage
    }
  }
}
