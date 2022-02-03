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
const material = simpleMaterial(white);
const material2 = simpleMaterial(white);
const material3 = simpleMaterial(yellow);
//const material = brownianMaterial();
const scene = setupScene(container, material);
scene.background = new THREE.Color("black");

const fontLoader = new THREE.FontLoader();
const font = await new Promise((res) =>
  fontLoader.load("fonts/gerst.json", res)
);

const params = {
  font,
  size: 10,
  height: 5,
  curveSegments: 300,
  bevelEnabled: false,
};

let array = [];

const string = "Music Norway";
let stringArray = string.split("");
console.log(stringArray[2]);

const geometry1 = new THREE.TextBufferGeometry("N ", params);
const geometry2 = new THREE.TextBufferGeometry("ORWAY", params);

const mesh1 = new THREE.Mesh(geometry1, material);
const mesh2 = new THREE.Mesh(geometry2, material);

mesh1.position.x = 0;
mesh2.position.x = 10;

scene.add(mesh1, mesh2);

const planeGeometry = new THREE.BoxBufferGeometry(1, 1, 5);
const planeMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
scene.add(plane);
plane.position.x = 10;
plane.position.y = 0;
plane.position.z = 3;

function movePlane() {
  anime({
    targets: plane.scale,
    x: [
      { value: 50, duration: 500, endDelay: 1000 },
      { value: 0, duration: 500, endDelay: 1000 },
    ],
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
  });
  anime({
    targets: mesh1.position,
    x: [
      { value: -30, duration: 500, endDelay: 1000 },
      { value: 0, duration: 500, endDelay: 1000 },
    ],
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
  });
  anime({
    targets: mesh2.position,
    x: [
      { value: 40, duration: 500, endDelay: 1000 },
      { value: 10, duration: 500, endDelay: 1000 },
    ],
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
  });
}
movePlane();
