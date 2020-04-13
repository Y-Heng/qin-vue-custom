import PouchDB from 'pouchdb'

const db = new PouchDB('admindb')

export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    setuser(state: any, user: any) {
      state.user = user
      db.get('currUser')
        .then(doc => {
          db.put({
            _id: 'currUser',
            _rev: doc._rev,
            user
          })
        })
        .catch(e => {
          if (e.status === 404) {
            db.put({
              _id: 'currUser',
              user
            })
          } else {
            throw e
          }
        })
    }
  }
}
