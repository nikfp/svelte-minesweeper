export const ADJACENT_LOCATIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0], 
  [1, 1]
]

export function getAdjacentLocations(row: number, col: number, size: number) {

  const locations: number[][] = [];
  ADJACENT_LOCATIONS.forEach(el => {
    if(el[0] + row < 0 ) return;
    if(el[0] + row >= size ) return;
    if(el[1] + col < 0 ) return;
    if(el[1] + col >= size ) return;

    locations.push([el[0] + row, el[1] + col])
  })

  return locations;
}
