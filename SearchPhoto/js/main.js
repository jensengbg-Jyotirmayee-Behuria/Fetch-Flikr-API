// import module is not working in my browser
import { DisplayUI } from './thumbnail.js';

document.querySelector('button').addEventListener('click' , async () => {
    
    let searchText=document.querySelector('#searchText').value;  
    let size=document.querySelector('#size').value;      

    if(searchText=='' || searchText=='undefined')  
    {
        alert('No search text is supplied');
    }
    
    await searchAndDisplay(searchText,size);          
    
})

//Fetch from Flickr and Display
async function searchAndDisplay(searchText,size)
{    
    document.querySelector('#searchResult').innerHTML='';     
    //Set the API Url
    var apiUrl=setFlickerApiUrl(searchText,size);          
   
    await fetch(apiUrl)
     .then((response) => {         
         return response.json();
        })
        .then((data) => { 
            console.log(data.photos);
           DisplayUI(data.photos); 
             
    });     
}
 
//Set the Flickr API url
function setFlickerApiUrl(searchText,pageSize)
{
    const apiKey='19d3e6e0acfe9c438f368e2c2bab1c5d';
    const method='flickr.photos.search';
    const baseUrl='https://api.flickr.com/services/rest';   

    let flickrApiUrl=`${baseUrl}?method=${method}&api_key=${apiKey}&tags=${searchText}&per_page=${pageSize}&format=json&nojsoncallback=1`  //Fecth image
    console.log(flickrApiUrl);
    return flickrApiUrl;
}
 

