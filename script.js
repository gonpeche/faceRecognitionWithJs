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
  // const fotoBaseURL = snapshot.toDataURL()
  start(snapshot)
}

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('models')
]).then(() => document.body.append('model ok'))


async function start(foto) {
  // console.log('foto', foto)
  const regionsToExtract = [
    new faceapi.Rect(0, 0, 100, 100)
  ]
  // async () => {
  //   console.log('async')
    const canvases = await faceapi.extractFaces(foto, regionsToExtract)
    console.log(canvases)
  // }


  // const container = document.createElement('div')
  // container.style.position = 'relative'
  // document.body.append(container)
  // document.body.append('Loaded')

  // async () => {
  //   const detections = await faceapi.detectAllFaces(foto)
  //   document.body.append('Listo: ',detections.length)
  // }
}