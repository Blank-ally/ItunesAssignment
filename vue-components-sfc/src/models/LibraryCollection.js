import LibraryItem from './LibraryItem';
export default function LibraryCollection(arr){
    arr = arr ?? [];

    arr.addItem = function(item){
        // make sure everything in this collection is a library item
        this.push(new LibraryItem(item));

        // ALLOWS CHAINING!!!
        return this;
    }

    arr.removeItem = function(item){
        // this is not ideal... IDs would be better
        this.splice(arr.findIndex(media => media.title === item.title), 1);
    }
    arr.contains = function(item){
        return this._findItem(item) >= 0;
    }
    arr._findItem = function (publication) {
        return this.arr.findIndex(function (item) {
            return item.id === publication.id;
        });
    }
    return arr;
    //arr.filter = null;


};

// or
// export default LibraryCollection;