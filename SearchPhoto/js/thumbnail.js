 
const lightBoxContainer = document.querySelector(".lightBoxContainer");
const lightBoxImage = document.querySelector(".originalImage");

export  async function DisplayUI(data)
{
  //clear the result
  let searchResultContainer = document.getElementById("searchResult");
  searchResultContainer.innerHTML = '';
    
    data.photo.forEach(img => {
               
      let divElem = document.createElement('div')                
      let imgElement=document.createElement('img');
      imgElement.setAttribute('src',getImgUrl(img,'q'));
      imgElement.addEventListener('click', () =>
      {
          showOriginal(img);
      });
      divElem.appendChild(imgElement); 
      searchResult.appendChild(divElem);      
  });
   
}
export function openLightBox(){   
  lightBoxContainer.classList.toggle("openimage");
}

function getImgUrl(imageObject,size)
{
   let imgUrl= `https://farm${imageObject.farm}.staticflickr.com/${imageObject.server}/${imageObject.id}_${imageObject.secret}_${size}.jpg`
   
  return imgUrl;
}

//Show Original from the image object
function showOriginal(imageObject)
{
  
  //Get the image URL with different size and set with SRC. Or c
  lightBoxImage.src = getImgUrl(imageObject,'z');
  lightBoxContainer.classList.toggle("openimage");     
    
}
lightBoxContainer.addEventListener("click", function(event){
  
  if(event.target !== lightBoxImage){
    openLightBox();
  }
})
