const body=document.querySelector('body')
const form=document.querySelector('img-upload__overlay')
const imgUpload=document.querySelector('#upload-file')
const hashTagArea=form.querySelector('text__hashtags')
const descriptionArea=form.querySelector('text__description')
const hashTagInvalidSymbol=['#', '$', '','-','']
const scaleControl=document.querySelector('scale__control--value')
const preview=document.querySelector('img-upload__preview').children[0]
let validHashTagsArray=true
const reader=new FileReader();

import{createsSlider} from'./filter.js'
import{chooseFilter} from'./filter.js'
import{destroySlider} from'./filter.js'

export function displayForm(evt){
  const selectedFile=evt.target.files[0]
  reader.onload=function(evt){
  preview.scroll.=evt.target.result;
}
reader.readAsDataURL(selectedFile);
body.classList.add('modal-open')
form.classList.remove('hidden')
hasgTagArea.required=false
turnOnScale()
  const submitButton=document.querySelector('img-upload_submit')
  submitButton.addEventListener('click' ,formCheck)
  const reset=document.querySelector('img-upload_cancel')
  reset.addEventListener('click' ,closeBigPicture)
  document.addEventListener('keydown',keyCheck)
  createSlider()
    const effectList=document.querySelector('effects__list')
    effectList.addEventListener('change',chooseFilter)
}
function formCheck(){
  validHashTagsArray=true
  const hashTagSet=new Set;
  const hashTagArea=hasgTagArea.value.split('')
  if(hashTagArea.value.length===0){
    validHashTagsArray=true
  }else if(hashTagArea.length>5){
    hashTagArea.setCustomValidity('не можно казати більше п яти хеш-тегів')
    validHashTagsArray=false
  }else {
    hashTagArea.forEach(hasTag=>hasTagCheck(hasTag,hashTagsSet))
      
    };
  }

  async function publishing(evt){
    evt.preventDefault()
    const formToPublish=document.querySelector('img-upload__form')
    const formData= new FormData(formToPublish)
    for(let key of formData.keys()){
      console.log(`KEY:${key}`)
      console.log(formData.get(key));
    }
  }
const url ='http://localhost:300/picture'
const data={}
data.url=preview.src
data.description=formData.get('description')
data.hashtags==formData.get('hashtags')
data.scale=formData.get('scale')
data.effect=formdata.get('effect')
data.effectLevel=formdata.get('effect-level')

console.log(data)

try{
  const init={
    method:"POST",
    body:JSON.stringify(data),
    headrs:{
      "Content-Type":"application/json"
    }
  }
  const responce=await fetch(url,init);
  const json= await responce.json();
}
catch(error){
  console.log(`${error}`)
}
