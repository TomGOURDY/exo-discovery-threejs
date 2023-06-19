import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

// Scene 
const scene = new THREE.Scene(); 

// Plan
const planeGeometry = new THREE.PlaneGeometry( 15, 15 ); 
const planeMaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00} ); 
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotateOnAxis 
scene.add( plane );


//Spheres 

const sphere1Geometry = new THREE.SphereGeometry( 1, 30, 30 ); 
const sphere1Material = new THREE.MeshPhongMaterial( {color: 0xE26348} ); 
const sphere1 = new THREE.Mesh( sphere1Geometry, sphere1Material ); 
sphere1.position.x= -3
sphere1.position.y= 6
sphere1.position.z= 1
scene.add( sphere1 );

const sphere2Geometry = new THREE.SphereGeometry( 2, 30, 30 ); 
const sphere2Material = new THREE.MeshPhongMaterial( {color: 0x792E81} ); 
const sphere2 = new THREE.Mesh( sphere2Geometry, sphere2Material ); 
sphere2.position.x= 4
sphere2.position.y= -6
sphere2.position.z= 2
scene.add( sphere2 );

const sphere3Geometry = new THREE.SphereGeometry( 3, 30, 30 ); 
const sphere3Material = new THREE.MeshPhongMaterial( {color: 0xA2C8EE} ); 
const sphere3 = new THREE.Mesh( sphere3Geometry, sphere3Material ); 
sphere3.position.x= 0
sphere3.position.y= 0
sphere3.position.z= 3
scene.add( sphere3 );


// Light

const light = new THREE.AmbientLight( 0xffffff, 0.3 ); // soft white light
scene.add( light );

// Sizes
const sizes = {
    width: 800, 
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 4)
scene.add( camera );

// Renderer 
const canvas = document.querySelector(".webgl"); 
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize( sizes.width, sizes.height );

// Controls
const controls = new OrbitControls( camera, canvas ) 
controls.enableDamping = true

// Animate
const animate = () => {

    // plane.rotation.x += 0.01
    // plane.rotation.z += 0.01
    controls.update()

    renderer.render( scene, camera );

    window.requestAnimationFrame(animate)
}

animate()