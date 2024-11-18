import {useEffect, useState} from 'react'
import "./SearchBar.less"
import { getArtists } from '../api/API';
import { Dispatch, SetStateAction } from "react";
import reactLogo from '../assets/react.svg'

interface Artist {
  id: string;
  name: string;
  images: string; // URL of the first image
}

interface SearchBarProps {
  setArtistsSearched: (artists: Artist[]) => void;
}

export function SearchBar({ setArtistsSearched } : SearchBarProps) {

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
                      const response = await getArtists(searched.trim());
                      console.log(response);
                      setArtistsSearched(
                        response.artists.items.map(
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
                              images: (artist.images.length>0)?artist.images[0].url: reactLogo
                            };
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