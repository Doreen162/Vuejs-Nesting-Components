<template>
    <div>
        <show-blogs></show-blogs>
        <list-blogs></list-blogs>
    </div>
</template>

<script>
// Imports
import addBlogs from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default {
    components: {
        'add-blogs': addBlogs,
        'show-blogs': showBlogs,
        'list-blogs': listBlogs 

    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>