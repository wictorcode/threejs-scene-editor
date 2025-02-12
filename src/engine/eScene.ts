import * as THREE from 'three'
import { eObject } from './eObject';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Wrapper class around Three's Scene class. Allows to easily add elements as well as other things such as the camera
 */
export class eScene {

    private scene = new THREE.Scene();
    private camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    private renderer = new THREE.WebGLRenderer();
    private controls = new OrbitControls(this.camera, this.renderer.domElement)
    constructor() {
        this.scene = new THREE.Scene();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.shadowMap.enabled = true;
        document.body.appendChild( this.renderer.domElement );
        this.camera.position.z = 5;

        this.render();
    }

    /**
     * Add an object to the scene
     * @param object The Object's mesh you want to add to the scene
     */
    public addObjectToScene(object: eObject) {
        this.scene.add(object.getMesh())
    }

    /**
     * Remove an object from the scene
     * @param object The Object's mesh you want to remove to the scene
     */
    public removeObjectFromScene(object: eObject) {
        this.scene.remove(object.getMesh())
    }

    public render = () => {
        requestAnimationFrame( this.render );
        this.renderer.render( this.scene, this.camera );
    }
}
