var video = document.querySelector("#videoElement");
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');

function openWebcam() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err) {
      console.log("This went wrong: ", err);
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

function takeFoto() {
  var context = snapshot.getContext('2d'); // window.snapshot --> tag canvas
  context.drawImage(video, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
  snapshot.src = 'ehPuto'
  document.getElementById('snapshot').src = 'eh puto'
  
  console.log('DOM',document.getElementById('snapshot'))
  console.log(snapshot)
  // const fotoBaseURL = snapshot.toDataURL()
  // snapshot.src = fotoBaseURL
  // start(snapshot)
}

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('models'),
  faceapi.nets.TinyFaceDetectorOptions,
  faceapi.nets.faceLandmark68Net.loadFromUri('models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('models')
]).then(() => console.log('models OK'))

async function processImage() {
  // let inputSize = 512;
  // let scoreThreshold = 0.5;

  // const options = new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold })

  const faceDetected = await faceapi.detectSingleFace(snapshot)
  console.log('imagen:',snapshot)
  console.log('faceDetected:', faceDetected)

  // const faceExtracted = await faceapi.extractFaces(snapshot, faceDetected)
  // console.log('faceExtracted: ',faceExtracted)

}

