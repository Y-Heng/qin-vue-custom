import enquireJs from 'enquire.js'

export default function enquireScreen(callBack: any) {
  const hanlder = {
    match() {
      // callBack(true)
      callBack && callBack(true)
    },
    unmatch() {
      // callBack(false)
      callBack && callBack(false)
    }
  }
}
