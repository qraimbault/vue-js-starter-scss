<template>
  <div class="page-content">
    <h2 class="page-title">
      {{ title }}
    </h2>
    <articles :articles="articles" />
  </div>
</template>

<script>
import api from '@API';

import Articles from '@Component/Index/Articles.vue';

import './Index.scss';

export default {
  name: 'Index',
  components: {
    Articles,
  },
  data() {
    return {
      title: 'Index page !',
      articles: [],
    };
  },
  created() {
    api
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.articles = response.data;
      })
      .catch(e => {
        console.error(e);
      });
  },
};
</script>
