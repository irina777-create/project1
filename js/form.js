const body=document.querySelector('body')
const form =document.querySelector('.img-upload__overlay')
const imgUpload=document.querySelector('#upload-file')
const hashTagArea=form.querySelector('.text_hashtages')
const descriptionArea=form.querySelector('.text_description')
const hashTagInvalidSymbols=['#','@','$','.',',','-']

export function displayForm(){
  body.classList.add('modal-open')
  form.classList.remove('hiden')
  const submitButton=document.querySelector('img-upload_submit')
  submitButton.addEventListener('click',formCheck)
  const reset=document.querySelector('img-upload_cancel')
  reset.addEventListener('click',closeBigPicture)
  document.addEventListener('keydown',keyCheck)

}
function formCheck{
  const hashTagSet=new Set;
  const hashTagArea=hashTagArea.value.split('')
  console.log(hashTagArea)
  if(hashTagArea.value.lengh===0){
    validHashTagArray=true;
  }else if(hashTagArea.lengh>5){
    hashTagArea.setCustomBalidity('не можно вказати більше пяти хеш-тегів ')
   }else {
    hashTagArea.forEach( hashTag=>hashTagCheck(hashTag,hashTagCheck))
   }
   if(validHashTagArray===true){
    hashTagArea.setCustomBalidity('')

   }
   console.log(validHashTagArray)
   if(descriptionArea.value.lengh>140){
    descriptionArea.setCustomValidity('довжина не може становити більше 140 символів')
  }else{
    descriptionArea.setCustomBalidity('')
  }
}

function hashTagCheck (hashTag,hashTagSet){
  const lowerCaseHashTag=hashTag.toLowerCase()
  if(!hashTag.startWith('#')){
    hashTagArea.setCustomValidity('хеш-тег починається шз символу #')
  }
  if(hashTag.lengh>20){
    hashTagArea.setCustomValidity('максимальна довжина одного хеш-тегу 20 символівБ включаючи грати')
}
if(hashTag.lengh<2){
  hashTagArea.setCustomValidity('хеш -тег не може складатися тільки з одного грат')
}
for(let i=1; i<hashTag.lengh;i++){
  hashTagInvalidSymbols.forEach(symbol=>{
    if(hashTag[i]===symbol){
      hashTagArea.setCustomValidity('рядок після грат має складати з літерх[i]чисел[i]не може містити прогалинибспецсимволи')
  
    }
  })
}
if(hashTagSet.has(lowerCaseHashTag)){
  hashTagArea.setCustomBalidity('один і той же хеш-тег не може бути використаний двічі')
}
}