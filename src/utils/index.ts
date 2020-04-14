/**
 *
 * 查找数组，返回匹配到的第一个对象
 *
 * @param array 被查找的数组
 * @param feature 查找特征 或者为一个具体值，用于匹配数组遍历的值，或者为一个对象，表明所有希望被匹配的key-value
 * @param or boolean 希望命中feature全部特征或者只需命中一个特征，默认false
 *
 * @return 数组对象  查找不到返回false
 */
export function findArray(array: any, feature: any, all = true) {
  for (const index of Object.keys(array)) {
    const cur = array[index]
    if (feature instanceof Object) {
      let allRight = true
      for (const key of Object.keys(feature)) {
        const value = feature[key]
        if (cur[key] === value && !all) {
          return array[index]
        }
        if (all && cur[key] !== value) {
          allRight = false
          break
        }
      }
      if (allRight) {
        return array[index]
      }
    } else {
      if (cur === feature) {
        return array[index]
      }
    }
  }
  return false
}
