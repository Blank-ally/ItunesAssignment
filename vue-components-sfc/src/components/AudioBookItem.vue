<script>
import {AudioBook} from "@/models/Media.js";

export default {
  name: "AudioBookItem",
  data(){
    return {

      Readmore: false,

    }
  },
  props: {
    item: {
      type: AudioBook,
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

    <div class="row g-0">
      <div class="col-md-4">
        <img :src="item.artworkUrl100" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ item.collectionName }}</h5>
          <p class="card-text fw-bold">{{item.primaryGenreName}}</p>
          <p class="card-text">By: {{item.artistName}}</p>
          <p class="card-text"><small class="text-body-secondary">{{item.wrapperType}}</small></p>
          <p  class="card-text " v-if="!Readmore" v-html="item.description.slice(0, 100)"></p>
          <p class="card-text " v-if="Readmore" v-html="item.description"></p>
        <button @click="activateReadMore" class="btn btn-outline-primary ">More</button>
        </div>
      </div>
    </div>

</template>

<style scoped lang="scss">
@import '@/scss/variables';
@import 'bootstrap/scss/variables';
  .card-title {
    color: #8FB8DE;
  }
</style>