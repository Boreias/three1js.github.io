const material1 = new THREE.MeshBasicMaterial(
    { 
        color: 0xFF0000,
        side:THREE.FrontSide
    }
);

const material2 = new THREE.MeshBasicMaterial(
    { 
        color: 0x00FF00,
        side:THREE.BackSide
    }
);

const material3 = new THREE.MeshBasicMaterial(
    { 
        color: 0x0000FF,
        side:THREE.DoubleSide
    }
);



const cone = new THREE.Mesh
(
    // raio altura SegmentosRaio SegmentosAltura
    new THREE.ConeBufferGeometry(
        1, 2, 20, 20
    ),
    material1
);

scene.add(cone);

const cube = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        5, 5, 5
    ),
    material2
);

scene.add(cube);

const sphere = new THREE.Mesh
(
    // Raio SegmentosLargura SegmentosAltura
    new THREE.SphereBufferGeometry(
        30, 30, 30
    ),
    material3
);

scene.add(sphere);

x3.add(cone, {label: 'cone'});
x3.add(cube, {label: 'cube'});
x3.add(sphere, {label: 'sphere'});

renderer.setAnimationLoop(() => {

    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
})
