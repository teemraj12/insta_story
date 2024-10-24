var Array=[{
    dp:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",stories:"https://media.istockphoto.com/id/1486039650/photo/humorous-christmas-portrait-of-young-boy-pulling-a-face.webp?b=1&s=170667a&w=0&k=20&c=DmlaranGusyp4myt3gj3EQim0J2CQX2ly0iazrqMoP0="
},{
    dp:"https://images.unsplash.com/photo-1504203772830-87fba72385ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww",stories:"https://media.istockphoto.com/id/1499256714/photo/closeup-black-man-eating-burger-indoors-and-looking-at-camera-happily.webp?b=1&s=170667a&w=0&k=20&c=aLQ3SOOYsKpGAwpVo_M0WbTy-C90aO-MlHY95NP8enk="
},{
    dp:"https://media.istockphoto.com/id/1031376168/photo/multi-ethnic-group-of-kids-lying-on-each-other-in-a-park.webp?b=1&s=170667a&w=0&k=20&c=M0jyJj7ktv0Z4ebsSCS_YODzsRqCKPL2dl1XjExYVOo=",stories:"https://plus.unsplash.com/premium_photo-1682147474777-90dc55cdbc67?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxhc2h8ZW58MHx8MHx8fDA%3D"
},{
    dp:"https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",stories:"https://media.istockphoto.com/id/1310139075/photo/newborn-baby-girl-sleeps-in-a-white-round-basket-covered-with-fur-blanket-white-background.webp?b=1&s=170667a&w=0&k=20&c=RRGoj9Sohc6aUMXHK7wfavy3tlcBnVPdaXBrkGxprJU="
}]
var soya=document.querySelector(".sory");
var clutter="";
Array.forEach(function(elm,idx){
clutter+=`<div class="stories">
<img id="${idx}" src="${elm.dp}" alt="">
</div>`
    
})
soya.innerHTML=clutter;
soya.addEventListener("click",function(dets){
                                 
document.querySelector("#full-screen").style.display="block"
// document.querySelector("#full-screen").style.backgroundImage=`url(${Array[dets.target.id].story})`
document.querySelector("#full-screen").style.backgroundImage=`url(${Array[dets.target.id].stories})`;

setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"
},1000)
});