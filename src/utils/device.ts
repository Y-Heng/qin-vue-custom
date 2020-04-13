import enquireJs from 'enquire.js'

export default function enquireScreen(callBack: any) {
  const hanlder = {
    match() {
      // callBack(true)
      if (callBack) {
        callBack(true)
      }
    },
    unmatch() {
      // callBack(false)
      if (callBack) {
        callBack(false)
      }
    }
  }
}
