export interface Artist {
    id: string;
    name: string;
    images: string; // URL of the first image
  }
  
  export interface Track{
    id : string;
    name: string;
    duration_ms: number;
    artists: string[];
    image: string;
    artistIds: string[];
  }
  
  export interface SelectedType{
    id: string;
    type: string;
    artists?: string;
    title: string;
    icon:string;
    artistsIds?: string[];
  }