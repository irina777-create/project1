export let globalPhotosArray;
 
async function showData(){
  try{
    const responce =await fetch('http://127.0.01:4026/photo')
    
    if(!responce.ok){
      throw new Error('Network responce was not ok');
    }
    const photosArray=await responce.json()
    globalPhotosArray=structuredClone(photosArray)
    console.log(photosArray)
    displayPictures(photosArray)
  }catch(error){
    console.log('Has been a problem fetch oPerator',error)
  }
}
showData()

