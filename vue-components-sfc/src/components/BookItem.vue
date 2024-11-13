<script>
import {Book} from "@/models/Media.js";

export default {
  name: "BookItem",
  props: {
    item: {
      type: Book,
      required: true,
    }
  },
}
</script>

<template>
  <div>
    <h3 class="card-title">{{ item.title }}</h3>
    <p v-if="item.pages">Pages: {{ item.pages }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/variables';
@import 'bootstrap/scss/variables';
  .card-title {
    color: $green;
  }
</style>