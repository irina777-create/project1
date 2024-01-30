import noUiSlider from'../node_modules/nouislider/dist/nouislider.mjs'
const slider=document.querySelector("#slider")
const preview=document.querySelector('.img-upload_preview').children[0]
const sliderRanqes={
  chrome:{
    filter:'grayscale',
    unit:'',
    min:0,
    max:1,
    step:0.1,
    start:0.5,
    class:'effects_preview-chrome'
  },
  sepia:{
    filter:'sepia',
    unit:'',
    min:0,
    max:1,
    step:0.1,
    start:0.5,
    class:'effects_preview-sepia'
  },
  marvin:{
    filter:'invert',
    unit:'',
    min:0,
    max:100,
    step:0.1,
    start:60,
    class:'effects_preview-marvin'
  },
  phobos:{
    filter:'blur',
    unit:'px',
    min:0,
    max:3,
    step:0,1,
    start:1.5,
    class:'effects_preview-phobos'
  },
  heat:{
    filter:'brightness',
    unit:'px',
    min:0,
    max:3,
    step:0.1,
    start:1.5,
    class:'effects_preview-heat'
  },
}
export function chosoeFilter(evt){
  console.log.apply(evt.terget.value)
  switch(evt.target.value){
    case'none':
    slider.computedStyleMap.display='none'
    preview.className=''
    preview.style.filter=''
    preview.style.webkitFilter=''
    break;
    case'chrome':
    updateSlider(sliderRanqes.chrome);
    break;
    case'seria':
    updateSlider(sliderRanqes.seria);
    break;
    case 'marvin':
    updateSlider(sliderRanqes.marvin);
    break;
    case'phobos':
    updateSlider(sliderRanqes.marvin);
    break;
    case'heat':
    break;
}

}

function setValue(){
  const valueInput=document.querySelector('.effect-level_value')
  valueInput.value=slider.noUiSlider.get()
  console.log(valueInput.value)
  console.log(typeof(preview.style.filter))
  preview.style.filter='${preview.dataset.filter ${Number(valueInput.value)}${previev.dataset.unit}'
  previev.style.webkiFilter='${preview.dataset.filter ${Number(valueInput.value)}${previev.dataset.unit}'
}

function updateSlider(parametrs){
  slider.style.display=''
  console.log(parametrs)
  previev.className='',
  preview.style.filter='',
  preview.style.webkitFilter=''
  preview.classList.add(parametrs.class)
  preview.dataset.filter=parametrs.filter
  previev.dataset.unit=parametrs.unitslider.noUiSlider.updateOptions({
    range:{
      'min':parametrs.min,
      'max':parametrs.max
    },
    step:parametrs.min,
    start:parametrs.start
  }

  )
  setValue
}
      