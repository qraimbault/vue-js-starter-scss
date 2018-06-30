<template>
  <div class="article">
    <ul>
      <li v-for="(article, index) in articles" :key="index">
          <h2>{{article.title}}</h2>
          <p>{{article.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: {
    articles: {
      required: true,
      type: Array
    }
  }
};
</script>