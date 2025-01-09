const header = document.querySelector(".header");
const headerContent = document.querySelector(".header_content")

window.addEventListener('scroll',()=>{
    let pageState = window.scrollY;
    console.log(pageState);

    if(pageState > 11){
        headerContent.classList.add("header_content_black");
        header.classList.add("header_fixed");
    } else {
        headerContent.classList.remove("header_content_black");
        header.classList.remove("header_fixed");
    }
    
    if(pageState > 164){
        header.classList.add("header_black");
    } else{
        header.classList.remove("header_black");
    }

})