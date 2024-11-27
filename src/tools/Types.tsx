/**
 * Represents an artist with their basic information.
 *
 * @interface Artist
 * @property {string} id - The unique identifier for the artist.
 * @property {string} name - The name of the artist.
 * @property {string} images - The URL of the first image of the artist.
 */
export interface Artist {
  id: string;
  name: string;
  images: string; // URL of the first image
}

/**
 * Represents a music track with relevant details.
 *
 * @interface Track
 * @property {string} id - The unique identifier for the track.
 * @property {string} name - The name of the track.
 * @property {number} duration_ms - The duration of the track in milliseconds.
 * @property {string[]} artists - An array of artist names associated with the track.
 * @property {string} image - The URL of the track's album image.
 * @property {string[]} artistIds - An array of artist IDs associated with the track.
 */
export interface Track {
  id: string;
  name: string;
  duration_ms: number;
  artists: Artist[];
  image: string;
  artistIds: string[];
}

/**
 * Represents an item selected by the user, either an artist or a track.
 *
 * @interface SelectedType
 * @property {string} id - The unique identifier for the selected item.
 * @property {string} type - The type of the selected item (e.g., "artist" or "track").
 * @property {string} [artists] - The name of the artist (optional, used for artists).
 * @property {string} title - The title of the selected item (e.g., track name or artist name).
 * @property {string} icon - The URL or path to the icon associated with the selected item.
 * @property {string[]} [artistsIds] - An array of artist IDs (optional, used for tracks).
 */
export interface SelectedType {
  id: string;
  type: string;
  artists?: string;
  title: string;
  icon: string;
  artistsIds?: string[];
}

/**
 * Represents an individual artist item in the search results.
 *
 * @interface ArtistItem
 * @property {string} id - The unique identifier for the artist.
 * @property {string} name - The name of the artist.
 * @property {Object[]} images - An array containing the artist's images.
 * @property {string} images[].url - The URL of the artist's image.
 */
export interface ArtistItem {
  id: string;
  name: string;
  images: [{ url: string }];
}

/**
 * Represents an individual track item in the search results.
 *
 * @interface TrackItem
 * @property {string} id - The unique identifier for the track.
 * @property {string} name - The name of the track.
 * @property {number} duration_ms - The duration of the track in milliseconds.
 * @property {Object[]} artists - An array of artists who performed the track.
 * @property {Object} artists[].name - The name of the artist.
 * @property {string} artists[].id - The unique identifier for the artist.
 * @property {Object} album - The album containing the track.
 * @property {Object[]} album.images - An array of images related to the album.
 * @property {string} album.images[].url - The URL of the album image.
 */
export interface TrackItem {
  id: string;
  name: string;
  duration_ms: number;
  artists: { name: string; id: string }[];
  album: {
    images: [{ url: string }];
  };
}
