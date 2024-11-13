<script>
import LibraryItem from "@/components/LibraryItem.vue";
import LibraryCollection from "@/models/LibraryCollection.js";
import {Book, Movie,Song,TVShow,AudioBook,PodCast} from "@/models/Media.js";
import LSearch from "./LSearch.vue";

export default {
  name: "LibraryItemList",
  components: {LibraryItem},
  // this function is run AFTER the props have been passed in
/*  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('Ember in the Ashes', 462))
          .addItem(new Movie('Strange Brew', 90))
          .addItem({name: 'Tyler'})
      // same as
      //library: library
    }
  },*/
  props: {
    collection: {type: LibraryCollection}
  },

  methods: {

      }
}
</script>

<template>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in collection">
      <library-item :item="item"
                    @delete-item="collection.removeItem(item)"
                    :remove-function="item => collection.removeItem(item)"/>
    </div>
  </div>
</template>

<style scoped>

</style>