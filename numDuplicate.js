 const arr=['ball','box','ball','ball','box']
 const price=[2,2,2,2,2]
 const weight=[1,2,1,1,3]
 const numDuplicates={};
 for(const element of arr){
     if(numDuplicates[element]){
         numDuplicates[element]  += 1;
     } else{
         numDuplicates[element]=1;
     }
 }
 console.log (numDuplicates[1]);