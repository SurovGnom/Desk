document.addEventListener('DOMContentLoaded', function () {
    stickyHeader ()
})

function stickyHeader () {
    let header = document.querySelector('.header')
    document.addEventListener('scroll', function () {
        console.log(document.documentElement.getBoundingClientRect().top)
        if (document.documentElement.getBoundingClientRect().top < 0) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
    }) 
}
setTimeout(stickyHeader,80);

