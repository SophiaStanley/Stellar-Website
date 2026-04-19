<script>
// @ts-nocheck

    function changeProfile (memberName, buttonName) {
        document.getElementById("elodie").style.display = "none";
        document.getElementById("iris").style.display = "none";
        document.getElementById("enid").style.display = "none";
        document.getElementById("gwyn").style.display = "none";
        document.getElementById("ace").style.display = "none";

        document.getElementById("elodietab").style.backgroundColor = "#56a2f9";
        document.getElementById("iristab").style.backgroundColor = "#56a2f9";
        document.getElementById("enidtab").style.backgroundColor = "#56a2f9";
        document.getElementById("gwyntab").style.backgroundColor = "#56a2f9";
        document.getElementById("acetab").style.backgroundColor = "#56a2f9";

        document.getElementById(memberName).style.display = "block";
        document.getElementById(buttonName).style.backgroundColor = "#006be6";

    }
</script>

<h1>Meet the Members of Stellar*Connection!</h1>

<div class = "buttons">
    <button id = "elodietab" onclick = {() => changeProfile('elodie', 'elodietab')}>Elodie</button>
    <button id = "iristab" onclick = {() => changeProfile('iris', 'iristab')}>Iris</button>
    <button id = "enidtab" onclick = {() => changeProfile('enid', 'enidtab')}>Enid</button>
    <button id = "gwyntab" onclick = {() => changeProfile('gwyn', 'gwyntab')}>Gwyn</button>
    <button id = "acetab" onclick = {() => changeProfile('ace', 'acetab')}>Ace</button>
</div>

<div id="elodie" class = "profile">
    <img src= "/ElodieWeb.png" alt = "A professional photograph of Elodie, crouching down, one arm on her knees and the other up to her chin.">
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
    <img src= "/IrisWeb.png" alt = "Iris, in a black dress with yellow accents, has both of her arms raised over her head, giving a serious expression.">
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
    <img src= "/EnidWeb.png" alt = "Enid is turned to the side, looking back at the camera, her eyes facing elsewhere.">
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
    <img src= "/GwynWeb.png" alt = "Gwyn sitting down, one arm resting on his knee and the other on the ground.">
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
    <img src= "/AceWeb.png" alt = "Ace balancing on his right leg and left arm, his left leg kneeling on the ground and his right arm resting on his right knee.">
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
        color: white;
        background-color: #56a2f9;
    }

    #elodietab {
        background-color: #006be6;
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
        background-color: #d10073;
        display: block;
        overflow: auto;
    }

    #iris{
        background-color: #f6d75f;
        overflow: auto;
    }


    #enid {
        background-color: #0080b9;
        overflow: auto;
    }

    #gwyn {
        background-color: #009640;
        overflow: auto;
    }

    #ace {
        background-color: #ce0923;
        overflow: auto;
    }

    .profile {
        display: none;
        margin: 2px 2px;
        animation: 0.75s ease-out 0s 1 fadeIn;
    }

    h2 {
        padding-top: 10%;
        color: #000000;
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