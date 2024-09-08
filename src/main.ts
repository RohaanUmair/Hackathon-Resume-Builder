const skillsSection = document.querySelector('.skills_section') as HTMLDivElement;
const toggleSkillsBtn = document.querySelector('#toggle_skills_btn') as HTMLButtonElement;

const form = document.querySelector('form') as HTMLFormElement;
const resume = document.querySelector('.resume') as HTMLDivElement;

const form_fullname = document.getElementById('form_fullname') as HTMLInputElement;
const form_email = document.getElementById('form_email') as HTMLInputElement;
const form_contact = document.getElementById('form_contact') as HTMLInputElement;
const form_secondary_edu: any = document.getElementById('form_secondary_edu') as HTMLInputElement;
const form_primary_edu = document.getElementById('form_primary_edu') as HTMLInputElement;
const form_comapny = document.getElementById('form_comapny') as HTMLInputElement;
const form_exp = document.getElementById('form_exp') as HTMLInputElement;
const form_main_skill = document.getElementById('form_main_skill') as HTMLInputElement;
const form_sub_skills = document.getElementById('form_sub_skills') as HTMLInputElement;

const editableTexts = document.querySelectorAll('.details');




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



form.addEventListener(('submit'), ((e) => {
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



editableTexts.forEach((elem) => {
    elem.addEventListener('click', function(){
        let userInput = prompt('Edit') as string;
        elem.innerHTML = userInput;
    });
});

const download_btn = document.getElementById('download_btn') as HTMLButtonElement;


download_btn.addEventListener('click', (() => {
    downloadPdf()
}))


declare var html2pdf: any;
function downloadPdf(){
    const element = document.querySelector('.resume') as HTMLDivElement;

    html2pdf()
    .from(element)
    .save()
}