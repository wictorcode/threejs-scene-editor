import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader();


export const TextureDefinitions = {
    ns_wood: {
        wood_bark_1: textureLoader.load("/assets/textures/wood_bark1.jpg")
    }
}