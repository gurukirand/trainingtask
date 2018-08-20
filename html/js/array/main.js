// author:Gurukiran D
// Date: 09-08-18
var arr=['hello', 'world', 'specbee','guru'];
var arr1=['hello', 'world'];
var arr3=[10,20,25,'guru'];
var arr4=[40,50,60];
var arr6=[1,2,3,[3,4,5]];
var arr7=['hello', 'world', 'specbee','guru','house','gurukiran'];
if (!Array.prototype.last) {
    Array.prototype.last = function() {
      return this[this.length-1];
    }
  }
// fuction to display array length
function array_length()
{
    var alen=arr.length;            
    document.getElementById('alen').innerHTML=alen;
        
}
// fuction to display array length
function array_proto()
{
      document.getElementById('aproto').innerHTML=arr.last(); 
      document.getElementById('aproto1').innerHTML=arr1.last(); 
}
// array-from
function array_from()
{          
    document.getElementById('afrom').innerHTML=Array.from('guru');
    document.getElementById('afrom1').innerHTML=Array.from([0,1,2],x=>x+1);
}
// fuction to display isarray
function is_array()
{          
    document.getElementById('isarray').innerHTML=Array.isArray(arr);
    document.getElementById('isarray1').innerHTML=Array.isArray(10)
}
// fuction to display arrayof
function array_of()
{          
    document.getElementById('arrayof').innerHTML=Array.of(1,2,3);
}
// function to concate arrays
function array_concat()
{          
    document.getElementById('arraycon').innerHTML=arr.concat(arr1);
}
// copyWithin
function copy_within()
{          
    document.getElementById('copyw').innerHTML=arr.copyWithin(1,2,3);
    document.getElementById('copyw1').innerHTML=arr.copyWithin(0,3)
}
// entries
function entr()
{    
    var iter=arr.entries();
    document.getElementById('entr').innerHTML=iter.next().value;
}
// every
function evry()
{    
    function isint(guru)
    {
      return guru>30;
    }
    document.getElementById('evry').innerHTML=arr3.every(isint);
    document.getElementById('evry1').innerHTML=arr4.every(isint);
}
// fill
function arr_fill()
{    
    document.getElementById('fill').innerHTML=arr.fill(2,2);
}
// filter
function arr_filt()
{     function isbig(guru)
    {
      return guru>30;
    }
    document.getElementById('filt').innerHTML=arr3.filter(isbig);
    document.getElementById('filt1').innerHTML=arr4.filter(isbig);
}
// find
function arr_find()
{     function isbig(guru)
    {
      return guru>10;
    }
    document.getElementById('find').innerHTML=arr3.find(isbig);
}

// find index
function arr_findi()
{     function isbig(guru)
    {
      return guru>10;
    }
    document.getElementById('findi').innerHTML=arr3.findIndex(isbig);
}
// flat
function arr_findi()
{   
    document.getElementById('findt').innerHTML=arr5.flat(2);
}

// for each
function arr_fore()
{   function disp(ele)
    {
        document.getElementById('fore').innerHTML+=ele;
        console.log(ele)
    }
    arr.forEach(disp);
}

// includes
function arr_incld()
{   
    document.getElementById('incld').innerHTML=arr.includes('guru');
}
// indexof
function arr_indexof()
{   
    document.getElementById('indof').innerHTML=arr.indexOf('guru',1);
}
// join
function arr_join()
{   
    document.getElementById('join').innerHTML=arr.join(' ');
}
// join
function arr_key()
{   
    var key=arr.keys();
    for(var ele of key)
    {
    document.getElementById('key').innerHTML+=ele;
}
}
// lastindexof
function arr_lastind()
{   
    document.getElementById('lastind').innerHTML=arr.lastIndexOf('guru');
}
// map
function arr_map()
{   
    document.getElementById('map').innerHTML=arr3.map(x=> x+x);
}
// pop
function arr_pop()
{   
    document.getElementById('pop').innerHTML=arr7.pop();
}
// push
function arr_push()
{   
    document.getElementById('push').innerHTML=arr7.push('gurukiran');
}
// reduce
function arr_reduce()
{   
    var sum=(guru,ele)=>guru+ele;
    document.getElementById('reduce').innerHTML=arr4.reduce(sum);
}
// reverse
function arr_reverse()
{   
    document.getElementById('reverse').innerHTML=arr.reverse();
}
// shift
function arr_shift()
{   
    document.getElementById('shift').innerHTML=arr.shift();
}
// slice
function arr_slice()
{   
    document.getElementById('slice').innerHTML=arr.slice(1,4);
}
// some
function arr_some()
{   
    document.getElementById('some').innerHTML=arr7.some(x=> x==="gurukiran");
}
// splice
function arr_splice()
{   
    arr7.splice(1,0,'guru');
    document.getElementById('splice').innerHTML=arr7;
}
function arr_tostring()
{   
    document.getElementById('tos').innerHTML=arr.toString();
}
function arr_unshift()
{   
    document.getElementById('unshift').innerHTML=arr.unshift('guru','kiran');
}
function arr_values()
{   

    document.getElementById('values').innerHTML=arr.values();
}

