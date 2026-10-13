document.addEventListener('DOMContentLoaded', () => {

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if(menuButton && nav){

menuButton.addEventListener('click', () => {
const isOpen = nav.classList.toggle('open');
menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.primary-nav a').forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('open');
menuButton.setAttribute('aria-expanded', 'false');
});
});

}


// ΕΜΦΑΝΙΣΗ ΠΕΔΙΟΥ "ΑΛΛΟ"

const courseSelect = document.querySelector('#course');
const otherCourseWrapper = document.querySelector('#other_course_wrapper');
const otherCourse = document.querySelector('#other_course');

if(courseSelect && otherCourseWrapper && otherCourse){

courseSelect.addEventListener('change', () => {

if(courseSelect.value === 'Άλλο'){
otherCourseWrapper.style.display = 'block';
otherCourse.required = true;
otherCourse.focus();
}else{
otherCourseWrapper.style.display = 'none';
otherCourse.required = false;
otherCourse.value = '';
}

});

}


// ΑΠΟΣΤΟΛΗ ΦΟΡΜΑΣ

const contactForm = document.querySelector('.contact-form');

if(contactForm){

contactForm.addEventListener('submit', async event => {

event.preventDefault();

const form = event.currentTarget;
const messageElement = form.querySelector('.form-message');
const formData = new FormData(form);

if(messageElement){
messageElement.textContent = 'Αποστολή μηνύματος...';
}

try{

const response = await fetch('https://formspree.io/f/xrpgzwln',{
method:'POST',
body:formData,
headers:{
'Accept':'application/json'
}
});

if(response.ok){

if(messageElement){
messageElement.textContent =
'Τέλεια! Θα επικοινωνήσουμε μαζί σου πολύ σύντομα.';
}

form.reset();

if(otherCourseWrapper && otherCourse){
otherCourseWrapper.style.display = 'none';
otherCourse.required = false;
otherCourse.value = '';
}

}else{

if(messageElement){
messageElement.textContent =
'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά αργότερα.';
}

}

}catch(error){

if(messageElement){
messageElement.textContent =
'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά αργότερα.';
}

}

});

}


// ANIMATION COURSE CARDS

const courseCards = document.querySelectorAll('.course-card');

if(courseCards.length > 0){

const cardObserver = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){
entry.target.classList.add('show');
cardObserver.unobserve(entry.target);
}

});

},{
threshold:0.15
});

courseCards.forEach((card) => {
cardObserver.observe(card);
});

}
const conaForm = document.querySelector('.cona');

if (conaForm) {

    conaForm.addEventListener('submit', async function(event) {

        event.preventDefault();

        const form = event.currentTarget;
        const messageElement = form.querySelector('.form-message');
        const formData = new FormData(form);

        if (messageElement) {
            messageElement.textContent = 'Αποστολή μηνύματος...';
        }

        try {

            const response = await fetch('https://formspree.io/f/xrpgzwln', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {

                if (messageElement) {
                    messageElement.textContent =
                        'Τέλεια! Θα επικοινωνήσουμε μαζί σου πολύ σύντομα.';
                }

                form.reset();

            } else {

                if (messageElement) {
                    messageElement.textContent =
                        'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.';
                }

            }

        } catch (error) {

            if (messageElement) {
                messageElement.textContent =
                    'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.';
            }

        }

    });

}



const stepItems = document.querySelectorAll('.steps li');

if(stepItems.length > 0){

const stepsObserver = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){
entry.target.classList.add('show');
stepsObserver.unobserve(entry.target);
}

});

},{
threshold:0.1
});

stepItems.forEach((step) => {
stepsObserver.observe(step);
});

}

});
const topBtn=document.querySelector('.back-to-top');