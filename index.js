class Driver {
  constructor(name,startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    //returns an integer with the number of blocks travelled
    //let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
    
    //you have to find out how many blocks in streets(vertical) and how many blocks in ave's(horizontal) and add them together
    //you have to get the beginningLocation and end location for the route
    //you have to pull out the horz & vert for both beginning and ending
    // for the vertical subtract gives distance = vertical distance
    // for the horizontal use the array and test the index difference = horizontal distance
    // add vertical and horizontal and return

  }
}
