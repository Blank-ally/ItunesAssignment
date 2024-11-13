function Book(title, pages){
    this.title = title ?? 0;
    this.pages = pages ?? 0;
}
Book.type = 'Book';

function Song(){
   /* this.title = title ?? 0;
    this.pages = pages ?? 0;*/
    this.artistId = ''
    this.artistName = ''
    this.artistViewUrl = ''
    this.artworkUrl30 = ' '
    this.artworkUrl60 = ''
    this.artworkUrl100 = ''
    this.collectionCensoredName = ''
    this.collectionExplicitness = ''
    this.collectionId = ''
    this.collectionName = ''
    this.collectionPrice = ''
    this.collectionViewUrl = ''
    this.country = ' '
    this.currency = ''
    this.discCount = ''
    this.discNumber = ''
    this.isStreamable = ' '
    this.kind = ' '
    this .previewUrl = ''
    this.primaryGenreName = ''
    this.releaseDate = ''
    this.trackCensoredName = ''
    this.trackCount = ''
    this.trackExplicitness = ''
    this.trackId = ''
    this.trackName = ''
    this.trackNumber = ''
    this.trackPrice = ''
    this.trackTimeMillis = ''
    this.trackViewUrl = ''
    this.wrapperType = ''
}
Song.type = 'Song';

function AudioBook(){
/*    this.title = title ?? 0;
    this.pages = pages ?? 0;*/
    this.artistId =''
    this.artistName= ''
    this.artistViewUrl= ''
    this.artworkUrl60 = ''
    this.artworkUrl100 = ''
    this.collectionCensoredName = ''
    this.collectionExplicitness = ''
    this.collectionId = ''
    this.collectionName = ''
    this.collectionPrice = ''
    this.collectionViewUrl = ''
    this.country = ''
    this.currency = ''
    this.description = ''
    this.previewUrl = ''
    this.primaryGenreName = ''
    this.releaseDate = ''
    this.trackCount = ''
    this.wrapperType = ''
}
AudioBook.type = 'AudioBook';

function TVShow(){
/*    this.title = title ?? 0;
    this.pages = pages ?? 0;*/

    this.artistId =''
    this.artistName= ''
    this.artistViewUrl= ''
    this.artworkUrl60 = ''
    this.artworkUrl100 = ''
    this.collectionCensoredName = ''
    this.collectionExplicitness = ''
    this.collectionHdPrice = ''
    this.collectionId = ''
    this.collectionName = ''
    this.collectionPrice = ''
    this.collectionViewUrl = ''
    this.contentAdvisoryRating = ''
    this.country = ''
    this.currency = ''
    this.discCount = ' '
    this.discNumber = ''
    this.kind = ''
    this.longDescription = ''
    this.previewUrl = ' '
    this.primaryGenreName = ''
    this.releaseDate = ''
    this.shortDescription = ''
    this.trackCensoredName = ''
    this.trackCount = ''
    this.trackExplicitness = ''
    this.trackHdPrice = ''
    this.trackId = ''
    this.trackNumber = ''
    this.trackPrice = ''
    this.trackTimeMillis = ''
    this.trackViewUrl = ''
    this.wrapperType = ''

}
TVShow.type = 'TVShow';


function PodCast(){
/*    this.title = title ?? 0;
    this.pages = pages ?? 0;*/

    this.artistName = ''
    this.artworkUrl30 = ''
    this.artworkUrl60 = ''
    this.artworkUrl100 =''
     this.artworkUrl600 =''
   this.collectionCensoredName = ''
    this.collectionExplicitness = ''
   this.collectionHdPrice = ''
    this.collectionId =''
    this.collectionName = ''
   this.collectionPrice = ''
    this.collectionViewUrl = ''
    this.contentAdvisoryRating = ''
    this.country = ''
    this.currency = ''
    this.feedUrl = ''
    this.genreIds = []
    this.kind = ''
    this. primaryGenreName = ''
    this.releaseDate = ''
    this.trackCensoredName = ''
    this.trackCount = ''
    this.trackExplicitness =''
    this.trackId = ''
    this.trackName = ''
    this.trackPrice = ''
    this.trackTimeMillis = ''
    this.trackViewUrl = ''
    this.wrapperType = ''

}
PodCast.type = 'Podcast';



class Movie {
    static type = 'Movie';

/*    runtime = 0;
    constructor(title, runtime) {
        this.title = title ?? 0;
        this.runtime = runtime ?? 0;
    }*/


    artistName = ''
    artworkUrl30 = ''
artworkUrl60 = ''
artworkUrl100 = ''
 collectionArtistId = ''
 collectionArtistViewUrl = ' '
 collectionCensoredName = ''
 collectionExplicitness = ''
collectionHdPrice = ' '
 collectionId = ' '
collectionName = ' '
 collectionPrice = ''
collectionViewUrl= ' '
 contentAdvisoryRating = ''
countrycurrency = ''
discCount = ''
discNumber = ''
hasITunesExtras = ''
kind = ''
 longDescription = ''
previewUrl = ''
primaryGenreName = ''
releaseDate = ''
    shortDescription = ''
trackCensoredName = ''
 trackCount = ''
trackExplicitness = ''
trackHdPrice = ''
trackHdRentalPrice = ''
trackId = ''
trackName = ''
trackNumber = ''
trackPrice = ''
trackRentalPrice = ''
trackTimeMillis = ''
trackViewUrl = ''
wrapperType = ''

}

export {Book, Movie,AudioBook,TVShow,Song,PodCast}