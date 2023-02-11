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

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "👋 Welcome back, " + user_name + "!"

function addRoom(){

  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose: "adding user"
  });
  
  localStorage.setItem("room_name",room_name);
  
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
//Start code
Room_names = childKey;
       console.log("Room Name - "+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
window.location = "index.html";
}