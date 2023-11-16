const panels = document.querySelectorAll(".panel");





panels.forEach(panel => {
    panel.addEventListener('click',() => {

        removeActivveClasses();
        panel.classList.add('active')

    })
})


function removeActivveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')

    })
}