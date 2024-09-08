const skillsSection = document.querySelector('.skills_section') as HTMLDivElement;
const toggleSkillsBtn = document.querySelector('#toggle_skills_btn') as HTMLButtonElement;


let showSkills: boolean = false;
toggleSkillsBtn?.addEventListener(('click'), (() => {
    if (showSkills){
        skillsSection.style.display = 'none';
        toggleSkillsBtn.innerText = 'Show';
        showSkills = false;
    } else {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.innerText = 'Hide';
        showSkills = true;
    }
}));