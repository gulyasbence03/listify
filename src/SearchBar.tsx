import {useState} from 'react'
import "./SearchBar.less"

export function SearchBar() {
    const [searched, setSearched] = useState ("");

    return (
        <div className='center' >

          <input className='search_input'
            type="text"
            value={searched}
            placeholder='Search for an Artist or Song...'
            onChange={(e) => setSearched(e.target.value)}
            onKeyDown={(event) => {
                    if (event.key === "Enter" && searched.trim() != ""){
                        console.log(searched.trim())
                    }
                }
            }
          />
        </div>
    );
}