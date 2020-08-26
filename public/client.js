const manifestUri = 'manifest.mpd';

function initApp() {
  const uid = getUid();
  const url = `${manifestUri}?uid=${uid}`;

  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer(url);
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}

async function initPlayer(url) {
  // Create a Player instance.
  const video = document.getElementById('video');
  const player = new shaka.Player(video);

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;

  // Listen for error events.
  player.addEventListener('error', onErrorEvent);
  video.addEventListener('ended', onEnded);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(url);
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    onError(e);
  }
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onEnded() {
  const target = document.getElementById("ended");
  target.innerHTML = "再生終了しました";
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

function getUid() {
  if (localStorage.getItem('uid')) {
    return localStorage.getItem('uid');
  }
  const uid = generateUID();
  localStorage.setItem('uid', uid);
  return uid;
}

function generateUID() {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

document.addEventListener('DOMContentLoaded', initApp);
