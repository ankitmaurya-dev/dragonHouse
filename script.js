let image = document.getElementById("corousel");
let logo = document.getElementById("logo");
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e0d49a341amsh79b3ed297818f3ap1396e3jsn78e4da6ac3d0',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};
fetch(url,options).then(req=>
     req.json()
).then(data=>{
    console.log(data.d);
    logo.src= data.d[0].i.imageUrl;
    let a= 1;
    let demo = () =>{
        image.style.backgroundImage= `url(${data.d[a].i.imageUrl})`;
        image.style.height= "500px";
        document.getElementById("corouselTitle").innerText = data.d[a].l;
        document.getElementById("s").innerText = data.d[a].s;
        document.getElementById("corouselPoster").src = data.d[a].i.imageUrl;
        a++;
        if(a==5){
            a+=1;
        }
        if (a == data.d.length){
            a=1;
        }
        else if(data.d[a].i==null){
            a+=1;
        }
    }
    window.setInterval(demo,3000)
    let j=1;
    while(j<8){
        let div=
        `<div class="movieItem">
        <div class="rDate">
            <h1>Year : ${data.d[j].y}</h1>
        </div>

        <div class="poster">
            <img src="${data.d[j].i.imageUrl}" alt="" srcset="">
        </div>
        <div class="postTitle">
            <p>${data.d[j].l}</p>
        </div>
    </div>`
    j++;
    if(data.d[j].i==null){
        j+=1;
    }
    document.getElementById("movieContainer").insertAdjacentHTML("afterend",div)
    }

}

);
