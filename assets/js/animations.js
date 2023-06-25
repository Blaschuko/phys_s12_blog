document.body.scrollTop = document.documentElement.scrollTop = 0;

const elements = document.querySelectorAll(".notvisible,.navbar")
const navbar = document.querySelector(".navbar")
const obs = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            if(entry.target == navbar){
                entry.target.classList.add("navappear")
            } else{
            entry.target.classList.add("appear")
            }
        } else {
            if(!entry.target.classList.contains("mt-2")){
            entry.target.classList.remove("appear")
        }
    }
    });
})

elements.forEach((element) => {
    obs.observe(element);
});

