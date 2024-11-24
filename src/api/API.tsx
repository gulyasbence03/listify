const BASEURL = `https://api.spotify.com/v1`;

export const getArtists = async (searchQuery: string) => {

  const token = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        `${BASEURL}/search?q=${searchQuery}&type=artist&limit=8`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.json();
    }
    catch(error){
      console.log(error);
    }};


export const getTracks = async (searchQuery: string) => {

  const token = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        `${BASEURL}/search?q=${searchQuery}&type=track&limit=20`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.json();
    }
    catch(error){
      console.log(error);
    }};