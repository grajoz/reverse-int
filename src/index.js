module.exports = function reverse (n) {
  n=Math.abs(n);
  n=String(n);
  let arr2=[];
  let arr=n.split("");
  for (let i=0;i<arr.length;i++){
      arr2[arr.length-i]=arr[i];
  }
  n=arr2.join("");
  n=Number(n);
  return n
}
