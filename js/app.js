function showForm() {
    var form = document.getElementById("submit-idea");
    var ideaSection = document.getElementById("ideas-section");
    var formOption = document.getElementById("see-form");
    var ideaOption = document.getElementById("see-ideas");
    ideaOption.classList.remove("selected");
    formOption.classList.add("selected");
    ideaSection.classList.remove("do-display");
    ideaSection.classList.add("dont-display");
    form.classList.add("do-display");
}

function showIdeas() {
    var form = document.getElementById("submit-idea");
    var ideaSection = document.getElementById("ideas-section");
    var ideaOption = document.getElementById("see-ideas");
    var formOption = document.getElementById("see-form");
    formOption.classList.remove("selected");
    ideaOption.classList.add("selected");
    form.classList.remove("do-display");
    form.classList.add("dont-display");
    ideaSection.classList.add("do-display");
}

