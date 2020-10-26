<template>
<div>
  <slot name="title"></slot>
  <h1> I am the form helper</h1>
  <slot name="text"></slot>
</div>
</template>

<script>

export default { 
   components: {

   },
   
  data() {
    return {

    }
  },
  methods: {
   
    } 
  }

</script>

<style scoped>
h1{
  color: red;
}
</style>


