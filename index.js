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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let horizontal = 0;
    let startAve = eastWest.indexOf(this.beginningLocation.horizontal);
    let endAve = eastWest.indexOf(this.endingLocation.horizontal);

    if (startAve === endAve) {
      horizontal = 0;
    } else {
      horizontal = endAve - startAve;
    };

    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;

    return vertical + horizontal;
  }

//returns the number of minutes estimated for the trip. The estimated time depends on the distance in blocks and whether the trip is occurring during peak hours or off peak hours. During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.
  estimatedTime(peak) {
    if (peak === true) {

    } else {

    }// peak hour
    return minutes
  };

}
