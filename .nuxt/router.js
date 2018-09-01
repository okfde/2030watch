import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _11c3e5e4 = () => import('../pages/aktiv.vue' /* webpackChunkName: "pages/aktiv" */).then(m => m.default || m)
const _76541c28 = () => import('../pages/projekt.vue' /* webpackChunkName: "pages/projekt" */).then(m => m.default || m)
const _5c124964 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _514d1688 = () => import('../pages/methodik.vue' /* webpackChunkName: "pages/methodik" */).then(m => m.default || m)
const _426ab1de = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _20fdcf42 = () => import('../pages/blog-post.vue' /* webpackChunkName: "pages/blog-post" */).then(m => m.default || m)
const _3f8cf9ce = () => import('../pages/impressum.vue' /* webpackChunkName: "pages/impressum" */).then(m => m.default || m)
const _6f8dcc12 = () => import('../pages/blog/BlogpostPreview.vue' /* webpackChunkName: "pages/blog/BlogpostPreview" */).then(m => m.default || m)
const _3a432e36 = () => import('../pages/blog/2018/08/31/wir-muessen-reden.vue' /* webpackChunkName: "pages/blog/2018/08/31/wir-muessen-reden" */).then(m => m.default || m)
const _5b99322b = () => import('../pages/blog/2018/06/06/gleise-auf-nachhaltigkeit-umstellen.vue' /* webpackChunkName: "pages/blog/2018/06/06/gleise-auf-nachhaltigkeit-umstellen" */).then(m => m.default || m)
const _cf5d83ae = () => import('../pages/sdg/_sdg.vue' /* webpackChunkName: "pages/sdg/_sdg" */).then(m => m.default || m)
const _49df0f89 = () => import('../pages/indicator/_indicator.vue' /* webpackChunkName: "pages/indicator/_indicator" */).then(m => m.default || m)
const _7bca2429 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/aktiv",
			component: _11c3e5e4,
			name: "aktiv"
		},
		{
			path: "/projekt",
			component: _76541c28,
			name: "projekt"
		},
		{
			path: "/about",
			component: _5c124964,
			name: "about"
		},
		{
			path: "/methodik",
			component: _514d1688,
			name: "methodik"
		},
		{
			path: "/blog",
			component: _426ab1de,
			name: "blog"
		},
		{
			path: "/blog-post",
			component: _20fdcf42,
			name: "blog-post"
		},
		{
			path: "/impressum",
			component: _3f8cf9ce,
			name: "impressum"
		},
		{
			path: "/blog/BlogpostPreview",
			component: _6f8dcc12,
			name: "blog-BlogpostPreview"
		},
		{
			path: "/blog/2018/08/31/wir-muessen-reden",
			component: _3a432e36,
			name: "blog-2018-08-31-wir-muessen-reden"
		},
		{
			path: "/blog/2018/06/06/gleise-auf-nachhaltigkeit-umstellen",
			component: _5b99322b,
			name: "blog-2018-06-06-gleise-auf-nachhaltigkeit-umstellen"
		},
		{
			path: "/sdg/:sdg?",
			component: _cf5d83ae,
			name: "sdg-sdg"
		},
		{
			path: "/indicator/:indicator?",
			component: _49df0f89,
			name: "indicator-indicator"
		},
		{
			path: "/",
			component: _7bca2429,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
