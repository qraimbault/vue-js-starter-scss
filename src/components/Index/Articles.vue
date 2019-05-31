<template>
  <div>
    <ul class="list">
      <li 
        v-for="(article, index) in articles" 
        :key="index"
      >
        <h2 class="list__title">
          {{ article.title }}
        </h2>
        <p class="list__content">
          {{ article.body }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import './Articles.scss';

export default {
  name: 'Articles',
  props: {
    articles: {
      required: true,
      type: Array,
    },
  },
  methods: {
    test() {
      if(true) {
        test();

        return;
      }
    },
  },
};
</script>
