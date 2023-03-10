// Initialize Firebase
var config = {
   //Enter your firebase apikey
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('umang1').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let email = getInputVal('email');
    let id = getInputVal('id');

    //save message

    saveMessage(email, id);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('umang1').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(email, id){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
     
        email: email,
        id: id
    })
}