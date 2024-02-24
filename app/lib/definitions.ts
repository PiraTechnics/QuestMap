export type Marker = {
  id: string;
  type: string; //will change this to a specific chosen 'type' of marker later
  user: string; //will change to user obj later
  coordinates: Coordinate;
  map_id: string; //the id of the map this belongs to
  title: string;
  details: string; //will change this to an article object later
};

export type Coordinate = {
  x: number;
  y: number;
};
