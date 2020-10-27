import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'


export default [
    { path: '/', components: showBlogs},
    { path: '/add',component: addBlog},
    { path: '/blog/:id',component: singleBlog},
]