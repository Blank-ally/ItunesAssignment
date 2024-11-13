<script>
import {Movie} from "@/models/Media.js";
import LibraryCollection from "@/models/LibraryCollection.js";

export default {
  name: "MovieItem",
  data(){
    return {

      Readmore: false,

    }
  },
  props: {
    item: {
      type: Movie,
      required: true,
    },

  },

  methods: {
    activateReadMore(){
      this.Readmore = (this.Readmore) ? false: true;
    }
  }
}
</script>

<template>

  <div class="row g-0">
    <div class="col-md-4">
      <img :src="item.artworkUrl100" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ item.trackName }}</h5>
        <p class="card-text fw-bold">{{item.primaryGenreName}}</p>
        <p class="card-text">By: {{item.artistName}}</p>
        <p class="card-text"><small class="text-body-secondary">{{item.kind}}</small></p>
        <p  class="card-text " v-if="!Readmore">{{item.longDescription.slice(0, 100)}}</p>
        <p  class="card-text " v-if="Readmore">{{item.longDescription}}</p>
        <button @click="activateReadMore" class="btn btn-outline-primary">More</button>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $orange: #ff8300;
  .card-title {
    font-weight: bold;
    color: $orange;
  }
</style>