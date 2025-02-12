import * as THREE from 'three'
import { eObject } from './eObject';

/**
 * Wrapper class around Three's Scene class. Allows to easily add elements as well as other things such as the camera
 */
export class eScene {

    private scene = new THREE.Scene();
    private camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    private renderer = new THREE.WebGLRenderer();

    constructor() {
        this.scene = new THREE.Scene();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.shadowMap.enabled = true;
        document.body.appendChild( this.renderer.domElement );
        this.camera.position.z = 5;

        this.render();
    }

    public addObjectToScene(object: eObject) {
        this.scene.add(object.getMesh())
    }

    public removeObjectFromScene(object: eObject) {
        this.scene.remove(object.getMesh())
    }

    public render = () => {
        requestAnimationFrame( this.render );
        this.renderer.render( this.scene, this.camera );
    }
}
