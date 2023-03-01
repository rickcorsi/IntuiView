let mSwitch = new Boolean(true);
let tSwitch = new Boolean(true);
let gSwitch = new Boolean(true);
console.log('Default value of bool is', mSwitch);

function addWord() {
    var text = document.getElementById("wordInput").value;
    var tag = document.createElement("p");
    var text = document.createTextNode(text);
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
}
function toggleMovies() {
    if (mSwitch) {
        mSwitch = false;
        console.log('movies is', mSwitch);
        document.getElementById("btnMovies").className = "inputButtonsInactive";
    }
    else if (!mSwitch) {
        mSwitch = true;
        console.log('movies is', mSwitch);
        document.getElementById("btnMovies").className = "inputButtons";
    }
}
function toggleTV() {
    if (tSwitch) {
        tSwitch = false;
        console.log('tv is', tSwitch);
        document.getElementById("btnTV").className = "inputButtonsInactive";
    }
    else if (!tSwitch) {
        tSwitch = true;
        console.log('tv is', tSwitch);
        document.getElementById("btnTV").className = "inputButtons";
    }
}
function toggleGames() {
    if (gSwitch) {
        gSwitch = false;
        console.log('games is', gSwitch);
        document.getElementById("btnGames").className = "inputButtonsInactive";
    }
    else if (!gSwitch) {
        gSwitch = true;
        console.log('games is', gSwitch);
        document.getElementById("btnGames").className = "inputButtons";
    }
}
function toggleList() {
    var x = document.getElementById("divList");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
    var y = document.getElementById("btnViewList");
    if (y.value == "Hide List") {
        y.value = "View List";
        y.className = "inputButtonsInactive";
        console.log('Hello');
    }
    else {
        y.value = "Hide List";
        y.className = "inputButtons";
        console.log('Hello2');
    }
    console.log('List Toggled');
}
function expandTile(n) {
    var imgsrc = document.getElementById("mediaTileImage" + n).src;
    var headingsrc = document.getElementById("mediaTileHeading" + n).textContent;
    var summarysrc = document.getElementById("mediaTileSummary" + n).textContent;
    var castsrc = document.getElementById("mediaTileCast" + n).textContent;
    var genresrc = document.getElementById("mediaTileGenre" + n).textContent;

    console.log('imgsrc: ' + imgsrc);
    console.log('headingsrc: ' + headingsrc);
    console.log('summarysrc: ' + summarysrc);
    console.log('castsrc: ' + castsrc);
    console.log('genresrc: ' + genresrc);

    document.getElementById("expandedTileImage").src = imgsrc;
    document.getElementById("mediaTileHeadingExpanded").textContent = headingsrc;
    document.getElementById("mediaTileSummaryExpanded").textContent = summarysrc;
    document.getElementById("mediaTileCastExpanded").textContent = castsrc;
    document.getElementById("mediaTileGenreExpanded").textContent = genresrc;
    var x = document.getElementById("tileMain");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
        console.log('Tile ' + n + ' Expanded');
    }
}
function closeTile() {
    console.log('Tile Closed');
    var x = document.getElementById("tileMain");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}