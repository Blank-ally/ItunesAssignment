import {Book, Movie,AudioBook,TVShow,Song,PodCast} from "@/models/Media.js";
import LibraryCollection from "./LibraryCollection";


export default class LibraryCollectionFactory{

    static CreateFromItunes(Medias){
        const collection = new LibraryCollection();
        Medias.forEach(media =>{
            let newItem = false

            switch(media.wrapperType?.toLowerCase()){

                case "audiobook":
                newItem =  Object.assign(new AudioBook(),media)
             //   newItem.title = media.collectionName
                ;
                break;
                case"track":

                switch(media.kind.toLowerCase()){
                    case"song":
                    newItem =  Object.assign( new Song(),media);

                    break;
                    
                case"tv-episode":
                newItem = Object.assign(new TVShow(),media);
                break;

                case"feature-movie":
                newItem = Object.assign( new Movie(), media);

                break;
                
                case"podcast"
:
                newItem = Object.assign( new PodCast(),media);

                break;

                }
             break;


                default:
                    console.warn(media.wrapperType+' Not recongnized')
                    break;


            }
            if(newItem){
                collection.addItem(newItem);
            }
        });
  return collection;
    }

}


