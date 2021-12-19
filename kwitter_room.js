
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBExvwm1CKLH9Dm3jKxO3LF-EeRKw1dqcI",
      authDomain: "kwitter-b0175.firebaseapp.com",
      databaseURL: "https://kwitter-b0175-default-rtdb.firebaseio.com",
      projectId: "kwitter-b0175",
      storageBucket: "kwitter-b0175.appspot.com",
      messagingSenderId: "916875172425",
      appId: "1:916875172425:web:5f33c607dbd9b91cc7fd98",
      measurementId: "G-EH509L2KDB"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name" });

             localStorage.setItem("room_name" , room_name);

             window.location = "kwitter_page.html";
      }
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      
      
      
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

      getData();

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }
