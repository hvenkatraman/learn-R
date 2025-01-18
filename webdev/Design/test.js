//console.log("Welcome");
function rng(n)
{
    //rng --> RandomNumberGenerator
    RndmNmbrGnrtd=Math.random();//always less than 1
    //return(RndmNmbrGnrtd);
    FlrRndmNmbrGnrtd=Math.floor((RndmNmbrGnrtd)*n)
    return (FlrRndmNmbrGnrtd)
    
  //  return(Math.random();
  //  return(Math.random());

}
function rcgv(){

  // Random RGB color generator value which is (0-256,0-256,0-256) used as ex: rgb(56,234,146))

    return `${Rrng},${Grng},${Brng}`
    
    }  
for(let n=1;n<=5 ;n++){
   

    var Rrng=rng(256);
    var Grng=rng(256);
    var Brng=rng(256);
    var rnumber=rcgv();
    
//  var rcolor= document.getElementById(h2).style=(Rrng,Grng,Brng);
    
    console.log("Welcome");
// document.write(`<h2 align = "center" style = "color:rgb(${Rrng},${Grng},${Brng})">Welcome</h2> ${rnumber}`);
  document.write(`<h2 align = "center" style = "color:rgb(${rcgv()})">Welcome</h2> ${rnumber}`);

}

