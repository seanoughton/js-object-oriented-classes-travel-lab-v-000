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
    //returns an integer with the number of blocks travelled
    //let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    //n New York City, to travel East and West you cross avenues, and to travel North and South you cross streets. To calculate the distance of in streets, you can use subtraction (eg. 13th street to 10th street is three blocks). To calculate the distance of avenues travelled, you will need to know the names and order of avenues in New York City. You can use the following array to help with your calculation:
    //you have to find out how many blocks in streets(vertical) and how many blocks in ave's(horizontal) and add them together
  }
}
