module.exports = function getZerosCount(number, base) {
  var s=[], v=[];
  var i=2;

var kl=[];
  while (i<=base){
    var kol=0;
    if (base%i==0){
      s.push(i);
      while (base%i==0){
        base=base/i;
        kol=kol+1;
      }
      kl.push(kol);
    } 
    i++;
    
  }
  
console.log(s);
console.log(kl);
  for (var j=0; j<s.length; j++){
    var zero=0, k=1;
    while (number/Math.pow(s[j],k)>=1){
      zero=zero+Math.round((number-number%Math.pow(s[j],k))/Math.pow(s[j],k));
      k++;
    }
    v.push(zero);
  }
  console.log(v);

  var l=[];
  for (i=0; i<v.length; i++){
    l.push(Math.floor(v[i]/kl[i]));
  }

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  
  
  
  l.sort(compareNumeric);

 

  var zeros=l[0];
  return zeros;
}