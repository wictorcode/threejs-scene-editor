import * as THREE from 'three'

export class eObject {
    private objectGeometry: THREE.BufferGeometry;
    private objectMaterial: THREE.Material;
    private objectMesh: THREE.Mesh;

    constructor(geometry: THREE.BufferGeometry, material: THREE.Material) {
        this.objectGeometry = geometry;
        this.objectMaterial = material
        this.objectMesh = new THREE.Mesh(this.objectGeometry, this.objectMaterial)
    }

    getGeometry(): THREE.BufferGeometry {
        return this.objectGeometry
    }

    getMaterial(): THREE.Material {
        return this.objectMaterial
    }

    getMesh(): THREE.Mesh {
        return this.objectMesh
    }
}