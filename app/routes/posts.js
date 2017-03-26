//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//import Ash from '@ash-framework/ash'
//
//export default class PostRoute extends Ash.Route {
//  model () {
//
//  }
//}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// app/routes/posts.js
import Ash from 'ash-core'

export default class PostsRoute extends Ash.Route {
  model () {
    return [
      {id: 1, title: 'My post 1', description: 'WoW'},
      {id: 2, title: 'My post 2', description: 'WoWsErS'}
    ]
  }
}
