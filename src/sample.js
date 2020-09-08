
function initApp() {
  var vidElement = document.querySelector('video');

  if (window.MediaSource) {
    var mediaSource = new MediaSource();
    vidElement.src = URL.createObjectURL(mediaSource);
    mediaSource.addEventListener('sourceopen', sourceOpen);
  } else {
    console.log("The Media Source Extensions API is not supported.")
  }

  function sourceOpen(e) {
    URL.revokeObjectURL(vidElement.src);
    var mime = 'video/webm; codecs="vp8"';
    var mediaSource = e.target;
    var sourceBuffer = mediaSource.addSourceBuffer(mime);
    console.debug('sourceBuffer', sourceBuffer);
    var videoUrl = 'test.webm';
    fetch(videoUrl)
      .then(function(response) {
        console.debug('response', response);
        return response.arrayBuffer();
      })
      .then(function(arrayBuffer) {
        console.debug('arrayBuffer', arrayBuffer);
        sourceBuffer.addEventListener('updateend', function(e) {
          console.debug('e', e);
          if (!sourceBuffer.updating && mediaSource.readyState === 'open') {
            mediaSource.endOfStream();
          }
        });
        sourceBuffer.appendBuffer(arrayBuffer);
      }, false);
  }
}

// function initApp() {
//   var type, mpd, segmentURL;
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "manifest.mpd", true);
//   xhr.responseType = "document";
//   xhr.overrideMimeType("text/xml");
//   xhr.onload = e => {
//     mpd = xhr.responseXML;
//     const representation = mpd.getElementsByTagName("Representation")[1];
//     const mimeType = 'video/mp4';
//     const codecs = representation.getAttribute("codecs");
//     type = `${mimeType}; codecs="${codecs}"`;
//     initializeVideo(); // 次の関数へ
//   };
//   xhr.send(null);
//
//
//   var mediaSource;
//   function initializeVideo() {
//     mediaSource = new MediaSource();
//     const video = document.getElementById("video");
//     mediaSource.addEventListener("sourceopen", initializeSourceBuffer, false); // mediaSource が開いたらソース・バッファを作成する
//     video.src = URL.createObjectURL(mediaSource);
//   }
//
//
//   var sourceBuffer;
//   function initializeSourceBuffer() {
//     console.debug('type', type);
//     sourceBuffer = mediaSource.addSourceBuffer(type);
//     sourceBuffer.addEventListener("updateend", appendMediaSegment, false);
//     appendInitializationSegment(); // 次の関数へ
//   }
//
//
//   function appendInitializationSegment() {
//     const xhr = new XMLHttpRequest();
//     const url = mpd.getElementsByTagName("BaseURL")[0].innerHTML;
//     console.debug('url1', url);
//     segmentURL = `${url}V300`;
//     xhr.open("GET", `${segmentURL}/init.mp4`, true);
//     xhr.responseType = "arraybuffer";
//     xhr.onload = appendSegment;
//     xhr.send(null);
//   }
//
//   function appendSegment(e) {
//     console.debug('e.target.response', e.target.response);
//     sourceBuffer.appendBuffer(e.target.response);
//   }
//
//
//   function appendMediaSegment(e) {
//     console.debug('e', e);
//     const xhr = new XMLHttpRequest();
//     const url = mpd.getElementsByTagName("SegmentTimeline")[1].getElementsByTagName("S")[0].getAttribute("t");
//     console.debug('url', `${segmentURL}/t${url}.m4s`);
//     xhr.open("GET", `${segmentURL}/t${url}.m4s`, true);
//     xhr.responseType = "arraybuffer";
//     xhr.onload = appendSegment;
//     xhr.send(null);
//   }
//
//
// }

document.addEventListener('DOMContentLoaded', initApp);
