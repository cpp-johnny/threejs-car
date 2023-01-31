const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const bodyGeometry = new THREE.BoxGeometry(4, 2, 2);
const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 20);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const wheelMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });

const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
const wheel1 = new THREE.Mesh(wheelGeometry, wheelMaterial);
const wheel2 = new THREE.Mesh(wheelGeometry, wheelMaterial);

body.position.y = 1;
wheel1.position.x = -1.5;
wheel1.position.y = -1;
wheel2.position.x = 1.5;
wheel2.position.y = -1;

scene.add(body);
scene.add(wheel1);
scene.add(wheel2);

camera.position.z = 10;

const animate = function () {
  requestAnimationFrame(animate);
  wheel1.rotation.x += 0.1;
  wheel2.rotation.x += 0.1;
  renderer.render(scene, camera);
};

requestAnimationFrame(animate);
