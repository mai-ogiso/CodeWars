// Drone Fly-By(7kyu)
// Input flyBy('xxxxxx', '====T')
// Output ooooox

function flyBy(lamps, drone){
    let result = "";
    lamps.length <= drone.length ?
      result =  Array(lamps.length).fill("o").join("") :
      result =  Array(drone.length).fill("o").join("") + lamps.slice(drone.length);
    return result;
  }
  
  console.log(flyBy('xxxxxxxxxx', '==========T'))