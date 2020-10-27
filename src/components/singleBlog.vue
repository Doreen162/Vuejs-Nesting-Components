<template>
   <div id="single-blog">
       <h1></h1>
       <article></article>
   </div>

</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
            blog: {}
        }
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
          console.log(data);
          this.blog = data.body;
        });
    }
}
</script>