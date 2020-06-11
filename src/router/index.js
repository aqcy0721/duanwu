import Vue from 'vue'
import Router from 'vue-router'
const Index = (resolve) => {
  import('components/index/index').then((module) => {
    resolve(module)
  })
}
const VoteList = (resolve) => {
  import('components/voteList/index').then((module) => {
    resolve(module)
  })
}
const Vote = (resolve) => {
  import('components/vote/index').then((module) => {
    resolve(module)
  })
}
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {
        index: 0,
      },
      component: Index,
      name: 'Index'
    },
    {
      path: '/voteList',
      meta: {
        index: 1,
      },
      component: VoteList,
      name: 'VoteList'
    },
    {
      path: '/vote',
      meta: {
        index: 2,
      },
      component: Vote,
      name: 'Vote'
    }
  ],
  scrollBehavior(to, from, savedPosition) {

  }
})
