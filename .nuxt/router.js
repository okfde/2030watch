import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _a650e5de = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _40ef746f = () => import('../pages/blog-post.vue' /* webpackChunkName: "pages/blog-post" */).then(m => m.default || m)
const _20adb251 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _5f7e9efb = () => import('../pages/impressum.vue' /* webpackChunkName: "pages/impressum" */).then(m => m.default || m)
const _3337f5ef = () => import('../pages/methodik.vue' /* webpackChunkName: "pages/methodik" */).then(m => m.default || m)
const _aa51aed6 = () => import('../pages/projekt.vue' /* webpackChunkName: "pages/projekt" */).then(m => m.default || m)
const _78cd18c5 = () => import('../pages/blog/BlogpostPreview.vue' /* webpackChunkName: "pages/blog/BlogpostPreview" */).then(m => m.default || m)
const _772d0f18 = () => import('../pages/blog/2018/06/06/gleise-auf-nachhaltigkeit-umstellen.vue' /* webpackChunkName: "pages/blog/2018/06/06/gleise-auf-nachhaltigkeit-umstellen" */).then(m => m.default || m)
const _35535c63 = () => import('../pages/blog/2018/08/31/wir-muessen-reden.vue' /* webpackChunkName: "pages/blog/2018/08/31/wir-muessen-reden" */).then(m => m.default || m)
const _5e14c33e = () => import('../pages/blog/2018/09/25/3-jahre-spaeter.vue' /* webpackChunkName: "pages/blog/2018/09/25/3-jahre-spaeter" */).then(m => m.default || m)
const _14d70bf2 = () => import('../pages/blog/2018/11/20/bits-baeume-rueckblick.vue' /* webpackChunkName: "pages/blog/2018/11/20/bits-baeume-rueckblick" */).then(m => m.default || m)
const _531e5c3c = () => import('../pages/indicator/_indicator.vue' /* webpackChunkName: "pages/indicator/_indicator" */).then(m => m.default || m)
const _17a08148 = () => import('../pages/sdg/_sdg.vue' /* webpackChunkName: "pages/sdg/_sdg" */).then(m => m.default || m)
const _66e13054 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition) {
      if (to.hash) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ selector: to.hash })
          }, 500)
        })
      }
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
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
			path: "/about",
			component: _a650e5de,
			name: "about"
		},
		{
			path: "/blog-post",
			component: _40ef746f,
			name: "blog-post"
		},
		{
			path: "/blog",
			component: _20adb251,
			name: "blog"
		},
		{
			path: "/impressum",
			component: _5f7e9efb,
			name: "impressum"
		},
		{
			path: "/methodik",
			component: _3337f5ef,
			name: "methodik"
		},
		{
			path: "/projekt",
			component: _aa51aed6,
			name: "projekt"
		},
		{
			path: "/blog/BlogpostPreview",
			component: _78cd18c5,
			name: "blog-BlogpostPreview"
		},
		{
			path: "/blog/2018/06/06/gleise-auf-nachhaltigkeit-umstellen",
			component: _772d0f18,
			name: "blog-2018-06-06-gleise-auf-nachhaltigkeit-umstellen"
		},
		{
			path: "/blog/2018/08/31/wir-muessen-reden",
			component: _35535c63,
			name: "blog-2018-08-31-wir-muessen-reden"
		},
		{
			path: "/blog/2018/09/25/3-jahre-spaeter",
			component: _5e14c33e,
			name: "blog-2018-09-25-3-jahre-spaeter"
		},
		{
			path: "/blog/2018/11/20/bits-baeume-rueckblick",
			component: _14d70bf2,
			name: "blog-2018-11-20-bits-baeume-rueckblick"
		},
		{
			path: "/indicator/:indicator?",
			component: _531e5c3c,
			name: "indicator-indicator"
		},
		{
			path: "/sdg/:sdg?",
			component: _17a08148,
			name: "sdg-sdg"
		},
		{
			path: "/",
			component: _66e13054,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
