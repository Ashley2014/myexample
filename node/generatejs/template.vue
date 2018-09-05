<template>
  <div >
    {{content}}
  </div>
</template>
<script>
  export default {
    name: 'APP',
    data() {
      return {
        content:'#content#',
      }
    },
    mounted() {
      console.log(`number '#content#' component mounted`)

    }
  }
</script>

