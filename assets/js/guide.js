// var subopt = Array.from(document.querySelectorAll('.guide__sub'));
// for (const fakeImage of subopt) {
//     fakeImage.style.display = "none";

//   }
//CACHING
const sup_trials = document.querySelector('.guide__sup--trials');
const sub_trials = document.querySelector('.guide__sub--trials');

const sup_dungeons = document.querySelector('.guide__sup--dungeons');
const sub_dungeons = document.querySelector('.guide__sub--dungeons');

const sup_mechanics = document.querySelector('.guide__sup--mechanics');

const sup_builds = document.querySelector('.guide__sup--builds');

const sup_crafting = document.querySelector('.guide__sup--crafting');

const sup_world = document.querySelector('.guide__sup--world');

var supToggle = (supElement, subElement) => {
    var activeSupElement = document.querySelector('.guide__sup--active');
    var activeSubElement = document.querySelector('.guide__sub--active');
    if(supElement == activeSupElement) {
        //if already choosen
        supElement.classList.remove('guide__sup--active');
        subElement.classList.remove('guide__sub--active');
    } else {
        if(activeSupElement != null) {
            activeSupElement.classList.remove('guide__sup--active');
        }
        if(activeSubElement != null) {
            activeSubElement.classList.remove('guide__sub--active');
        }
        //if not choosen
        supElement.classList.add('guide__sup--active');
        subElement.classList.add('guide__sub--active');
    }
}

sup_trials.addEventListener('click', ()=>{
    supToggle(sup_trials, sub_trials);
})
sup_dungeons.addEventListener('click', ()=>{
    supToggle(sup_dungeons, sub_dungeons);
})