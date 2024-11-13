<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
import LibraryCollection from "./models/LibraryCollection";
import axios from "axios";
import LSearch from "@/components/LSearch.vue";
import LibraryCollectionFactory from "@/models/LibraryCollectionFactory.js";
export default {
  components: {
    LSearch,
    LibraryItemList,
  },

  data(){
    return {

      searching: true,
      searchTerm: 'a',
      searchResults: new LibraryCollection(),
      currentCollection: new LibraryCollection()
    }
  },

  // methods: usually "events" triggered by v-on:
  methods: {
    searchBooks() {
      // prepare and perform search

      debugger;
      if(this.searchTerm){
        // clear results
        this.searchResults = new LibraryCollection();

        // display message
        this.searching = true;

        // build request arguments
        let url = 'https://itunes.apple.com/search';
        let config = {
          params: {
            term: this.searchTerm,
            limit:24,
          },

        };

        // execute ajax request using promises
        // TODO: perform Ajax request
        axios.get(url,config)
            .then(response =>{
              //with factory
              this.searchResults = LibraryCollectionFactory.CreateFromItunes(response.data.results)
              console.log(response.data)
              this.currentCollection = this.searchResults
            })
            .catch(error => {

            console.log(error)
            })
            . finally(() => {
              // remove the loading screen
              this.searching = false;


              // redirect to the store page

            })

      }
    }
  },
  // computed: values that are updated and cached if dependencies change
  computed: {

  },

  //mounted:  called after the instance has been mounted,
  mounted: function() {
    this.searchBooks()

  },
}
</script>

<template>
<!--  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>

    <LSearch ></LSearch>
  </nav>-->

  <nav class="navbar bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
      <form @submit.prevent="searchBooks()" class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" v-model="searchTerm">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div class="container-fluid mt-3">
    <library-item-list :collection="currentCollection"></library-item-list>
  </div>
</template>

<style scoped>

</style>
