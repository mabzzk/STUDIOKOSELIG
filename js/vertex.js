export const vertexShader = `
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;

  // merk: uTime er satt til 0 i material-konstruktøren..
  // så evt ha den ALLTID som * 1 her, og tweak i konstruktøren..
  // sikkert bedre..
  float time = uTime * 3.0;

  vec3 transformed = position;

  //her må vi inn med en bølgefunksjon for å få smooth waves... beveegelse!
  //transformed.y += cos(position.x + time );
  transformed.x += sin(position.x + time);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}

`;

export const brownianVertexShader = `

// Set the precision for data types used in this shader
precision highp float;
precision highp int;

varying vec2 vUv;

void main() {

    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}
`;
