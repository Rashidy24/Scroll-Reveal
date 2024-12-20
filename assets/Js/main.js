const rvealedElements = document.querySelectorAll('[data-reveal]');

const toDoFunc = function(){
    for(let j = 0, len = rvealedElements.length; j < len; j++){
        const element = rvealedElements[j];
        element.getBoundingClientRect().top < window.innerHeight ? 
        element.classList.add('revealed') 
        : element.classList.remove('revealed');
    }
}

window.addEventListener('scroll', toDoFunc);
window.addEventListener('load', toDoFunc);