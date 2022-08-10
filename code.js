const imageInput = document.querySelector("#imageInput");
const imageCanvas = document.querySelector("#imageCanvas");
const processingCanvas = document.querySelector("#processingCanvas");
const canvasContainer = document.querySelector("#canvasContainer");

const gridSettings = document.querySelectorAll(".gridSettings");
const renderSettings = document.querySelectorAll(".renderSettings");
const previewSettings = document.querySelectorAll(".previewSettings");

const loadingTileHeight = 44;
let processingTileHeight = loadingTileHeight;

const defaultGridWidth = 42;
const defaultGridHeight = 23;

let gridWidth = defaultGridWidth;
let gridHeight = defaultGridHeight;

let loaded = false;

processingCanvas.width = processingTileHeight * gridWidth;
processingCanvas.height = processingTileHeight * gridHeight;

let renderImage = null;
let settings = {};
let tileMap = [];

imageInput.addEventListener('change', updateImageSrc);

for (const gridSetting of gridSettings) {
    gridSetting.addEventListener('change', updateGridSize);
}
for (const renderSetting of renderSettings) {
    if (renderSetting.type == "range") {
        renderSetting.addEventListener('input', reRenderCanvases);
    }
    renderSetting.addEventListener('change', reRenderCanvases);
}
for (const previewSetting of previewSettings) {
    previewSetting.addEventListener('change', reRenderPreview);
}
for (const updater of document.querySelectorAll(".renderSettingsUpdater")) {
    updater.addEventListener('click', reRenderCanvases);
}

document.querySelector("#download").addEventListener('click', downloadLevel);

function updateGridSize() {
    loadSettings();

    gridWidth = settings.gridWidth;
    gridHeight = settings.gridHeight;

    tileMap = [];
    for (x = 0; x < gridWidth; x++) {
        tileMap.push([]);
        for (y = 0; y < gridHeight; y++) {
            tileMap[x].push(["00"]);
        }
    }

    processingCanvas.width = gridWidth * processingTileHeight;
    processingCanvas.height = gridHeight * processingTileHeight;

    resizeCanvas();

    reRenderCanvas(processingCanvas);
    reRenderCanvas(imageCanvas, true);
}

function updateImageSrc(e) {
    if (e.target.files.length === 0) {
        renderImage = null;
        reRenderCanvases();
        return;
    }

    renderImage = new Image();
    renderImage.src = URL.createObjectURL(e.target.files[0]);
    renderImage.onload = reRenderCanvases;
    console.log(e.target.files[0])
    let name = e.target.files[0].name;
    name = name.replace(/\.[^/.]+$/, "");
    document.getElementById("mapName").value = name;
}

function resizeCanvas() {
    let width = Math.min(window.innerWidth / 1.6)
    let height = width * (gridHeight/gridWidth);
    if (height > window.innerHeight * 0.75) {
        width = width * ((window.innerHeight * 0.75) / height);
        height = window.innerHeight * 0.75;
    }
    imageCanvas.width = width;
    imageCanvas.height = height;
    reRenderCanvas(imageCanvas, true);
}

function loadSetting(setting) {
    switch(setting.type) {
        case "checkbox":
            settings[setting.name] = setting.checked;
            break;
        case "radio":
            if (setting.checked) {
                settings[setting.name] = setting.value;
            }
            break;
        default:
            settings[setting.name] = setting.value;
    }
}

function loadSettings() {
    for (const gridSetting of gridSettings) {
        loadSetting(gridSetting);
    }
    for (const renderSetting of renderSettings) {
        loadSetting(renderSetting);
    }
    for (const previewSetting of previewSettings) {
        loadSetting(previewSetting);
    }
    console.log(settings);
}

function reRenderCanvases() {
    loadSettings();
    if (!settings.disableTileProcessing) {
        reRenderCanvas(processingCanvas);
    }
    reRenderCanvas(imageCanvas, true);
}

function reRenderPreview() {
    loadSettings();
    reRenderCanvas(imageCanvas, true);
}

function reRenderCanvas(canvas, decorate = false) {
    if (!decorate) {
        switch (settings.quality) {
            case "low":
                processingTileHeight = 12;
                break;
            case "mid":
                processingTileHeight = 22;
                break;
            case "full":
                processingTileHeight = loadingTileHeight;
                break;
        }
        canvas.width = processingTileHeight * gridWidth;
        canvas.height = processingTileHeight * gridHeight;
    }

    let ctx = canvas.getContext("2d");
    ctx.fillStyle = settings.fill ? 'black' : 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gridw = canvas.width / gridWidth;
    const gridh = canvas.height / gridHeight;

    if (renderImage) {
        drawImageToCanvas(ctx, gridw, gridh);
    }

    if (settings.showContrast || !decorate) {
        clampContrast(ctx);
    }

    if (decorate && settings.showTiles && !settings.disableTileProcessing) {
        drawTiles(ctx, gridw, gridh);
    }

    if (decorate && settings.showGrid) {
        drawGrid(ctx, gridw, gridh);
    }

    if (!decorate && loaded && renderImage && !settings.disableTileProcessing) {
        calculateTiles(ctx);
    }
}

function drawImageToCanvas(ctx, gridw, gridh) {
    let canvas = ctx.canvas;
    let scale = Math.min(canvas.width/renderImage.width,
        canvas.height/renderImage.height) * (settings.scale / 100);

    ctx.save();

    if (settings.xOffset || settings.xAdjust || settings.yOffset || settings.yAdjust) {
        ctx.translate(gridw * (Number(settings.xOffset) + Number(settings.xAdjust)),
            gridh * (Number(settings.yOffset) + Number(settings.yAdjust)));
    }

    if (settings.rotation) {
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(settings.rotation * (Math.PI/180));
        ctx.translate(-canvas.width/2, -canvas.height/2);
    }

    let w = renderImage.width * scale;
    let h = renderImage.height * scale;
    let x = (canvas.width - (w)) / 2;
    let y = (canvas.height - (h)) / 2;

    ctx.drawImage(renderImage, x, y, w, h);

    ctx.restore();
}

function clampContrast(ctx) {
    let canvas = ctx.canvas;
    let imgd = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let id = imgd.data;
    for (i = 0; i < imgd.width * imgd.height * 4; i += 4) {
        const r = id[i] / 255, g = id[i + 1] / 255, b = id[i + 2] / 255, a = id[i + 3] / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const l = ((max + min) / 2 * a);
        if (l <= (settings.lightnessSlider/255)) {
            id[i] = settings.invert ? 255 : 0;
            id[i + 1] = settings.invert ? 255 : 0;
            id[i + 2] = settings.invert ? 255 : 0;
        } else {
            id[i] = settings.invert ? 0 : 255;
            id[i + 1] = settings.invert ? 0 : 255;
            id[i + 2] = settings.invert ? 0 : 255;
        }
        id[i + 3] = 255;
    }
    ctx.putImageData(imgd, 0, 0);
}

function drawTiles(ctx, gridw, gridh) {
    for (x = 0; x < gridWidth; x++) {
        for (y = 0; y < gridHeight; y++) {
            let img = tileData[tileMap[x][y][0]].img;
            if (img && img.complete) {
                ctx.drawImage(img, x * gridw, y * gridh, gridw, gridh);
            }
        }
    }
}

function drawGrid(ctx, gridw, gridh) {
    let canvas = ctx.canvas;
    ctx.beginPath();
    ctx.strokeStyle = 'gray';
    for (i = 1; i < gridWidth; i++) {
        ctx.moveTo(gridw * i, 0);
        ctx.lineTo(gridw * i, canvas.height);
    }
    for (i = 1; i < gridHeight; i++) {
        ctx.moveTo(0, gridh * i);
        ctx.lineTo(canvas.width, gridh * i);
    }
    ctx.stroke();
}

let loadedImages = 0;

function loadImages() {
    let loadingCanvas = document.querySelector("#loadingCanvas");
    const loadContext = loadingCanvas.getContext("2d");
    loadContext.fillStyle = 'red';
    loadContext.fillRect(0, 0, loadingCanvas.width, loadingCanvas.height);
    for (i = 0; i < 34; i++) {
        let str = intToHexString(i);
        const inputImage = new Image();
        const x = i * processingTileHeight;
        inputImage.onload = () => {
            loadContext.drawImage(inputImage, x, 0)
            loadedImages++;
            if (loadedImages === 34) {
                processLoadedCanvas();
            }
        };
        inputImage.src = tileData[str].src;
        tileData[str].img = inputImage;
    }
}

function calculateTiles(ctx) {
    for (x = 0; x < gridWidth; x++) {
        for (y = 0; y < gridHeight; y++) {
            let section = ctx.getImageData(x * processingTileHeight, y * processingTileHeight, processingTileHeight, processingTileHeight);
            const scores = [];
            const maxScore = processingTileHeight * processingTileHeight;
            for (const key in tileData) {
                if (scores.some((s) => s.tile === key)) {
                    continue;
                }
                const tile = tileData[key].data.data;
                let score = 0;
                switch (settings.quality) {
                    case "full":
                        for (i = 0; i < processingTileHeight * processingTileHeight * 4; i += 4) {
                            if (tile[i] === section.data[i]) {
                                score++;
                            }
                        }
                        break;
                    case "mid":
                        for (i = 0; i < mediumQuality.length; i++) {
                            if (tile[mediumQuality[i]] === section.data[i * 4]) {
                                score++;
                            }
                        }
                        break;
                    case "low":
                        for (i = 0; i < lowQuality.length; i++) {
                            if (tile[lowQuality[i]] === section.data[i * 4]) {
                                score++;
                            }
                        }
                        break;
                }
                if (key === "00") {
                    if (score == 0) {
                        for (const key_ in tileData) {
                            scores.push({tile: key_, score: tileProcessing[key_].fill})
                        }
                        break;
                    }
                    if (score == maxScore) {
                        for (const key_ in tileData) {
                            scores.push({tile: key_, score: 1 - tileProcessing[key_].fill})
                        }
                        break;
                    }
                }
                scores.push({tile: key, score: score/maxScore});
                if ((tileProcessing[key].inv || settings.quality !== "full")) {
                    const invkey = tileProcessing[key].inv ?? tileProcessing[key].badinv;
                    if (!scores.some((s) => s.tile === invkey)) {
                        scores.push({tile: invkey, score: 1 - score/maxScore})
                    }
                }
            }
            let sorted = scores
                .sort((a, b) => b.score - a.score)
                .map((a) => a.tile);
            tileMap[x][y] = sorted;
        }
    }
}

function generateLevel() {
    let mapArray = new Uint8ClampedArray(0x4CE);
    // Magic number?
    mapArray[0x00] = 0x06;
    // File size
    mapArray[0x04] = 0Xce;
    mapArray[0x05] = 0x04;
    // Unknown
    for (var i = 0x08; i <= 0x0B; i++) {
        mapArray[i] = 0xFF;
    }
    // Game Mode
    mapArray[0x0C] = 0x04;
    // Unknown
    mapArray[0x10] = 0x25;
    for (var i = 0x14; i <= 0x17; i++) {
        mapArray[i] = 0xFF;
    }
    // Map name
    let name = document.getElementById("mapName").value
    if (!name) {
        name = "untitled image level";
    }
    for (var i = 0; i < name.length && i < 127; i++) {
        mapArray[0x26 + i] = name.charCodeAt(i);
    }
    // Map Tiles
    for (var y = 0; y < gridHeight; y++) {
        for (var x = 0; x < gridWidth; x++) {
            mapArray[0xB8 + x + (y * defaultGridWidth)] = parseInt(tileMap[x][y]);
        }
    }
    return mapArray;
}

function downloadLevel() {
    let bytes = generateLevel();
    let blob = new Blob([bytes], {type: "application/octet-stream"});
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    let name = document.getElementById("mapName").value;
    if (!name) {
        name = "untitled image level";
    }
    link.download = name;
    console.log(link.download);
    link.click();
}

function processLoadedCanvas() {
    let loadingCanvas = document.querySelector("#loadingCanvas");
    const loadContext = loadingCanvas.getContext("2d");
    for (i = 0; i < 34; i++) {
        let str = intToHexString(i);
        tileData[str].data = loadContext.getImageData(i * processingTileHeight, 0, processingTileHeight, processingTileHeight);
    }
    loaded = true;
}

function intToHexString(i) {
    let str = i.toString(16).toUpperCase();
    if (str.length === 1) {
        str = "0" + str;
    }
    return str;
}

window.onresize = resizeCanvas;

window.addEventListener('load', (e) => {
    updateGridSize();

    loadImages();
});
