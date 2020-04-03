// -----------------navFuction-----------------//
function openNav() {
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// -----------------sliderFunction-----------------//
var slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("slide-content");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none"; 
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// -----------------mapFunction-----------------//
function initMap() {
    var options = {
        zoom: 6,
        center: {lat: 23.1291, lng: 113.2644}
    }

    var map = new google.maps.Map(document.getElementById('map-content'), options);

    var marker = new google.maps.Marker({
        position: {lat: 23.1291, lng: 113.2644},
        map: map
    });
}

// -----------------forumFunction-----------------//
const inputArea = document.querySelector('#inputArea');
const addBtn = document.querySelector('#add');
const selectBtn = document.querySelector('#select');
const deselectBtn = document.querySelector('#deselect');
const deleteBtn = document.querySelector('#delete');
const outputBlock = document.querySelector('#outputBlock');
const liParents = outputBlock.getElementsByTagName('li');

addBtn.addEventListener('click', addStuff);
selectBtn.addEventListener('click', select);
deselectBtn.addEventListener('click', deselect);
deleteBtn.addEventListener('click', deleteStuff);

function addStuff(e) {
    const inputText = inputArea.value;

    if (inputText === '') {
        // alert('Please fill in the field')
    } else {
        const todo = document.createElement('li');
        
        // Add checkbox to li
        const check = document.createElement('input');
        check.type = 'checkbox';
        todo.appendChild(check);

        // Add text to li
        const text = document.createTextNode(inputText);
        todo.appendChild(text);

        // Add li element to outputBlock
        outputBlock.appendChild(todo);

        // Clear input field
        inputArea.value = '';
    }
   
}

function select(e) {
    for (let item of liParents) {
        item.childNodes[0].checked = true;
    }
}

function deselect(e) {
    for (let item of liParents) {
        item.childNodes[0].checked = false;
    }
}

function deleteStuff(e) {
    [...liParents].
        filter(item => item.childNodes[0].checked === true).
        forEach(selected => selected.remove());
}