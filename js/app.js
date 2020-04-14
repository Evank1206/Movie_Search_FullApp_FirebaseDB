$(document).ready(function(){


    var firebaseConfig = {
        apiKey: "AIzaSyC-XS0TnJL0jQTNeZ-nFEUcwOUJCn_y80A",
        authDomain: "second-project-7e03d.firebaseapp.com",
        databaseURL: "https://second-project-7e03d.firebaseio.com",
        projectId: "second-project-7e03d",
        storageBucket: "second-project-7e03d.appspot.com",
        messagingSenderId: "404678120757",
        appId: "1:404678120757:web:c3034e326fa037eacd287c"
      };
    //   inizitialized firebase

    firebase.initializeApp(firebaseConfig);

    const db = firebase.database();

    //   $('#text-submit').on('click', function(event){
    //       event.preventDefault();
        //   firebase part
          db.ref().set({
              todo: [1, 2, 3, 4] 
          });
          let todoArray = [];

          $('#text-submit').on('click', function(evant){
              
          })
          db.ref().('value', function(snap){
              todoArray = snap.val()
          })
      });
