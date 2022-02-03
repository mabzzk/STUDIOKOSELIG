import * as THREE from "https://cdn.skypack.dev/three@0.130.0";
import { brownianVertexShader } from "./vertex.js";
import { brownianFragmentShader } from "./fragment.js";

export const brownianMaterial = () => {
  /*   const texture = new THREE.TextureLoader().load(texturePath, (texture) => {
    texture.minFilter = THREE.NearestFilter;
  }); */

  const uniforms = {
    time: { value: 1.0 },
    permutations: { value: 1 },
    iterations: { value: 2.0 },
    uvScale: { value: { x: 0.05, y: 0.05 } },
    color1: { value: new THREE.Color("red") },
    color2: { value: new THREE.Color("white") },
    color3: { value: new THREE.Color("pink") },
    brightness: { value: 1.6 },
    speed: { value: 1.0 },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader: brownianVertexShader,
    fragmentShader: brownianFragmentShader,
    uniforms,
    transparent: true,
    side: THREE.DoubleSide,
  });
  return material;
};
