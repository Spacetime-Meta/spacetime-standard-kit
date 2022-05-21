import { VirtualEnvironment } from '../../../js/VirtualEnvironment.js';

// start by creating a basic virtual environment
let virtualEnvironment = new VirtualEnvironment();

// then fill your world with the stuff you want
init();
function init() {
    virtualEnvironment.loadTerrain('../../../glb/terrains/spawnPlanet.glb', 0, -20, 0, "glb")
    virtualEnvironment.spawnPlayer('../../../glb/avatars/yBot.glb', 0, 50, 0)
}

if (!window.requestPostAnimationFrame) {
    window.requestPostAnimationFrame = function(task) {
        requestAnimationFrame(() => {
            setTimeout(task, 0);
        });
    }
}

function animate() {
    requestPostAnimationFrame(animate);

    virtualEnvironment.update();
}
requestPostAnimationFrame(animate);