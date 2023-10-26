var firebaseConfig = {
    apiKey: "AIzaSyB7yG5w1jP71b7C52EtOLDHlrCw-hj3zss",
    authDomain: "lets-chat-54be3.firebaseapp.com",
    databaseURL: "https://lets-chat-54be3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-54be3",
    storageBucket: "lets-chat-54be3.appspot.com",
    messagingSenderId: "43742845706",
    appId: "1:43742845706:web:6d14ef0dd2ea457e97f8f3",
    measurementId: "G-3FNTGW56Q0"
  };
  

  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}