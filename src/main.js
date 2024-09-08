var skillsSection = document.querySelector('.skills_section');
var toggleSkillsBtn = document.querySelector('#toggle_skills_btn');
var form = document.querySelector('form');
var resume = document.querySelector('.resume');
var form_fullname = document.getElementById('form_fullname');
var form_email = document.getElementById('form_email');
var form_contact = document.getElementById('form_contact');
var form_secondary_edu = document.getElementById('form_secondary_edu');
var form_primary_edu = document.getElementById('form_primary_edu');
var form_comapny = document.getElementById('form_comapny');
var form_exp = document.getElementById('form_exp');
var form_main_skill = document.getElementById('form_main_skill');
var form_sub_skills = document.getElementById('form_sub_skills');
var editableTexts = document.querySelectorAll('.details');
var showSkills = false;
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener(('click'), (function () {
    if (showSkills) {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.innerText = 'Show';
        showSkills = false;
    }
    else {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.innerText = 'Hide';
        showSkills = true;
    }
}));
form.addEventListener(('submit'), (function (e) {
    e.preventDefault();
    resume.children[1].children[1].innerHTML = form_fullname.value;
    resume.children[1].children[3].innerHTML = form_email.value;
    resume.children[1].children[5].innerHTML = form_contact.value;
    resume.children[3].children[1].innerHTML = form_secondary_edu.value;
    resume.children[3].children[3].innerHTML = form_primary_edu.value;
    resume.children[5].children[0].innerHTML = form_comapny.value;
    resume.children[5].children[1].innerHTML = form_exp.value;
    resume.children[7].children[0].children[0].innerHTML = form_main_skill.value;
    resume.children[7].children[0].children[1].innerHTML = form_sub_skills.value;
    resume.style.display = 'block';
    form.style.display = 'none';
}));
editableTexts.forEach(function (elem) {
    elem.addEventListener('click', function () {
        var userInput = prompt('Edit');
        elem.innerHTML = userInput;
    });
});
