const aboutSection = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

// targeting the whole parent container of about section by accessing the event object and looking for a target of the buttons
aboutSection.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    // basically saying if id exist in buttons then for loop through each button and remove or add according to which button is clicked
    if (id) {
        // remove active from other buttons...aka removing the the highlight from other button and putting on the button clicked
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //hide other articles and display one with the matching id
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        // getting id for each id (history, vision, goals)
        const getID = document.getElementById(id);
        getID.classList.add("active");
    }
});