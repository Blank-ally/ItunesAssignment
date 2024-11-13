<script>
import {PodCast} from "@/models/Media.js";

export default {
  name: "PodCastItem",
  props: {
    item: {
      type: PodCast,
      required: true,
    }
  },
}
</script>

<template>
  <div>
<!--    <h3 class="card-title">{{ item.trackName }}</h3>
&lt;!&ndash;    <p v-if="item.pages">Pages: {{ item.pages }}</p>&ndash;&gt;-->
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="item.artworkUrl100" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ item.collectionName }}</h5>
          <p class="card-text fw-bold">{{item.primaryGenreName}}</p>
          <p class="card-text ">Rating: {{item.contentAdvisoryRating}}</p>
          <p class="card-text">By: {{item.artistName}}</p>
          <p class="card-text"><small class="text-body-secondary">{{item.kind}}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/variables';
@import 'bootstrap/scss/variables';
  .card-title {
    color: $green;
  }
</style>