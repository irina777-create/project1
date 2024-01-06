export {moskArray}from'./main.js';
const template=document.querySelector('#picture');
const sectionPhotos=document.querySelector('.pictures');
function letPhoto(count){
  const cloneTemplateContent=template.textContent.cloneNode(true);
  const image=cloneTemplateContent.querySelector('img');
  image.src=`${moskArray[count].url}`;
  sectionPhotos.appendChild(image);
}
function getSomeImage(){
  let count=0;
  return function(quantity){
    if(quantity){
      for(leti=0;i<quantity;i++){
        letPhoto(c;ount)
      }
      return;
    }
    letPhoto(count);
    return count++;
  }

}
let someImage=grtsomeImage();
function getAllImage (){
  function(e){
    moskArray.map
    const cloneTemplateContent=template.textContent.cloneNode(true);
    const image=cloneTemplateContent.querySelector('img');
    image.src=`${e.url}`;
    sectionPhotos.appendChild(image);

   }
}
