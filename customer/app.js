console.log("Javascript berhasil dimuat");

const toggleButton = document.querySelector("#toggleTips");
const formTips = document.querySelector("#formTips");
const customerForm = document.querySelector("#customerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nameFeedback = document.querySelector("#nameFeedback");
const emailFeedback = document.querySelector("#emailFeedback");
const formMessage = document.querySelector("#formMessage");
const phoneInput = document.querySelector("#phone");
const phoneFeedback = document.querySelector("#phoneFeedback");

toggleButton.addEventListener("click", function(){
    formTips.hidden = !formTips.hidden;

    toggleButton.textContent = formTips.hidden ? "Tampilkan Petunjuk" : "Sembunyikan Petunjuk";
});

nameInput.addEventListener("input", function(){
    if(nameInput.value.trim() ===  ""){
        nameFeedback.textContent = "Nama belum diisi";
    }else{
        nameFeedback.textContent = "Nama sudah diisi";
    }
});

emailInput.addEventListener("input", function(){
    if(emailInput.value.trim() === ""){
        emailFeedback.textContent = "Email belum diisi";
    }else if(!emailInput.validity.valid){
        emailFeedback.textContent = "Email tidak valid";
    }else{
        emailFeedback.textContent = "Email sudah diisi dan valid";
    }
});

phoneInput.addEventListener("input", function(){
    const phone = phoneInput.value.trim();
    if(phone === ""){
        phoneFeedback.textContent = "Nomor HP belum diisi";
    }else if(!/^\+?[0-9\s()-]{8,20}$/.test(phone)){
        phoneFeedback.textContent = "Nomor HP tidak valid";
    }else{
        phoneFeedback.textContent = "Nomor HP valid";
    }
});

customerForm.addEventListener("submit", function(event){
    let hasError = false;

    nameFeedback.textContent = "";
    emailFeedback.textContent = "";
    phoneFeedback.textContent = "";
    formMessage.textContent = "";

    if(nameInput.value.trim() === ""){
        event.preventDefault();
        nameFeedback.textContent = "Nama wajib diisi";
        hasError = true;
    }

    if(emailInput.value.trim() === "" || !emailInput.validity.valid){
        event.preventDefault();
        emailFeedback.textContent = "Email wajib diisi dan pastikan formatnya benar";
        hasError = true;
    } 

    const phone = phoneInput.value.trim();

    if(phone === "" || !/^\+?[0-9\s()-]{8,20}$/.test(phone)){
        event.preventDefault();
        phoneFeedback.textContent = "Nomor HP wajib diisi dengan format yang valid";
        hasError = true;
    }

    if(hasError){
        formMessage.textContent = "Perbaiki input yang masih salah";
    }else{
        formMessage.textContent = "Data sudah bisa diproses";
    }

});
