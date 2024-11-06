function jio(x) {
  if (x > 0 && x % 2 == 0) {
    console.log("even no");
  } else if (x > 0 && x % 2 != 0) {
    console.log("odd no");
  } else {
    console.log("invaild no");
  }
}
jio(-6);//invaild no

function jio1(y){
  var b=""
    for(i=y.length-1;i>=0;i--){
    b=b+y[i]
}if (y == b) {
  console.log("is a palindroma");
} else {
  console.log("not a palindroma");
}
} 
jio1("mom")
jio1("daddy")
jio1("sis")
function jio2(a,b,c){
if(a>b&&a>c){
  console.log(  `${a} is greater`);
  
}else if(b>a&&b>c){
  console.log(`${b} is greater`);
  
}else {console.log(`${c} is greater`);
}
}
jio2(89,90,1000)
jio2(89,99,877)
    

    

