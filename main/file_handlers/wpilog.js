var ArrBuffer;
var BufferRaw = "";

function readBinFile(){
    stat.set("INITIALIZING: Read BIN file...", LOADING);
    var file = $("#binin_file")[0].files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      ArrBuffer = e.target.result;
      console.log(ArrBuffer);
      stat.set("BIN file read.", READY);
    }
    reader.readAsArrayBuffer(file);
  }

  $("#binin_file")[0].addEventListener("change", readBinFile);