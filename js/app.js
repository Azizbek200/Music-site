function sentFeedback(){
    var feedbackData = [];

    var name = document.getElementById('name').value;
    var emailFeedback = document.getElementById('emailFeedback').value;
    var textArea = document.getElementById('textArea').value;

    document.getElementById('name').value = "";
    document.getElementById('emailFeedback').value = "";
    document.getElementById('textArea').value = "";
    
    var feedback = {
        name: name,
        email: emailFeedback,
        text: textArea
    }

    feedbackData.push(feedback);
    console.log(feedback);

    document.getElementById('form-group').style.opacity = 0;
    setTimeout(function() {
        var formGroup = document.getElementById('form-group').classList.toggle('d-none');
        var info = document.getElementById('info').classList.toggle('d-block');
    }, 1000)
}

var cache = [];

function createAccount(){
    var fullName = document.getElementById('text').value;
    var email = document.getElementById('email').value;
    var userName = document.getElementById('username').value;
    var birthday = document.getElementById('date').value;
    var country = document.getElementById('country').value;
    var tel = document.getElementById('tel').value;

    document.getElementById('text').value = "";
    document.getElementById('email').value = "";
    document.getElementById('username').value = "";
    document.getElementById('date').value = "";
    document.getElementById('country').value = "";
    document.getElementById('tel').value = "";

    setTimeout(function(e) {
        var form = document.getElementById('form').classList.toggle('d-none');
        var infoRegistration = document.getElementById('infoRegistration').classList.toggle('d-block');
        var close  = document.getElementById('close').classList.toggle('d-none');
    }, 500)

    var register = {
        name: fullName,
        email: email,
        username: userName,
        birthday: birthday,
        country: country,
        tel: tel
    } /**BU ESA FIELD, INPUTGA KIRITILGAN MALUMOTLARNI SAQLASH UCHUN*/

    cache.push(register);
    console.log(register);
}