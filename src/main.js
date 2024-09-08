var skillsSection = document.querySelector('.skills_section');
var toggleSkillsBtn = document.querySelector('#toggle_skills_btn');
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
