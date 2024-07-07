let hrs=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

let Hours=[1,2,3,4,5,6,7,8,9,10,11,12]


setInterval(()=>{
    let currentTime=new Date();

hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
min.innerHTML=(currentTime.getMinutes()<10)?'0'+currentTime.getMinutes():currentTime.getMinutes();
sec.innerHTML=(currentTime.getSeconds()<10)?'0'+currentTime.getSeconds():currentTime.getSeconds();

},1000)
