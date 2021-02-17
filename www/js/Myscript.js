// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqJ5cP10StCzFUawZbHuAAqnYbpd_H_nU",
  authDomain: "fir-connection-c8267.firebaseapp.com",
  databaseURL: "https://fir-connection-c8267-default-rtdb.firebaseio.com",
  projectId: "fir-connection-c8267",
  storageBucket: "fir-connection-c8267.appspot.com",
  messagingSenderId: "915247671101",
  appId: "1:915247671101:web:4e606336228b1f447d4754"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var series = firebase.database().ref('serie');
var dataSerie =[];

recargarTabla();

// function crear(){
//   let nuevaSerie = series.push();
//   nuevaSerie.set({
//     title : "The Office",
//     network : "Amazon Prime Video",
//     numberOfSeasons : 9,
//     isCurrent : false,
//     genres : "Comedy",
//   });
// }

function recargarTabla(){
      var filas = "";
      firebase.database().ref('serie').once('value', function(data){
          data.forEach(function(serie){
              var ser = new Serie();
              ser.title = serie.val().title;
              ser.network = serie.val().network;
              ser.numberOfSeasons = serie.val().numberOfSeasons;
              ser.isCurrent = serie.val().isCurrent;
              ser.genres = serie.val().genres;

              dataSerie.push(ser);
              
              
          });

          
          for(var i = 0; i < dataSerie.length;i++){
            filas+="<tr>";
            filas+="<td>";
            filas+=dataSerie[i].title;
            filas+="</td>";
            filas+="<td>";
            filas+=dataSerie[i].network;
            filas+="</td>";
            filas+="<td>";
            filas+=dataSerie[i].numberOfSeasons;
            filas+="</td>";
            filas+="<td>";
            if(dataSerie[i].isCurrent == true){
              filas+="Yes";
            }else{
              filas+="No";
            }
            // filas+=dataSerie[i].isCurrent;
            filas+="</td>";
            filas+="<td>";
            filas+=dataSerie[i].genres;
            filas+="</td>";
            // 5
            // filas+="<td>"
            // filas+="<button type='button' onclick=\"mostrar(\'"+dataSerie[i].)>Danger</button>";
            // filas+="</td>"
            filas+="</tr>";
            
          }
          document.getElementById('tablaAdd').innerHTML = filas;  
           
        });
  }

class Serie{
  title;
  network;
  isCurrent;
  constructor(){
    this.title = "";
    this.network = "";
    this.isCurrent = 0;
  }
}

  




  
