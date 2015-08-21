// Copyright Benjamin (c) 2015 - All rights reserved

document.title = "Download More RAM";

var setElements = setInterval(function() {
  clearInterval(setElements);
  document.getElementById("title").innerHTML = "Download More RAM";
  document.getElementById("download").innerHTML = "<button onclick='download()'>CLICK TO DOWNLOAD RAM</button>";
}, 10);

function download() {
  document.getElementById("download").innerHTML = "<progress value='0' max='100'></progress>";
  var download1 = setInterval(function() {
    clearInterval(download1);
    document.getElementById("download").innerHTML = "<progress value='10' max='100'></progress>";
    var download2 = setInterval(function() {
      clearInterval(download2);
      document.getElementById("download").innerHTML = "<progress value='20' max='100'></progress>";
      var download3 = setInterval(function() {
        clearInterval(download3);
        document.getElementById("download").innerHTML = "<progress value='30' max='100'></progress>";
        var download4 = setInterval(function() {
          clearInterval(download4);
          document.getElementById("download").innerHTML = "<progress value='40' max='100'></progress>";
          var download5 = setInterval(function() {
            clearInterval(download5);
            document.getElementById("download").innerHTML = "<progress value='50' max='100'></progress>";
            var download6 = setInterval(function() {
              clearInterval(download6);
              document.getElementById("download").innerHTML = "<progress value='60' max='100'></progress>";
              var download7 = setInterval(function() {
                clearInterval(download7);
                document.getElementById("download").innerHTML = "<progress value='70' max='100'></progress>";
                var download8 = setInterval(function() {
                  clearInterval(download8);
                  document.getElementById("download").innerHTML = "<progress value='80' max='100'></progress>";
                  var download9 = setInterval(function() {
                    clearInterval(download9);
                    document.getElementById("download").innerHTML = "<progress value='90' max='100'></progress>";
                    var download10 = setInterval(function() {
                      clearInterval(download10);
                      document.getElementById("download").innerHTML = "<progress value='100' max='100'></progress>";
                      var downloadCOMPLETE = setInterval(function() {
                        clearInterval(downloadCOMPLETE);
                        document.getElementById("download").innerHTML = "<progress value='100' max='100'></progress><br>Download complete!<br>Your RAM has been installed!";
                      }, 1000);
                    }, 30);
                  }, 30);
                }, 30);
              }, 30);
            }, 30);
          }, 30);
        }, 30);
      }, 30);
    }, 30);
  }, 30);
}
