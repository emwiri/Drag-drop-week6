const iteMS = document.querySelectorAll(".itam");
const conTaiNer = document.querySelectorAll(".container-in-coulm-container");

iteMS.forEach((item) => {
    item.addEventListener("dragstart",()=>{
        item.classList.add("back-drag")
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("back-drag")
    })
});
conTaiNer.forEach((mybox) => {
    mybox.addEventListener("dragover",()=>{
        const itamEL=document.querySelector(".back-drag")
        mybox.append(itamEL)
    })

})