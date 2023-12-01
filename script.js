
// ------- LIST SECTION --------- //
const colours = ["Red", "Blue", "Green", "Orange", "Purple"]

const list =
    `<li id="list-item">${colours[0]}</li>
    <li id="list-item">${colours[1]}</li>
    <li id="list-item">${colours[2]}</li>
    <li id="list-item">${colours[3]}</li>
    <li id="list-item">${colours[4]}</li>`

const $list = document.getElementById('list') 
$list.innerHTML = $list.innerHTML + list

const $listItems = document.getElementById('list-item')

if(localStorage.getItem("list-item") != null){
    $listItems.value = localStorage.getItem("list-item")
    setList()
}

$listItems.onchange = function(){
    localStorage.setItem("list-item", $listItems.value)
    setList()
}

function setList(){
    if($listItems.value == "expanded"){
        document.li.style.width="100%";
    }
    else if($listItems.value == "condensed"){
        document.ul.style.width="50%";
    }
}

//----- PREFERENCES ------//

const $themes = document.getElementById('themes')

if(localStorage.getItem("themes") != null){
    $themes.value = localStorage.getItem("themes")
    setTheme()
}

$themes.onchange = function(){
    localStorage.setItem("themes", $themes.value)
    setTheme()
}

function setTheme(){
    if($themes.value == "light"){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
    else if($themes.value == "dark"){
        document.body.style.backgroundColor="rgb(3, 10, 25)";
        document.body.style.color="white";
    }
    else{
        document.body.style.backgroundColor="rgb(20, 80, 215)";
        document.body.style.color="black";
    }
}