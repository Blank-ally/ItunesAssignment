<script>
import {TVShow} from "@/models/Media.js";

export default {
  name: "TVShowItem",
  data(){
    return {

      Readmore: false,

    }
  },
  props: {
    item: {
      type: TVShow,
      required: true,
    }
  },
  methods: {
    activateReadMore(){
      this.Readmore = (this.Readmore) ? false: true;
    }
  }
}
</script>

<template>
<!--  <div>
    <h3 class="card-title">{{ item.title }}</h3>
    <p v-if="item.pages">Pages: {{ item.pages }}</p>
  </div>-->

  <div class="row g-0">
    <div class="col-md-4">
      <img :src="item.artworkUrl100" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ item.collectionName }}</h5>
        <p class="card-text fw-bold">{{item.primaryGenreName}}</p>
        <p class="card-text">Rating: {{item.contentAdvisoryRating}}</p>
        <p class="card-text">By: {{item.artistName}}</p>
        <p class="card-text"><small class="text-body-secondary">{{item.kind}}</small></p>
        <p  class="card-text " v-if="!Readmore">{{item.longDescription.slice(0, 100)}}</p>
        <p  class="card-text " v-if="Readmore">{{item.longDescription}}</p>
        <button @click="activateReadMore" class="btn btn-outline-primary ">More</button>
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