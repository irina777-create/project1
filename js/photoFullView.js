export const addphotoFullView=function(photoObjects){
  const modalWindow=document.querySelector("#picture_full_view")
  const body=document.querySelector("body")

  const dialogHandler=function(evt){
    if(evt.target.classname==="picture_img"){
      const modalWindowTemplate=document.querySelector(".big-picture")
      const modalWindowContent=modalWindowTemplate.cloneNode(true)
      modalWindowContent.classList.remove("hidden")

      const bigDiv=modalWindowContent.querySelector("big-picture_img")
      const bigPictureImagTag=bigDiv.querySelector("img")
      
      const socialCaptionPhotoDescription=modalWindowContent.querySelector(".social_caption")
      const socialPictuareAvatar=modalWindowContent.querySelector(".social_picture")
      const likesCount=modalWindowContent.querySelector(".likes-count")
      const comentsCount=modalWindowContent.querySelector(".coments-count")
      const socialComents=modalWindowContent.querySelector(".socal_coments")

      const socialComent=modalWindowContent.querySelector(".social_coment")
      socialComent.remove()

      const socialComentCount=modalWindowContent.querySelector(".social_coment-count")

      bigPictureImagTag.src=photoObject[evt.target.id].url
      bigPictureImagTag.alt=photoObject[evt.target.id].description
      socialCaptionPhotoDescription.innerText=photoObjects[evt.target.id].authorAvatar
      likesCount.innerText=photoObjects[evt.target.id].likes
      comentsCount.innerText=photoObjects[evt.target.id].comments.length
      socialCommentCount.style.display="none"

      comentsCount.forEach(comment => {
        const comentTeplate=socialComment.cloneNode(true)
        const socialPicture=comentTeplate.querySelector(".social_picture")
        const socialAuthor=commentTeplate.querySelector(".social_author")
        const socialText=commentTeplate.querySelector("social_text")
        
        socialPicture.src=comment.avatar
        socialPicture.alt=comment.name
        socialAuthor.innerText=comment.name
        socialText.innerText=comment.message
        docFragment.appendChild(commenTemplate)
});
socialComments.appendChild(docFragment)
modalWindow.appendChild(modalWindowContent)
modalWindow.showModal()

body.classList.remove("modal-open")

}
if(evt.target.id==="picture-cancel||'Escare"){

  const sectionInModal=modalWindow.querySelector('section')
  sectionInModal.remove(
    modalWindow.closest()
    body.classList.remove("modal-open")

  )
}
modalWindow.addEventListener("keydown", dialogHandler)
document.addEventListener("click",dialogHangler)
  }
}