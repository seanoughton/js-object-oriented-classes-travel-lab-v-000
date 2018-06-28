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


    //you have to get the beginningLocation and end location for the route

    // for the horizontal use the array and test the index difference = horizontal distance
    // add vertical and horizontal and return
    vertical =this.beginningLocation.vertical - this.endingLocation.vertical;
    horizontal =
    distance = vertical + horizontal;
    return distance
  }
}
