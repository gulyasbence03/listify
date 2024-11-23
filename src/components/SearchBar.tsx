import {useEffect, useState} from 'react'
import "./SearchBar.less"
import { getArtists, getTracks } from '../api/API';
import { Dispatch, SetStateAction } from "react";
import reactLogo from '../assets/react.svg'

interface Artist {
  id: string;
  name: string;
  images: string; // URL of the first image
}

interface Track{
    id: string;
    name: string;
    duration_ms: number;
    artists: string[];
    image: string;
}


interface SearchBarProps {
  setArtistsSearched: (artists: Artist[]) => void,
  setTracksSearched: (tracks: Track[]) => void
}

export function SearchBar({ setArtistsSearched, setTracksSearched } : SearchBarProps) {

    const [searched, setSearched] = useState ("");

    return (
        <div className='center' >

          <input className='search_input'
            type="text"
            value={searched}
            placeholder='Search for an Artist or Song...'
            onChange={(e) => setSearched(e.target.value)}
            onKeyDown={async (event) => {
                    if (event.key === "Enter" && searched.trim() != ""){
                      // Search artists
                      const responseArtists = await getArtists(searched.trim());
                      console.log(responseArtists);
                      setArtistsSearched(
                        responseArtists.artists.items.map(
                          (artist: {
                            id: string,
                            name: string,
                            images: [{
                              url: string
                            }] 
                          }) => {
                            
                            return {
                              id: artist.id,
                              name: artist.name,
                              images: artist.images?.[0]?.url || reactLogo
                            };
                          }
                      )
                    );
                    // Search tracks
                    const responseTracks = await getTracks(searched.trim());
                    console.log(responseTracks);
                    setTracksSearched(
                      responseTracks.tracks.items.map(
                        (track: {
                          id : string,
                          name: string,
                          duration_ms: number,
                          artists: [{
                            name: string
                          }],
                          album: {
                            images: [{
                              url: string
                            }]
                          }
                        }) => {
                          return {
                            id: track.id,
                            name: track.name,
                            duration_ms: track.duration_ms,
                            artists: track.artists?.map((artist) => artist.name) || [],
                            image: track.album.images?.[0]?.url || reactLogo
                          }
                        }
                      )
                    );
                  }
                }
            }
          />
        </div>
    );
}