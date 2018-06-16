<template>
  <div class="page-content">
    <h2 class="page-title">{{ title }}</h2>
    <articles :articles="articles"></articles>
  </div>
</template>

<script>
  import axios from 'axios';
  import Articles from '../components/Index/Articles.vue';
  import '../scss/views/Index.scss';
  export default {
    name: 'Index',
    components: {
      Articles
    },
    data () {
      return {
        title: 'Index page !',
        articles: null
      }
    },
    created () {
      axios
        .get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          this.articles = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
        console.log(this.posts);
    }
  }
</script>

<style></style>