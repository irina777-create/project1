export function destroySlider(){
  destroySlider.noUiSlider.destroy()
  preview.className=''
  preview.style.filter=''
  preview.stylewebkitFilter=''
  valueInput.value=''
}
