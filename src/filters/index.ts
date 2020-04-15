// 格式化日期
export function fmDate(time: string, cFormat: string) {
  if (arguments.length === 0) {
    return null
  }
  return moment(time).format(cFormat || 'YYYY-MM-DD')
}
