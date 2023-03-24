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
    console.log("Expansion Started");
    var imgsrc = document.getElementById("mediaTitleImage" + n).src;
    var headingsrc = document.getElementById("mediaTitleHeading" + n).textContent;
    var summarysrc = document.getElementById("mediaTitleSummary" + n).textContent;
    var castsrc = document.getElementById("mediaTitleCast" + n).textContent;
    var genresrc = document.getElementById("mediaTitleGenre" + n).textContent;
    var sim1src = document.getElementById("similarTitle1" + n).textContent;
    var sim2src = document.getElementById("similarTitle2" + n).textContent;
    var div1 = document.getElementById('MediaTitle' + sim1src).innerHTML;
    var div2 = document.getElementById('MediaTitle' + sim2src).innerHTML;

    console.log('imgsrc: ' + imgsrc);
    console.log('headingsrc: ' + headingsrc);
    console.log('summarysrc: ' + summarysrc);
    console.log('castsrc: ' + castsrc);
    console.log('genresrc: ' + genresrc);
    console.log('sim1src: ' + sim1src);
    console.log('sim2src: ' + sim2src);

    document.getElementById('SimilarMediaTitle_0001').innerHTML = div1;
    document.getElementById('SimilarMediaTitle_0002').innerHTML = div2;
    document.getElementById("expandedTileImage").src = imgsrc;
    document.getElementById("mediaTileHeadingExpanded").textContent = headingsrc;
    document.getElementById("mediaTileSummaryExpanded").textContent = summarysrc;
    document.getElementById("mediaTileCastExpanded").textContent = castsrc;
    document.getElementById("mediaTileGenreExpanded").textContent = genresrc;

    var x = document.getElementById("overlay");
        x.style.display = "block";
        console.log('Tile ' + n + ' Expanded');
}
function closeTile() {
    console.log('Tile Closed');
    var x = document.getElementById("overlay");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function scrollRowHorrorPrev() {
    console.log('Row Scrolled Previous');
    var element = document.getElementById('rowHorrorStart');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function scrollRowHorrorNext() {
    console.log('Row Scrolled Next');
    var element = document.getElementById('rowHorrorEnd');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function scrollRowActionPrev() {
    console.log('Row Scrolled Previous');
    var element = document.getElementById('rowActionStart');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function scrollRowActionNext() {
    console.log('Row Scrolled Next');
    var element = document.getElementById('rowActionEnd');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function scrollRowDocPrev() {
    console.log('Row Scrolled Previous');
    var element = document.getElementById('rowDocStart');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function scrollRowDocNext() {
    console.log('Row Scrolled Next');
    var element = document.getElementById('rowDocEnd');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function scrollRowDramaPrev() {
    console.log('Row Scrolled Previous');
    var element = document.getElementById('rowDramaStart');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function scrollRowDramaNext() {
    console.log('Row Scrolled Next');
    var element = document.getElementById('rowDramaEnd');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
function resize_to_fit() {
    let fontSize = window.getComputedStyle(output).fontSize;
    output.style.fontSize = (parseFloat(fontSize) - 1) + 'px';

    if (output.clientHeight >= outputContainer.clientHeight) {
        resize_to_fit();
    }
}
function goHome() {
    location.href = "/";
}
function goSearch() {
    location.href = "/Search";
}
function goFavorites() {
    location.href = "/Favorites";
}
function goHorror() {
    location.href = "/HorrorCollection";
}
function goAction() {
    location.href = "/ActionCollection";
}
function goDocs() {
    location.href = "/DocsCollection";
}
function goDrama() {
    location.href = "/DramaCollection";
}
function liveSearch() {
    let cards = document.querySelectorAll('.movieTileMain');
    var cardsHidden = 0;
    console.log('Search Run');
    let search_query = document.getElementById("searchbox").value;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].textContent.toLowerCase()
            .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        }
        else {
            cards[i].classList.add("is-hidden");
            cardsHidden++;
        }
    }
    console.log('cardsHidden: ' + cardsHidden);
}