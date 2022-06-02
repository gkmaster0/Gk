
var glCanvas = document.getElementById("glcanvas");
var scena = new THREE.Scene({color: 0xffffff});
var perspCamera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 1, 1000);
perspCamera.position.set(1, 2, 10);
perspCamera.lookAt(0, window.innerWidth / window.innerHeight - 2, 0);
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scena, perspCamera);
}

var dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(10, 16, 20);
perspCamera.add(dirLight);
scena.add(perspCamera);

kolorFigury = new THREE.MeshPhongMaterial({color: 0xffffff,});

// Podstawa
postawaCylinder1 = new THREE.CylinderGeometry(0.6, 0.7, 0.3, 20);
podstawaDol = new THREE.Mesh(postawaCylinder1, kolorFigury);

segment1 = new THREE.Group();
segment1.add(podstawaDol);

segment1.position.set(0, -3.75, 0);
segment1.scale.set(3,2.5,2);

size = 0.2;

// środek
czlondolren = new THREE.CylinderGeometry(1.1, 1.4, 2, 20);
czlonDol = new THREE.Mesh(czlondolren, kolorFigury);

czlonDol.position.set(0, -2, -0);

czlongoraren = new THREE.CylinderGeometry(1.2, 1.1, 2, 20);
czlonGora = new THREE.Mesh(czlongoraren, kolorFigury);

var segment2 = new THREE.Group();
segment2.add(czlonDol);
segment2.add(czlonGora);

// obręcz
obreczren = new THREE.CylinderGeometry(1.5, 1.5, 0.25, 20);
obrecz = new THREE.Mesh(obreczren, kolorFigury);

segment3 = new THREE.Group();
segment3.add(obrecz);

segment3.position.set(0, 1.1, 0);

// góra
glowkaren = new THREE.CylinderGeometry(1, 1.45, 2, 20);
kolorFigury.side = THREE.DoubleSide;
glowka = new THREE.Mesh(glowkaren, kolorFigury);
glowka.position.set(0, 1.5, 0);
glowka.scale.set(1,-0.75,-1);

goraren = new THREE.CylinderGeometry(1, 1.45, 1, 20);
gora2 = new THREE.Mesh(goraren, kolorFigury);
gora2.position.set(0, 2.75, 0);

kulkaren = new THREE.SphereGeometry(Math.PI / 6, 10, 20);
kulka = new THREE.Mesh(kulkaren, kolorFigury);

kulka.position.set(0, 3.5, 0);

segment4 = new THREE.Group();
segment4.position.set(0, 0.5, 0);
segment4.add(glowka);
segment4.add(gora2);
segment4.add(kulka);


Figura = new THREE.Group();
Figura.add(segment1, segment2, segment3, segment4);
scena.add(Figura);

perspCamera.position.z = 5;
perspCamera.position.y = 2.5;

animate();
