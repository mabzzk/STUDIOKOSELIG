import * as THREE from "https://cdn.skypack.dev/three@0.130.0";
import { setupScene } from "./setupScene.js";
import { complexMaterial } from "./makeMaterial.js";
import { simpleMaterial } from "./makeMaterial.js";
import { brownianMaterial } from "./makeBrownianMaterial.js";
/*
For at dette skal funke:
1. velg om du vil ha shader-material eller basic material
2. skru uTime av / på i setupScene.
*/

const black = new THREE.Color(0x000000);
const white = new THREE.Color(0xffffff);
const green = new THREE.Color(0x008000);
const lightblue = new THREE.Color(0x58c7ff);
const fogColor = new THREE.Color(0xff00ff);
const orange = new THREE.Color(0xff5c16);
const yellow = new THREE.Color(0xffea32);
const blue = new THREE.Color(0x188fe3);
const pink = new THREE.Color(0xffc0cb);

const container = document.getElementById("container");
const texturePath = "./assets/black.png";
//const material = complexMaterial(texturePath);
const material = simpleMaterial(pink);
const material2 = simpleMaterial(white);
const material3 = simpleMaterial(yellow);
//const material = brownianMaterial();
const scene = setupScene(container, material);
scene.background = new THREE.Color("black");

const fontLoader = new THREE.FontLoader();
const font = await new Promise((res) =>
  fontLoader.load("fonts/racing.json", res)
);

const params = {
  font,
  size: 8,
  height: 1,
  curveSegments: 300,
  bevelEnabled: false,
};

let array = [];

const string = "DONT BE SILLY";
let stringArray = string.split("");
console.log(stringArray[2]);

//top
for (let i = 0; i < stringArray.length; i++) {
  const geometry = new THREE.TextBufferGeometry(stringArray[i], params);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 12;
  mesh.position.y = 0;
  mesh.name = stringArray[i];
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  array.push(mesh);
  scene.add(mesh);
}

//mid
for (let i = 0; i < stringArray.length; i++) {
  const geometry = new THREE.TextGeometry(stringArray[i], params);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 12;
  mesh.position.y = -10;
  mesh.name = stringArray[i];
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  array.push(mesh);
  scene.add(mesh);
}

//mid
for (let i = 0; i < stringArray.length; i++) {
  const geometry = new THREE.TextGeometry(stringArray[i], params);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 12;
  mesh.position.y = -20;
  mesh.name = stringArray[i];
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  array.push(mesh);
  scene.add(mesh);
}

for (let i = 0; i < stringArray.length; i++) {
  const geometry = new THREE.TextGeometry(stringArray[i], params);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 12;
  mesh.position.y = -30;
  mesh.name = stringArray[i];
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  array.push(mesh);
  scene.add(mesh);
}

for (let i = 0; i < stringArray.length; i++) {
  const geometry = new THREE.TextGeometry(stringArray[i], params);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 12;
  mesh.position.y = -40;
  mesh.name = stringArray[i];
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  array.push(mesh);
  scene.add(mesh);
}

const planeGeometry = new THREE.PlaneGeometry(100, 10, 32, 32);
const planeMaterial = new THREE.MeshStandardMaterial({ color: "red" });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
//scene.add(plane);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function moveStuffAround(array) {
  for (let i = 0; i < array.length; i++) {
    anime({
      targets: array[i].position,
      x: [
        { value: getRandomInt(300), duration: 1500, delay: 1500 },
        { value: getRandomInt(300), duration: 1500, delay: 1500 },
      ],
      y: [
        { value: getRandomInt(300), duration: 1500, delay: 1500 },
        { value: getRandomInt(300), duration: 1500, delay: 1500 },
      ],
      z: [
        { value: getRandomInt(300), duration: 1500, delay: 1500 },
        { value: getRandomInt(300), duration: 1500, delay: 1500 },
      ],
      easing: "easeInOutElastic(1, 2)",
      loop: true,
      direction: "alternate",
      duration: 9000,
      delay: anime.stagger(300, { easing: "easeOutQuad" }),
    });
  }
}

moveStuffAround(array);

function moveIndividual() {
  anime({
    targets: array[2].position,
    y: { value: 50, duration: 8000 },
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
  });
}
moveIndividual();

function movePlane() {
  anime({
    targets: plane.scale,
    y: [
      { value: 10, duration: 3000 },
      { value: 0, duration: 3000 },
    ],
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
  });
}
