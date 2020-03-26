function DisplayUI(data)
{
     
    data.photo.forEach(img => {
       
        let imgElement=document.createElement('img');       

        imgElement.setAttribute('src',getImgUrl(img,'q'));

        imgElement.addEventListener('click', () =>
        {

        });

        document.querySelector('#searchResult').appendChild(imgElement);
      });
}

function getImgUrl(imageObject,size)
{
   let imgUrl= `https://farm${imageObject.farm}.staticflickr.com/${imageObject.server}/${imageObject.id}_${imageObject.secret}_${size}.jpg`
   
  return imgUrl;
}
