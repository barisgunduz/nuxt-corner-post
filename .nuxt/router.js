import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6008e11c = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _c6eb9a14 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _1b2a8286 = () => interopDefault(import('../pages/admin/new-post.vue' /* webpackChunkName: "pages/admin/new-post" */))
const _4a4c5ac6 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _3f5eb221 = () => interopDefault(import('../pages/posts/_postId/index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _7938d432 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _6008e11c,
    name: "admin"
  }, {
    path: "/posts",
    component: _c6eb9a14,
    name: "posts"
  }, {
    path: "/admin/new-post",
    component: _1b2a8286,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _4a4c5ac6,
    name: "admin-postId"
  }, {
    path: "/posts/:postId",
    component: _3f5eb221,
    name: "posts-postId"
  }, {
    path: "/",
    component: _7938d432,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
