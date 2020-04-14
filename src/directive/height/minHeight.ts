const minHeightELS: any[] = []
window.onresize = () => {
  return (() => {
    minHeightELS.forEach(item => {
      item.el.style.minHeight = document.documentElement.clientHeight + (item.h || 0) + 'px'
    })
  })()
}
export default class MinHeight {
  public bind(el: any, binding: any) {
    let h = 0
    h = binding.value
    el.style.minHeight = document.documentElement.clientHeight + (h || 0) + 'px'
    minHeightELS.push({ el, h })
  }
  public update(el: any, binding: any) {
    let h = 0
    h = binding.value
    el.style.minHeight = document.documentElement.clientHeight + (h || 0) + 'px'
    minHeightELS.push({ el, h })
  }
}
