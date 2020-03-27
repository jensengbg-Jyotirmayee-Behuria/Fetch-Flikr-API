export async function DisplayUI(data)
{
     
    data.photo.forEach(img => {
       
        let imgElement=document.createElement('img');       

        imgElement.setAttribute('src',getImgUrl(img,'q'));

        imgElement.addEventListener('click', () =>
        {
            showOriginal(img);
        });

        document.querySelector('#searchResult').appendChild(imgElement);
      });
}

function showOriginal(imageObject)
{

    document.querySelector('#largeImage').innerHTML='';
    
    let imgElement=document.createElement('img');       

    imgElement.setAttribute('src',getImgUrl(imageObject,'z'));

    document.querySelector('#largeImage').appendChild(imgElement);

    
}

function getImgUrl(imageObject,size)
{
   let imgUrl= `https://farm${imageObject.farm}.staticflickr.com/${imageObject.server}/${imageObject.id}_${imageObject.secret}_${size}.jpg`
   
  return imgUrl;
}
