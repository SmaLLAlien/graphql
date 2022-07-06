## HOW TO USE
1. clone teacher repository: ```git clone https://github.com/rolling-scopes-school/node-graphql-service.git```
2. run mongodb, create if needed database and collections
3. run teacher project using its readme from branch ```MAIN``` (don`t forget to change link to db)
4. clone this repository: ```git clone https://github.com/SmaLLAlien/graphql.git```
5. go to project directory: ```cd graphql```
6. checkout to dev branch: ```git checkout task-5```
7. run project: ```npm start```

Server is starting at 9000 port, but you can find and change it in .env file;

8. Open page on http://localhost:9000/graphql and click ```Query your server``` button
9. Wait till apollo will be loaded, and you can test api

> :warning: **Mutation allowed only for logged users.** To log in please use jwt Query, example you can find at the end of the API EXAMPLES in USER section

## API EXAMPLES
### GENRES
1. Get all Genres:
- no filters
```
  genres {
    id
    name
    description
    country
    year
  }
```
- with pagination and filtration
```
  genres(filter: {limit: 5, offset: 0, name: "name"}) {
    id
    name
    description
    country
    year
  }
```


2. Get Genre by id
```
genre(id: "62c039701ba913dbb50d4088") {
    id
    name
    description
    country
    year
  }
```
3. Create Genre
```
createGenre(genre: $createGenreGenre) {
    id
    name
    description
    year
  } 
```
4. Update Genre
```
updateGenre(genre: $genre) {
    id
    name
    description
    year
  }
```
5. Delete Genre
```
deleteGenre(id: "62c171227f006f54b2567bb5") {
    id
    deletedCount
  }
```
WHERE 
```
$createGenreGenre = {
    "name": "Some genre",
    "description":"some description",
    "country": "Ukraine",
    "year": 1920
  }
  
$genre = {
    "id": "62c039701ba913dbb50d4088",
    "name": "name",
    "description": "description",
    "country": "country",
    "year": 1970
  }
```

### BANDS
1. Get all Bands:
- no filters
```
  bands {
    id
    name
    origin
    website
    genres {
      id
      country
    }
    members {
      artist {
        id
        firstName
      }
      instrument
      years
    }
  }
```
- with pagination and filtration
```
  bands(filter: {limit: 5, offset: 0, name: "name"}) {
    id
    name
    origin
    website
    genres {
      id
      country
    }
    members {
      artist {
        id
        firstName
      }
      instrument
      years
    }
  }
```


2. Get Band by id
```
band(id: "62c47f6ed5f68534a24a50c4") {
    id
    name
    origin
    website
    genres {
      id
      country
    }
    members {
      artist {
        id
        firstName
      }
      instrument
      years
    }
  }
```
3. Create Band (Member is created as part of band and saved to band in database)
```
createBand(band: $newBand) {  
    id
    name
    origin
    members {
      artist {
        id
        firstName
      }
      instrument
    }
    genres {
      id
      name
    }
  }
```
4. Update Band
```
updateBand(band: $band) {
  id
  name
  origin
  website
  members {
    artist {
      id
      firstName
    }
    instrument
    years
  }
  genres {
    id
    country
    year
  }
}
```
5. Delete Band
```
deleteBand(id: "62c47f6ed5f68534a24a50c4") {
  deletedCount
  id
}
```
WHERE
```
$newBand = {
    "name": "nameBand6",
    "origin": "originBand6",
    "website": "websiteBand6",
    "members": [{
      "artist": "62c05aa21a217b4ba86f3657",
      "instrument": "new lalsals",
      "years": ["2022", "2211"]
    }],
    "genresIds": ["62c03c551ba913dbb50d409c"]
  }
  
$band = {
     "id": "62c048f6be8b2336b475d0cd",
     "name": "nameBand6",
     "origin": "originBand6",
     "website": "websiteBand6",
     "genresIds": ["62c03c551ba913dbb50d409c"],
     "members": [{
         "artist": "62c05aa21a217b4ba86f3657",
         "instrument": "new cool instrument",
         "years": ["2022", "3000"]
         }]
  }
```
### TRACKS
1. Get all TRACKS:
- no filters
```
  tracks {
    title
    album {
      id
      name
    }
    artists {
      id
      firstName
    }
    bands {
     id
     name 
    }
    duration
    released
    genres {
      id
      name
    }
  }
```
- with pagination and filtration
```
  tracks(filter: {limit: 5, offset: 0, title: "title2"}) {
    title
    album {
      id
      name
    }
    artists {
      id
      firstName
    }
    bands {
     id
     name 
    }
    duration
    released
    genres {
      id
      name
    }
  }
```


2. Get Track by id
```
track(id: "62c06de90826cbda668e5642") {
    title
    album {
      id
      name
    }
    artists {
      id
      firstName
    }
    bands {
     id
     name 
    }
    duration
    released
    genres {
      id
      name
    }
  }
```
3. Create Track
```
reateTrack(track: $track) {
  id
  title
  duration
  released
  album {
   id
   name 
  }
  genres {
    id
    name
  }
  bands {
    id
    name
  }
}
```
4. Update Track
```
updateTrack(track: $updateTrackTrack) {
  id
  title
  duration
  released
  album {
   id
   name 
  }
  genres {
    id
    name
  }
  bands {
    id
    name
  }
}
```
5. Delete Track
```
deleteTrack(id: "62c5cb82bd741891c74487f5") {
  id
  deletedCount
}
```
WHERE
```
  $$track =  {
        "title": "title",
        "albumId": "62c15a4e25f568f0c8e91651",
        "bandsIds": ["62c048dfbe8b2336b475d0cb"],
        "duration": 111,
        "released": 222,
        "genresIds": ["62c0397e1ba913dbb50d408c"]
  },
  $updateTrackTrack = {
        "id": "62c06de90826cbda668e5642",
        "title": "title2",
        "albumId": "62c15a4e25f568f0c8e91651",
        "bandsIds": ["62c048dfbe8b2336b475d0cb"],
        "artistsIds": ["62c05b261a217b4ba86f3659"],
        "duration": 1111,
        "released": 2221,
        "genresIds": ["62c0397e1ba913dbb50d408c"]
  },
```
### ARTISTS
1. Get all Artists:
- no filters
```
artists {
    id
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      id
      name
    }
    instruments
  }
```
- with pagination and filtration
```
  artists(filter: {limit: 5, offset: 0, firstName: "artist name"}) {
    id
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      id
      name
    }
    instruments
  }
```


2. Get Artist by id
```
  artist(id: "62c166d07901e649dc16dfcd") {
    id
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      id
      name
    }
    instruments
  }
```
3. Create Artist
```
createArtist(artist: $artist1) {
  id
  firstName
  secondName
  middleName
  birthDate
  birthPlace
  bands {
    id
    genres {
      id
      country
    }
  }
  country
}
```
4. Update Artist
```
updateArtist(artist: $artist2) {
  id
  firstName
  secondName
  middleName
  birthDate
  birthPlace
  bands {
    id
    genres {
      id
      country
    }
  }
  country
}
```
5. Delete Genre
```
deleteArtist(id: "62c5d011fa31300c774e5685") {
  id
  deletedCount
}
```
WHERE
```
$artist1 = {
     "firstName": "firstName artist7",
     "secondName": "secondName artist7",
     "middleName": "middleName artist7",
     "birthPlace": "birthPlace artist7",
     "country": "country artist7",
     "bandsIds": ["62c048f6be8b2336b475d0cd"],
     "instruments": ["artist7"],
  }
  
$artist2 = {
    "id": "62c5cfe2fa31300c774e5683",
     "firstName": "firstName artist8",
     "secondName": "secondName artist8",
     "middleName": "middleName artist8",
     "birthPlace": "birthPlace artist8",
     "country": "country artist8",
     "bandsIds": ["62c048f6be8b2336b475d0cd"],
     "instruments": ["artist8"],
  }
```
### ALBUMS
1. Get all Albums:
- no filters
```
  albums {
    name
    released
    artists {
      id
      firstName
    }
    genres {
      id
      country
    }
    bands {
      id
      name
    }
    tracks {
      id
      genres {
        country
      }
    }
  } 
```
- with pagination and filtration
```
albums(filter: {limit: 5, offset: 0, name: "name"}) {
    name
    released
    artists {
      id
      firstName
    }
    genres {
      id
      country
    }
    bands {
      id
      name
    }
    tracks {
      id
      genres {
        country
      }
    }
  } 
```


2. Get Album by id
```
album(id: "62c15a4e25f568f0c8e91651") {
   name
    released
    artists {
      id
      firstName
    }
    genres {
      id
      country
    }
    bands {
      id
      name
    }
    tracks {
      id
      genres {
        country
      }
    }
  } 
```
3. Create Album
```
createAlbum(album: $album) {
  id
  released
  name
  artists {
    id
    firstName
  }
  genres {
    id
    country
  }
  bands {
    id
    name
  }
  tracks {
    id
  }
} 
```
4. Update Genre
```
updateAlbum(album: $updateAlbum) {
  id
  name
  released
  artists {
    id
    firstName
  }
  genres {
    id
    country
  }
  bands {
    id
    name
  }
  tracks {
    id
  }
}
```
5. Delete Genre
```
deleteAlbum(id: "62c5d1fce8d18b5f833edf2c") {
  id
  deletedCount
}
```
WHERE
```
$album = {
        "name": "album name3",
        "released": 2024,
        "artistsIds": ["62c05aa21a217b4ba86f3657", "62c05b261a217b4ba86f3659"],
        "bandsIds": ["62c04864be8b2336b475d0c3"],
        "trackIds": ["62c06de90826cbda668e5642"],
        "genresIds": ["62c039701ba913dbb50d4088"]
  },
  
$updateAlbum = {
        "id": "62c15bc525f568f0c8e9165c",
        "name": "album name3",
        "released": 2024,
        "artistsIds": ["62c05aa21a217b4ba86f3657", "62c05b261a217b4ba86f3659"],
        "bandsIds": ["62c04864be8b2336b475d0c3"],
        "trackIds": ["62c06de90826cbda668e5642"],
        "genresIds": ["62c039701ba913dbb50d4088"]
  }
```
### FAVOURITES
#### ADD
1. Add genre to favourites
```
addGenreToFavourites(id: "62c039701ba913dbb50d4088") {
  id
  userId
  genres {
    id
    name
  }
}
```
2. Add artist to favourites
```
addArtistToFavourites(id: "62c05aa21a217b4ba86f3657") {
  id
  userId
  artists {
    id
    firstName
  }
}
```
3. Add band to favourites
```
addBandToFavourites(id: "62c04864be8b2336b475d0c3") {
  id
  userId
  bands {
    id
    name
  }
}
```
4. Add track to favourites
```
addTrackToFavourites(id: "62c06de90826cbda668e5642") {
  id
  userId
  tracks {
    id
    title
  }
}
```
#### REMOVE
1. Remove track from favourites
```
removeTrackToFavourites(id: "62c06de90826cbda668e5642") {
  id
  userId
  tracks {
    id
    title
  }
}
```
2. Remove genre from favourites
```
removeGenreToFavourites(id: "62c171227f006f54b2567bb5") {
  id
  userId
  genres {
    id
    name
  }
}
```
3. Remove bands from favourites
```
removeBandToFavourites(id: "62c04864be8b2336b475d0c3") {
  id
  userId
  bands {
    id
    name
  }
}
```
4. Remove artist from favourites
```
removeArtistToFavourites(id: "62c05aa21a217b4ba86f3657") {
  id
  userId
  artists {
    id
    firstName
  }
}
```
### USER
1. register
```
register(user: $user) {
  email
  id
}
```

2. login (returns jwt token)
```
jwt(email: "al@al.com", password: "12345678") {
    jwt
  }
```
WHERE
```
$user = {
    "firstName": "Al",
    "lastName": "Al",
    "email": "al@al.com",
    "password": "123456789"
  }
```
