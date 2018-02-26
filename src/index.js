module.exports = function getZerosCount(number, base) {
  var s=[], v=[];
  var i=2;
  while (i<=base){
    while (base>1) {
      if (base%i==0){
        s.push(i);
        base=base/i;
      }else {i++;}
    }
  }
console.log(s);


for (var j=0; j<s.length; j++){
  var zero=0, k=1;
  while (number/Math.pow(s[j],k)>=1){
    zero=zero+(number-number%Math.pow(s[j],k))/Math.pow(s[j],k);
    k++;
  }
  v.push(zero);
}
console.log(v);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}



v.sort(compareNumeric);

var zeros=v[0];
return zeros;


}

