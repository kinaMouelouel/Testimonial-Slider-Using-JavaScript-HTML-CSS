let testimonials = [
    {
        image: "profile-image-1.png",
        testimonial: "I couldn't believe how amazing the product is. It has completely changed my life and made everything so much easier.",
        name: "Jessica Smith",
        job: "Marketing Manager"
    }, {
        image: 'profile-image-2.png',
        testimonial: "This service is a game-changer. It saved me so much time and effort. I'm extremely impressed!",
        name: "Michael Johnson",
        job: "Software Engineer"
    }, {
        image: 'profile-image-3.png',
        testimonial: "I can't thank the team enough for their outstanding support. They went above and beyond to help me out.",
        name: "Emily Davis",
        job: "Customer Support Representative"
    },
    {
        image: 'profile-image-4.png',
        testimonial: "The quality of the product exceeded my expectations. I'm thoroughly satisfied with my purchase.",
        name: "David Martinez",
        job: "Architect"
    }, {
        image: 'profile-image-5.png',
        testimonial: "I was skeptical at first, but this product blew me away. It's a must-have for everyone.",
        name: "Sarah Anderson",
        job: "Financial Analyst"
    }
];
//Current Slide
let i = 0;
//Total slider
let j = testimonials.length
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let testimonialContainer = document.getElementById("testimonial-container");
next.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial()
})
prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial()
})
let displayTestimonial = () => {
    testimonialContainer.innerHTML = `<p>${testimonials[i].testimonial}</p><img src="${testimonials[i].image}"/>
    <h3>${testimonials[i].name}</h3> <h6>${testimonials[i].job}</h6>`;
}

window.onload = displayTestimonial;