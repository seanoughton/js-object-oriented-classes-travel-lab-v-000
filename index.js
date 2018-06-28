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
    //let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '34'})

    // for the horizontal use the array and test the index difference = horizontal distance
    let horizontal = 0;
    if (this.beginningLocation.horizontal === this.endingLocation.horizontal) {
      horizontal = 0;
    } else {
      let startAve = eastWest.indexOf(this.beginningLocation.horizontal);
      let endAve = eastWest.indexOf(this.endingLocation.horizontal);;
      horizontal = endAve - startAve;
    };

    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;

    let distance = vertical + horizontal;
    return distance
  }
}
