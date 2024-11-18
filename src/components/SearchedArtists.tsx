import "./SearchedArtists.less"
//import { useState, useEffect } from "react";
import reactLogo from '../assets/react.svg'
import { useState } from "react";

interface Artist {
    id: string;
    name: string;
    images: string; // URL of the first image
  }

  export function SearchedArtists({ artistsSearched }: { artistsSearched: Artist[] }) {
    return (
      <div className="artist_container">
        <h2>Artists</h2>
        <div className='artists_row'>
          {artistsSearched.map((artist: Artist) => (
            <div className="one_artist" key={artist.id}>
              <img src={artist.images} alt={artist.name} />
              <h3>{artist.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }