import * as THREE from "three";
import Experience from "../Experience";
export default class Camera{
    constructor(){
        this.experience=new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.createPerspectiveCamera();
        this.createOrtherographicCamera();
    }
    createPerspectiveCamera(){
        this.perspectiveCamera =new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        )
        this.scene.add(this.perspectiveCamera)
        this.perspectiveCamera.position.z = 5
    }
    createOrtherographicCamera(){
        this.frustrum = 5
        this.ortherographicCamera =new THREE.OrthographicCamera(
          (-this.sizes.aspect*this.sizes.frustrum)/2,
          (this.sizes.aspect*this.sizes.frustrum)/2,
            this.sizes.frustrum/2,
            -this.sizes.frustrum/2,
            -100,
            100
        
        )
        this.scene.add(this.ortherographicCamera)
    }
    resize(){
        this.perspectiveCamera.aspect = this.sizes.aspect
        this.perspectiveCamera.updateProjectionMatrix()
        this.ortherographicCamera.left= (-this.sizes.aspect*this.sizes.frustrum)/2
        this.ortherographicCamera.right= (this.sizes.aspect*this.sizes.frustrum)/2,
        this.ortherographicCamera.top=  this.sizes.frustrum/2,
        this.ortherographicCamera.bottom  =-this.sizes.frustrum/2,
        this.ortherographicCamera.updateProjectionMatrix()

    }
    update(){

    }
}