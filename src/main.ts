import { eObject } from './engine/eObject'
import { eScene } from './engine/eScene'
import * as THREE from 'three'
import { TextureDefinitions } from './engine/TextureDefs'

const scene = new eScene()
const newObject = new eObject(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({map: TextureDefinitions.ns_wood.wood_bark_1}))
const newObject2 = new eObject(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({map: TextureDefinitions.ns_wood.wood_bark_1}))

scene.addObjectToScene(newObject)
scene.addObjectToScene(newObject2)

setTimeout(() => {
  scene.removeObjectFromScene(newObject)
}, 3000)