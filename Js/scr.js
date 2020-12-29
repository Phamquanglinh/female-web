
    function openMenu() {
        document.getElementById("dropmenu").style.display="block";
        document.getElementById("action").innerHTML=
            '<div class="collspan-btn float-right open" id="close-btn" onclick="closeMenu()">\n' +
            '                    <span></span>\n' +
            '                    <span></span>\n' +
            '                    <span></span>\n' +
            '            </div>';
    }
    function closeMenu() {
        document.getElementById("dropmenu").style.display="none";
        document.getElementById("action").innerHTML=
            '<div class="collspan-btn float-right" id="close-btn" onclick="openMenu()">\n' +
            '                    <span></span>\n' +
            '                    <span></span>\n' +
            '                    <span></span>\n' +
            '            </div>';
    }