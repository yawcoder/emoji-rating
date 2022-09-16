const stars = document.querySelectorAll('.fa-star');
const emojis = document.querySelectorAll('.far');
const interpr = document.querySelector('#interpr');

const interprArray = ["Very Unsatisfied", "Unsatisfied", "Okay", "Good", "Excellent"]

updateRating(0);

stars.forEach(function(star, index){
    star.addEventListener('click', () => {
        updateRating(index);
    });
});

function updateRating(index){
    stars.forEach((stars, idx) => {
        if(idx < index + 1){
            stars.classList.add('active');
        }else{
            stars.classList.remove('active');
        }
    })
    emojis.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
    })
    interpr.innerText = interprArray[index];
};