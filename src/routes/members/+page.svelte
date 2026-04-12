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

<div class = "buttons">
    <button class = "tabs" onclick = {() => changeProfile('elodie')}>Elodie</button>
    <button class = "tabs" onclick = {() => changeProfile('iris')}>Iris</button>
    <button class = "tabs" onclick = {() => changeProfile('enid')}>Enid</button>
    <button class = "tabs" onclick = {() => changeProfile('gwyn')}>Gwyn</button>
    <button class = "tabs" onclick = {() => changeProfile('ace')}>Ace</button>
</div>

<div id="elodie" class = "profile">
    <img src= "/ElodieTemp.png" alt = "Temporary">
    <h2>Elodie</h2>
    <ul>
        <li>Position: Main Vocals</li>
        <li>Age: 20</li>
        <li>Birthday: July 14th</li>
        <li>Zodiac Sign: Cancer</li>
        <li>Height: 5'5</li>
        <li>Blood Type: A</li>
        <li>Colour: Pink</li>
        <li>Connection: Talent Show Contestant</li>
    </ul>
</div>

<div id="iris" class = "profile">
    <img src= "/IrisTemp.png" alt = "Temporary">
    <h2>Iris</h2>
    <ul>
        <li>Position: Leader</li>
        <li>Age: 27</li>
        <li>Birthday: October 4th</li>
        <li>Zodiac Sign: Libra</li>
        <li>Height: 5'10</li>
        <li>Blood Type: O</li>
        <li>Colour: Yellow</li>
        <li>Connection: Model, Solo Pop Star</li>
    </ul>
</div>

<div id = "enid" class="profile">
    <img src= "/EnidTemp.png" alt = "Temporary">
    <h2>Enid</h2>
    <ul>
        <li>Position: Main Dancer</li>
        <li>Age: 22</li>
        <li>Birthday: September 15th</li>
        <li>Zodiac Sign: Virgo</li>
        <li>Height: 5'2</li>
        <li>Blood Type: O</li>
        <li>Colour: Blue</li>
        <li>Connection: Dance Troupe Member</li>
    </ul>
</div>

<div id ="gwyn" class="profile">
    <img src= "/GwynTemp.png" alt = "Temporary">
    <h2>Gwyn</h2>
    <ul>
        <li>Position: All-Rounder</li>
        <li>Age: 22</li>
        <li>Birthday: August 16th</li>
        <li>Zodiac Sign: Leo</li>
        <li>Height: 5'5</li>
        <li>Blood Type: B</li>
        <li>Colour: Green</li>
        <li>Connection: Former Boyband Member</li>
    </ul>
</div>

<div id = "ace" class="profile">
    <img src= "/AceTemp.png" alt = "Temporary">
    <h2>Ace</h2>
    <ul>
        <li>Position: Visual</li>
        <li>Age: 25</li>
        <li>Birthday: June 6th</li>
        <li>Zodiac Sign: Gemini</li>
        <li>Height: 5'10</li>
        <li>Blood Type: AB</li>
        <li>Colour: Red</li>
        <li>Connection: Actor</li>
    </ul>
</div>

<style>

    button {
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
        background-color: #e6d7ba;
    }

    button:hover {
        background-color: #c7b593;
    }
    img {
        height: 30%;
        width: 30vw;
        float: left;
        padding-left: 10vh;
    }
    li {
        list-style-type: none;
    }
    #elodie {
        background-color: magenta;
        display: block;
        overflow: auto;
    }

    #iris{
        background-color: yellow;
        overflow: auto;
    }


    #enid {
        background-color: cyan;
        overflow: auto;
    }

    #gwyn {
        background-color: green;
        overflow: auto;
    }

    #ace {
        background-color: red;
        overflow: auto;
    }

    .profile {
        display: none;
        margin: 2px 2px;
        animation: 0.75s ease-out 0s 1 fadeIn;
    }

    h2 {
        padding-top: 10%;
    }

    
    @keyframes fadeIn {
        0% {
          opacity: 0%;
        }
        100% {
          opacity: 100%;
        }
    }
</style>