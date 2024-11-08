const button= document.querySelector(".generat-button");
const memeTitle=document.querySelector(".meme-title");
const memeImg=document.querySelector(".meme-img");
const memeAuthor=document.querySelector(".meme-author")
button.addEventListener("click",()=>{
  generatMeme()
})

 async function generatMeme(){
   let response=await fetch("https://meme-api.com/gimme/wholesomememes")
    let data = await response.json()
    const { author, title, url}=data
    memeImg.src=url
    memeTitle.innerText=title
        memeAuthor.innerText=`Meme By ${author}`
    
 }

 generatMeme()