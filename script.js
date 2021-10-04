function log() {
    setTimeout(
      console.log.bind(
        console,
        "%c This Was Created By => Sergio J Cerritos %c",
        "background-color: #bdd4e7;background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);padding:5px;border-radius: 5px;line-height: 26px;",
        ""
      )
    );
  }
  log();
  const date = new Date();
  document.querySelector("#year").innerHTML = date.getFullYear();
  // document.querySelector("#LastUpdate").innerHTML = document.lastModified;
  // var audio = document.getElementById("myaudio");
  // audio.volume = 0.1;
  // function myFunction() {
  //   var x = document.querySelector('#myaudio').autoplay;
  // }
  var audio = document.getElementById("playAudio");
  audio.volume = 0.1;
  var audio1 = document.getElementById("iframeAudio");
  audio1.volume = 0.1;