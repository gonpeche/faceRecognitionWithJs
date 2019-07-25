// const video = document.getElementById('video')

// async function extract() {
//   const regionsToExtract = [new faceapi.Rect(0, 0, 100, 100)]
//   const canvases = await faceapi.extractFaces(input, regionsToExtract)
// }

// extract()

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//   faceapi.nets.faceExpressionNet.loadFromUri('/models'),
//   faceapi.nets.extractFaces.loadFromUri('/models'),
// ]).then(startVideo)

// function startVideo() {
//   navigator.getUserMedia(
//     { video: {} },
//     stream => video.srcObject = stream,
//     err => console.error(err)
//   )
// }

// function takeFoto() {
//   console.log('bam')
// }

// video.addEventListener('play', () => {
//   const canvas = faceapi.createCanvasFromMedia(video)
//   document.body.append(canvas)
//   const displaySize = { width: video.width, height: video.height }
//   faceapi.matchDimensions(canvas, displaySize)
//   setInterval(async () => {
//     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//     const resizedDetections = faceapi.resizeResults(detections, displaySize)
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
//     faceapi.draw.drawDetections(canvas, resizedDetections)
//     // faceapi.extractFaces(input,)
//     // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
//   }, 100)
// })

var video = document.querySelector("#videoElement");

function openWebcam() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err) {
      console.log("Something went wrong!");
    });
}

function stopWebcam(e) {
  var stream = video.srcObject;
  var tracks = stream.getTracks();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }
  
  video.srcObject = null;
}