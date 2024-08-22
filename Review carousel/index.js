const reviews = [
    {
        id: 1,
        name: "SUSAN SMITH",
        job: "web developer",
        img: "./assets/susan.jpg",
        description: "I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!"

    },
    {
        id: 2,
        name: "JACOB MATHEW",
        job: "ux designer",
        img: "./assets/jacob.jpg",
        description: "Coming from a background in design, I love creating pages where I’m able to actually create enjoyable interactions and experiences for everyone! And with Juno’s education and support, I’m now able to truly call myself a Front-End Developer who is currently working at Indigo!"

    },
    {
        id: 3,
        name: "TONY FRANCIS",
        job: "front end developer",
        img: "./assets/tony.jpg",
        description: "I'm currently an implementation developer at a fintech startup called Nest Wealth where I help customize our codebase to fit new client needs. Advocating for diversity and inclusion is something that's very important to me, and thankfully I've found a workplace that helps support that mission."

    }

]

const img = $('.image-one')[0];
const name = $('.name')[0];
const job = $('.job')[0];
const description = $('.description')[0];
const prevButton = $('#prev-button');
const nextButton = $('#next-button');
let currentItem = 2;
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
})
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    description.textContent = item.description;
}
$('#prev-button').click(() => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);

})
$('#next-button').click(() => {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson(currentItem);
})
$('#randomGenerator').click(() => {
    var arrayIndex = Math.floor(Math.random() * reviews.length);
    showPerson(arrayIndex);
})