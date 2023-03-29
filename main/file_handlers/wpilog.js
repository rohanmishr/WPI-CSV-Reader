var ArrBuffer;
var BufferRaw = "";
var view;

/*
Hexadecimal is annoying,
00 is a space
01 is start of heading
02 is start of text
03 is end of text
04 is end of transmission
*/

const CONV_MAP = new Map([
  [/[\x00]/, " "],
]);

function readBinFile(){
    stat.set("INITIALIZING: Read BIN file...", LOADING);
    var file = $("#binin_file")[0].files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      ArrBuffer = e.target.result;
      console.log(ArrBuffer);
      view = new DataView(ArrBuffer);
      for (var i = 0; i < ArrBuffer.byteLength; i++) {
        BufferRaw += String.fromCharCode(view.getUint8(i));
      }
      stat.set("BIN file read.", READY);
    }
    reader.readAsArrayBuffer(file);
  }

  $("#binin_file")[0].addEventListener("change", readBinFile);