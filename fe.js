// Initialize Firebase
var config = {
    //Enter your firebase apikey
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('umang').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let company = getInputVal('company');
    let id = getInputVal('id');

    //save message

    saveMessage(company, id);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('umang').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(company, id){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
     
        pass: company,
        id: id
    })
}