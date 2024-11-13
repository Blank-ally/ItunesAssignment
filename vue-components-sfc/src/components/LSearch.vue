<script>
import {Book} from "@/models/Media.js";

export default {
  name: "LSearch",
  data: function(){
        return {

            keyword: '',
        }
    },
    props: {
        onSearch: Function
    },
    methods: {
        search(){
           
            this.onSearch(this.keyword);
        }
    },
}
</script>

<template>
<form @submit.prevent="search" class="row g-3 p-5 justify-content-end">

<div class="col-6">
    <input v-model="keyword" type="search" class="form-control"  placeholder="search">
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Search</button>
</div>
</form>
</template>

<style scoped lang="scss">

</style>