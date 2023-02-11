user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7yI9pLJ1nhv14-plBhzUwPbF6KomDbxg",
    authDomain: "letschat-83010.firebaseapp.com",
    databaseURL: "https://letschat-83010-default-rtdb.firebaseio.com",
    projectId: "letschat-83010",
    storageBucket: "letschat-83010.appspot.com",
    messagingSenderId: "837747164388",
    appId: "1:837747164388:web:2747023ea8fd862cd058f1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function back(){
  window.location = "kwitter_room.html";
 }

 function send(){


 msg = document.getElementById('msg').value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }