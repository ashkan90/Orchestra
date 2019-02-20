import Home from '@/views/Home.vue'

function loadView(view) {
  return () => import(
    /* webpackMode: "lazy-once" */
    /* webpackChunkName: "view-[request]" */
    `@/views/${view}.vue`
  )
}

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/art/object/:item',
    name: 'art',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadView('Single')
  },
  {
    path: '/art/explore',
    name: 'explore',
    component: loadView('Explore')
  }
]