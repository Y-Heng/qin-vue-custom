const heightELS: any[] = []
window.onresize = () => {
  return (() => {
    heightELS.forEach(item => {
      item.el.style.height = item.h === 'auto' ? 'auto' : document.documentElement.clientHeight + (item.h || 0) + 'px'
    })
  })()
}

export default class Height {
  public bind(el: any, binding: any) {
    let h: any
    h = binding.value
    el.style.height = h === 'auto' ? 'auto' : document.documentElement.clientHeight + (h || 0) + 'px'
    heightELS.push({ el, h })
  }
  public update(el: any, binding: any) {
    let h: any
    h = binding.value
    el.style.height = h === 'auto' ? 'auto' : document.documentElement.clientHeight + (h || 0) + 'px'
    heightELS.push({ el, h })
  }
}
