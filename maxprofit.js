const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Property{
noOfTheatre = 0 ; noOfPubs =0 ;noOfCommercialParks=0;
earning = 0;
remainingTime ; //time left after developing a property

constructor(noOfTheatre,noOfPubs,noOfCommercialParks,remainingTime){
  this.noOfTheatre = noOfTheatre;
  this.noOfPubs = noOfPubs;
  this.noOfCommercialParks = noOfCommercialParks;
  this.remainingTime = remainingTime;
  this.noOfTheatre = 0;
  this.noOfPubs = 0;
  this.noOfCommercialParks = 0;
  this.earning = 0;
}
 printOutput (){
  console.log(`T:${this.noOfTheatre}`+`P:${this.noOfPubs}`+`C:${this.noOfCommercialParks}`);
  console.log('Earning : '+this.earning);

}
}
class Theatre extends Property {
  
theaterTime = 5 ; //time taken
theatre=1500; //theatre earning
// theatreEarning = 0 

  constructor(theatreEarning,noOfTheatre,remainingTime){
    super(noOfTheatre,0,0)
    this.theatreEarning =theatreEarning;
    this.noOfTheatre = noOfTheatre;
    this.remainingTime = remainingTime;

  }
 
};
class Pub extends Property {
  pubTime = 4 ; //time taken
  pub=1000; //theatre earning
  // pubEarning = 0 
    constructor(pubEarning,noOfPubs,remainingTime){
      super(0,noOfPubs,0)
      this.pubEarning =pubEarning;
      this.noOfPubs = noOfPubs;
      this.remainingTime = remainingTime;
    }
   
  };
  class CommercialPark extends Property {
    commercialParkTime =10 ; //units of time taken to develop
    commercialPark=3000; //theatre earning
    // commercialParkEarning = 0 
      constructor(commercialParkEarning,noOfCommercialParks,remainingTime){
        super(0,0,noOfCommercialParks)
        this.commercialParkEarning =commercialParkEarning;
        this.noOfCommercialParks = noOfCommercialParks;
        this.remainingTime = remainingTime;
      }
      // printOutput (){
      //   console.log(`T:${0}`+`P:${0}`+`C:${this.noOfCommercialParks}`);
      //    console.log('Earning:'+this.commercialParkEarning);

      
      // }
    };
const theatre = new Theatre(0,0,0);
const pub = new Pub(0,0,0);
const commercialPark = new CommercialPark(0,0,0);
rl.question('Input time units : ', function (inputUnits) {

   // check if theatre can be developed
    if(inputUnits > theatre.theaterTime){
      theatre.noOfTheatre = ~~(inputUnits/theatre.theaterTime);
      theatre.remainingTime = inputUnits % theatre.theaterTime
      theatre.earning = theatre.remainingTime * (theatre.theatre*theatre.noOfTheatre);
    }
    //check if pub can be developed
    if(inputUnits > pub.pubTime){
      pub.noOfPubs = ~~(inputUnits/pub.pubTime);
      pub.remainingTime = inputUnits % pub.pubTime
      pub.earning = pub.remainingTime * (pub.pub*pub.noOfPubs);
    }
    //check if commercial park can be developed
    if(inputUnits > commercialPark.commercialParkTime){
      commercialPark.noOfCommercialParks = ~~(inputUnits/commercialPark.commercialParkTime);
      commercialPark.remainingTime = inputUnits % commercialPark.commercialParkTime
      commercialPark.earning = commercialPark.remainingTime * (commercialPark.commercialPark*commercialPark.noOfCommercialParks);
    }
    // printing results with max profit
    if(theatre.earning > pub.earning  && theatre.earning > commercialPark.earning){
    theatre.printOutput(); //theatre is max
  }
    else if (pub.earning > theatre.earning && pub.earning > commercialPark.earning) 
    pub.printOutput(); // pub is max

    else if( commercialPark.earning > theatre.earning && commercialPark.earning> pub.earning)
    commercialPark.printOutput()

    // theatre and pub are equal
    else if(theatre.earning === pub.earning){
      theatre.printOutput()
      pub.printOutput()
    }
    // if theatre and commercial park are equal
    else if(theatre.earning === commercialPark.earning){
      theatre.printOutput()
      commercialPark.printOutput()
    }
    // commercial park and pub's earning are equal
    else if(pub.earning === commercialPark.earning){
      pub.printOutput()
      commercialPark.printOutput()
    }

});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});
