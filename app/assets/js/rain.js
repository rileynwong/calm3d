// rain settings
var settings = {
  positionStyle    : Type.CUBE,
      positionBase     : new THREE.Vector3( 0, 0, 0 ),
      positionSpread   : new THREE.Vector3( 200, 200, 500 ),
 
      velocityStyle    : Type.CUBE,
      velocityBase     : new THREE.Vector3( 0, 0, -400 ),
      velocitySpread   : new THREE.Vector3( 10, 50, 10 ), 
      accelerationBase : new THREE.Vector3( 0, -10, 0 ),
       
      particleTexture : THREE.ImageUtils.loadTexture( 'assets/img/raindrop2flip.png' ),
 
      sizeBase    : 4.0,
      sizeSpread  : 2.0,
      colorBase   : new THREE.Vector3(0.66, 1.0, 0.7), // H,S,L
      colorSpread : new THREE.Vector3(0.00, 0.0, 0.2),
      opacityBase : 0.6,
 
      particlesPerSecond : 3000,
      particleDeathAge   : 1.0,  
      emitterDeathAge    : 60
};

// set up engine
var engine = new ParticleEngine();
engine.setValues( settings );
engine.initialize();

var render = function () {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  engine.update( 0.01 * 0.5);
}



