import * as THREE from "https://cdn.skypack.dev/three@0.130.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js";

export const setupScene = (container, material) => {
  const scene = new THREE.Scene();
  let clock = new THREE.Clock();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  const ambientLight = new THREE.AmbientLight("#888888");
  const light = new THREE.DirectionalLight(0xffffff, 1, 100);
  light.position.set(0, 1, 10); //default; light shining from top
  light.castShadow = true; // default false
  scene.add(light);

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  scene.add(ambientLight);
  camera.position.z = 300;
  camera.position.x = 0;
  camera.position.y = 0;
  console.log(renderer);

  container.append(renderer.domElement);
  let controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.3;
  controls.enableDamping = true;
  controls.dampingFactor = 1.2;
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const animate = () => {
    renderer.render(scene, camera);
    controls.update();

    //BROWNIAN TIME:
    //material.uniforms.time.value = clock.getElapsedTime();
    //REGULAR SHADER TIME:
    //material.uniforms.uTime.value = clock.getElapsedTime();

    requestAnimationFrame(animate);
  };

  animate();

  return scene;
};
