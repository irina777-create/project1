const photosArray=[];
const commentsUsedId=new Set
module.exports=generateData;

function generateData(){
  photosArray.length=25
  for(let i=1;i<photosArray.length;i++){
    photosArray[i-1]
  }
  console.log(photosArray)
  console.log(commentsUsedId)
  return photosArray;
}
function createObjects(i){
  const photo={}
  photo.id=iphoto.url='./photos/${i.jpg'
  photo.description=createDescription(i)
  photo.likes=getRandomInt(15,200)
  photo.comments=createComments()
  return photo
}
