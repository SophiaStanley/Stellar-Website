<script>
// @ts-nocheck

    function changeProfile (memberName) {
        document.getElementById("elodie").style.display = "none";
        document.getElementById("iris").style.display = "none";
        document.getElementById("enid").style.display = "none";
        document.getElementById("gwyn").style.display = "none";
        document.getElementById("ace").style.display = "none";

        document.getElementById(memberName).style.display = "block";


    }
</script>
<h1>Meet the Members of Stellar*Connection!</h1>

<div id="elodie" class = "profile">
    <img src= "/ElodieTemp.png" alt = "Temporary">
    <h2>Elodie</h2>
    <ul>
        <li>Positon: Main Vocals</li>
        <li>Age: 20</li>
        <li>Birthday: July 14th</li>
        <li>Height: 5'5</li>
        <li>Blood Type: A</li>
        <li>Colour: Pink</li>
    </ul>
</div>

<div id="iris" class = "profile">
    <img src= "/IrisTemp.png" alt = "Temporary">
    <h2>Iris</h2>
    <ul>
        <li>Positon: Leader</li>
        <li>Age: 27</li>
        <li>Birthday: October 4th</li>
        <li>Height: 5'10</li>
        <li>Blood Type: O</li>
        <li>Colour: Yellow</li>
    </ul>
</div>

<div id = "enid" class="profile">
    <img src= "/EnidTemp.png" alt = "Temporary">
    <h2>Enid</h2>
    <ul>
        <li>Positon: Main Dancer</li>
        <li>Age: 22</li>
        <li>Birthday: September 15th</li>
        <li>Height: 5'2</li>
        <li>Blood Type: O</li>
        <li>Colour: Blue</li>
    </ul>
</div>

<div id ="gwyn" class="profile">
    <img src= "/GwynTemp.png" alt = "Temporary">
    <h2>Gwyn</h2>
    <ul>
        <li>Positon: All-Rounder</li>
        <li>Age: 22</li>
        <li>Birthday: August 16th</li>
        <li>Height: 5'5</li>
        <li>Blood Type: B</li>
        <li>Colour: Green</li>
    </ul>
</div>

<div id = "ace" class="profile">
    <img src= "/AceTemp.png" alt = "Temporary">
    <h2>Ace</h2>
    <ul>
        <li>Positon: Visual</li>
        <li>Age: 25</li>
        <li>Birthday: June 6th</li>
        <li>Height: 5'10</li>
        <li>Blood Type: AB</li>
        <li>Colour: Red</li>
    </ul>
</div>

<div class = "buttons">
    <button class = "tabs" onclick = {() => changeProfile('elodie')}>Elodie</button>
    <button class = "tabs" onclick = {() => changeProfile('iris')}>Iris</button>
    <button class = "tabs" onclick = {() => changeProfile('enid')}>Enid</button>
    <button class = "tabs" onclick = {() => changeProfile('gwyn')}>Gwyn</button>
    <button class = "tabs" onclick = {() => changeProfile('ace')}>Ace</button>
</div>
<style>

    button {
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
    }

    button:hover {
        background-color: "#ccc";
    }
    img {
        height: 10%;
        width: 10%;
    }
    li {
        list-style-type: none;
    }
    #elodie {
        background-color: magenta;
        display: block;
    }

    #iris{
        background-color: yellow;
    }


    #enid {
        background-color: cyan;
    }

    #gwyn {
        background-color: green;
    }

    #ace {
        background-color: red;
    }

    .profile {
        display: none;
        margin: 2px 16px;
    }
</style>