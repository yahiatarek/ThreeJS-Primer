import * as THREE from 'three';
import { OrbitControls } from '../../libs/three/examples/jsm/controls/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

		this.camera = new THREE.PerspectiveCamera(60, window.innerHeight/window.innerHeight, 0.1, 100)
		this.camera.position.set( 0, 0, 4 );

		this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xaaaaaa );

        this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setPixelRatio(window.devicePixelRatio)
		container.appendChild( this.renderer.domElement );

		this.renderer.setAnimationLoop(this.render.bind(this));
	}	
    
    resize(){

    }
    
	render( ) {   
		this.renderer.render( this.scene, this.camera );
    }
}

export { App };