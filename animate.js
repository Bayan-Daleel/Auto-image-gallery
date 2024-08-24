const imgcontainerElm = document.querySelector(".img-container");
const btnElm= document.querySelector(".btn");
 const counterImg=10;
btnElm.addEventListener("click",()=>{
    for(let i=0; i<counterImg;i++){
    const imgElement=document.createElement("img");
    imgElement.src=`https://picsum.photos/300?random=
        ${Math.floor(Math.random()*2000)}`;
imgcontainerElm.appendChild(imgElement);
    }

});

