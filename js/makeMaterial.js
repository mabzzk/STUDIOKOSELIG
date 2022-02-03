import * as THREE from "https://cdn.skypack.dev/three@0.130.0";
import { vertexShader } from "./vertex.js";
import { fragmentShader } from "./fragment.js";

export const complexMaterial = (texturePath) => {
  const texture = new THREE.TextureLoader().load(texturePath, (texture) => {
    texture.minFilter = THREE.NearestFilter;
  });

  const uniforms = {
    uTime: { value: 1.0 },
    uTexture: { value: texture },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    side: THREE.DoubleSide,
  });
  return material;
};

export const simpleMaterial = (hue) => {
  const basicMaterial = new THREE.MeshBasicMaterial({ color: hue });
  return basicMaterial;
};
