//cell elemnt by query selector from hmtl
let myName = document.querySelector('.namePer');
let mySpe = document.querySelector('.MM');
let profile = document.querySelector('.profile');
let listicon1 = document.querySelector('.list-icon1');
let listicon2 = document.querySelector('.list-icon2');
let listicon3 = document.querySelector('.list-icon3');
let listicon4 = document.querySelector('.list-icon4');
let educationYear = document.querySelector('.no-space1');
let educationUni = document.querySelector('.no-space2');
let educationDeg = document.querySelector('.master');
let skills1 = document.querySelector('.list-skills1');
let skills2 = document.querySelector('.list-skills2');
let skills3 = document.querySelector('.list-skills3');
let skills4 = document.querySelector('.list-skills4');
let skills5 = document.querySelector('.list-skills5');
let skills6 = document.querySelector('.list-skills6');
let skills7 = document.querySelector('.list-skills7');
let language1 = document.querySelector('.list-lan1');
let language2 = document.querySelector('.list-lan2');
let workE = document.querySelector('.experience-container');
let phoneRef = document.querySelector('.phone');
let phone2Ref = document.querySelector('.phone2');
let emailRef = document.querySelector('.Email');
let email2Ref = document.querySelector('.Email2');


//function for Change content
function toggleContent(element, newContent) {
    element.textContent = newContent;
} 
//for change element 
function setupToggle(element, newContent) {
    element.onmouseover = () => toggleContent(element, newContent);
    element.onmouseout = () => toggleContent(element, element.getAttribute('my-contents'));
}
//storage my information in html
profile.setAttribute('my-contents', profile.textContent);
listicon1.setAttribute('my-contents', listicon1.textContent);
listicon2.setAttribute('my-contents', listicon2.textContent);
listicon3.setAttribute('my-contents', listicon3.textContent);
listicon4.setAttribute('my-contents', listicon4.textContent);
educationYear.setAttribute('my-contents', educationYear.textContent);
educationUni.setAttribute('my-contents', educationUni.textContent);
educationDeg.setAttribute('my-contents', educationDeg.textContent);
skills1.setAttribute('my-contents', skills1.textContent);
skills2.setAttribute('my-contents', skills2.textContent);
skills3.setAttribute('my-contents', skills3.textContent);
skills4.setAttribute('my-contents', skills4.textContent);
skills5.setAttribute('my-contents', skills5.textContent);
skills6.setAttribute('my-contents', skills6.textContent);
skills7.setAttribute('my-contents', skills7.textContent);
language1.setAttribute('my-contents', language1.textContent);
language2.setAttribute('my-contents', language2.textContent);
myName.setAttribute('my-contents', myName.textContent);
mySpe.setAttribute('my-contents', mySpe.textContent);
workE.setAttribute('my-contents', workE.textContent);
phoneRef.setAttribute('my-contents', phoneRef.textContent);
phone2Ref.setAttribute('my-contents', phone2Ref.textContent);
emailRef.setAttribute('my-contents', emailRef.textContent);
email2Ref.setAttribute('my-contents', email2Ref.textContent);

//change data
setupToggle(myName, "Fatimah Hakami");
setupToggle(mySpe, "Computer Science");
setupToggle(profile, "Computer Science graduate with a Bachelor's degree from Jazan University. I Possessing diverse skills in rogramming languages, app, and web development. Highly proficient in communication and teamwork. Aspiring to work in a professional environment to effectively contribute to its goals. Seeking a technical position or one related to my field");
setupToggle(listicon1, '0542179178');
setupToggle(listicon2, 'fatimahalli318@gmail.com');
setupToggle(listicon3, 'Jazan,Saudi Arabia');
setupToggle(listicon4, 'www.linkedin.com/in/fatimah-hakami/');
setupToggle(educationYear, '2019 – 2023');
setupToggle(educationUni, 'Jazan University');
setupToggle(educationDeg, "Bachelor's Degree in Computer Science");
setupToggle(skills1, "Leadership");
setupToggle(skills2, "Teamwork");
setupToggle(skills3, "Organizational Skills");
setupToggle(skills4, "Adaptability");
setupToggle(skills5, "Microsoft Office Suite");
setupToggle(skills6, "Problem Solving");
setupToggle(skills7, "Communication Skills");
setupToggle(language1, "Arabic");
setupToggle(language1, "Arabic");
setupToggle(language2, "English");
setupToggle(workE, "Doroby COM Higher Institute 18 July 2023 – 10 Aug 2023 ");
setupToggle(phoneRef, "054556636366");
setupToggle(emailRef, "fatimah@gmail.com");
setupToggle(phone2Ref, "0500000000033");
setupToggle(email2Ref, "helllllooooo@gmail.com");








