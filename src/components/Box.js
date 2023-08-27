var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    100,
  );
  camera.position.z = 4;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(2, 2, 2);

  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 256, 256);

  ctx.fillStyle = 'black';
  ctx.font = '30px Arial';
  ctx.fillText('B391Y', 10, 50);

  let canvasTexture = new THREE.CanvasTexture(canvas);
  let material = new THREE.MeshBasicMaterial({map: canvasTexture});
  mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
}
