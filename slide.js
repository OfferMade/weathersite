const slides = document.querySelectorAll(".slide")

var counter = 0;
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`
    }
)
const goPrev = () =>{
    counter --
    slideImage()
    if(counter <0)
    {
        counter=0;
    }
}
const goNext = () =>{
    counter ++
    slideImage()
    if(counter == 4){
        counter=-1;
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}