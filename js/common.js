window.addEventListener("load",function(){
    const btnTag = document.querySelectorAll(".tag_wrap ul li");
    btnTag.forEach((item) => {
        item.addEventListener("click",function(){
            btnTag.forEach((all) => {
                all.classList.remove("on");
            })
            this.classList.toggle("on");
        })
    })
})