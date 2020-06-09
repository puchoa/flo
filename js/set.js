function setDivision() {
    console.log("set division");
    var e = document.getElementById("division");
    var divString = e.options[e.selectedIndex].text;
    console.log(divString);
    $idStartEnd.division = divString;
}

function setRank() {
    console.log("set rank");
    var e = document.getElementById("belt");
    var beltString = e.options[e.selectedIndex].text;
    console.log(beltString);
    $idStartEnd.rank = beltString;

    /*
    Sets beltString to lowercase then splits at the space and stores the first value
     */
    beltString = beltString.toLowerCase();
    beltString = beltString.split(" ");
    beltString = beltString[0];

    var p1 = document.getElementById("inputP1");
    var p2 = document.getElementById("inputP2");

    p1.value = p1.defaultValue;
    p2.value = p1.defaultValue;

    document.getElementById("inputP1").setAttribute("list", beltString);
    document.getElementById("inputP2").setAttribute("list", beltString);
}




function setMode() {
    /*
    Creates pull down menu for expert mode
    */
    if (document.getElementById("modes").value === "expert") {
        /*
        For player 1
        */
        var d = document.getElementById("dd4Player1");
        var dv = document.createElement("div");
        dv.className = "dropdown-content mBtn";
        dv.id = "drop4p1";

        var a1 = document.createElement("button");
        a1.className = "unstyled-button";
        a1.setAttribute("onclick", "sMountP1()");
        a1.value = "mount";
        a1.textContent = "Mount";

        var a2 = document.createElement("button");
        a2.className = "unstyled-button";
        a2.value = "backmount";
        a2.setAttribute("onclick", "sbMountP1()");
        a2.textContent = "Back Mount";

        var a3 = document.createElement("button");
        a3.className = "unstyled-button";
        a3.setAttribute("onclick", "sbControltP1()");
        a3.value = "backcontrol";
        a3.textContent = "Back Control";

        dv.appendChild(a1);
        dv.appendChild(a2);
        dv.appendChild(a3);

        d.appendChild(dv);

        var d2 = document.getElementById("dd2Player1");
        var dv2 = document.createElement("div");
        dv2.className = "dropdown-content twoBtn";
        dv2.id = "drop2p1";

        var aa1 = document.createElement("button");
        aa1.className = "unstyled-button";
        aa1.setAttribute("onclick", "stdP1()");
        aa1.value = "takedown";
        aa1.textContent = "Takedown";

        var aa2 = document.createElement("button");
        aa2.className = "unstyled-button";
        aa2.setAttribute("onclick", "sbsweepP1()");
        aa2.value = "sweep";
        aa2.textContent = "Sweep";

        var aa3 = document.createElement("button");
        aa3.className = "unstyled-button";
        aa3.setAttribute("onclick", "skneeP1()");
        aa3.value = "knee";
        aa3.textContent = "Knee on belly";

        dv2.appendChild(aa1);
        dv2.appendChild(aa2);
        dv2.appendChild(aa3);

        d2.appendChild(dv2);



        var sub = document.getElementById("subPlayer1");
        var subDv = document.createElement("div");
        subDv.className = "dropdown-content sub";
        subDv.id = "dropSubp1";

        var subA1 = document.createElement("button");
        subA1.className = "unstyled-button";
        subA1.setAttribute("onclick", "sub(\"backChoke\", \"p1\")");
        subA1.value = "backChoke";
        subA1.textContent = "Choke From Back";

        var subA2 = document.createElement("button");
        subA2.className = "unstyled-button";
        subA2.setAttribute("onclick", "sub(\"armbar\", \"p1\")");
        subA2.value = "armbar";
        subA2.textContent = "Armbar";

        var subA3 = document.createElement("button");
        subA3.className = "unstyled-button";
        subA3.setAttribute("onclick", "sub(\"kimuraAmericana\", \"p1\")");
        subA3.value = "kimuraAmericana";
        subA3.textContent = "Kimura / Americana";

        var subA4 = document.createElement("button");
        subA4.className = "unstyled-button";
        subA4.setAttribute("onclick", "sub(\"omoplata\", \"p1\")");
        subA4.value = "omoplata";
        subA4.textContent = "Omoplata";

        var subA5 = document.createElement("button");
        subA5.className = "unstyled-button";
        subA5.setAttribute("onclick", "sub(\"barataplata\", \"p1\")");
        subA5.value = "barataplata";
        subA5.textContent = "Barataplata";

        var subA6 = document.createElement("button");
        subA6.className = "unstyled-button";
        subA6.setAttribute("onclick", "sub(\"collarBottom\", \"p1\")");
        subA6.value = "collarBottom";
        subA6.textContent = "Cross Collar Bottom";

        var subA7 = document.createElement("button");
        subA7.className = "unstyled-button";
        subA7.setAttribute("onclick", "sub(\"collarTop\", \"p1\")");
        subA7.value = "collarTop";
        subA7.textContent = "Cross Collar Top";

        var subA8 = document.createElement("button");
        subA8.className = "unstyled-button";
        subA8.setAttribute("onclick", "sub(\"loopChoke\", \"p1\")");
        subA8.value = "loopChoke";
        subA8.textContent = "Loop Choke";

        var subA8 = document.createElement("button");
        subA8.className = "unstyled-button";
        subA8.setAttribute("onclick", "sub(\"neckChoke\", \"p1\")");
        subA8.value = "neckChoke";
        subA8.textContent = "Neck Choke";

        var subA9 = document.createElement("button");
        subA9.className = "unstyled-button";
        subA9.setAttribute("onclick", "sub(\"wristLock\", \"p1\")");
        subA9.value = "wristLock";
        subA9.textContent = "Wrist Lock";

        var subA10 = document.createElement("button");
        subA10.className = "unstyled-button";
        subA10.setAttribute("onclick", "sub(\"kneebar\", \"p1\")");
        subA10.value = "kneebar";
        subA10.textContent = "Kneebar";

        var subA11 = document.createElement("button");
        subA11.className = "unstyled-button";
        subA11.setAttribute("onclick", "sub(\"triangle\", \"p1\")");
        subA11.value = "triangle";
        subA11.textContent = "Triangle";

        var subA12 = document.createElement("button");
        subA12.className = "unstyled-button";
        subA12.setAttribute("onclick", "sub(\"footLackAnkleLock\", \"p1\")");
        subA12.value = "footLackAnkleLock";
        subA12.textContent = "Footlack / Ankle Lock";

        var subA13 = document.createElement("button");
        subA13.className = "unstyled-button";
        subA13.setAttribute("onclick", "sub(\"other\", \"p1\")");
        subA13.value = "other";
        subA13.textContent = "Other";



        subDv.appendChild(subA1);
        subDv.appendChild(subA2);
        subDv.appendChild(subA3);
        subDv.appendChild(subA4);
        subDv.appendChild(subA5);
        subDv.appendChild(subA6);
        subDv.appendChild(subA7);
        subDv.appendChild(subA8);
        subDv.appendChild(subA9);
        subDv.appendChild(subA10);
        subDv.appendChild(subA11);
        subDv.appendChild(subA12);
        subDv.appendChild(subA13);

        sub.appendChild(subDv);

        /*
        For player 2
        */
       var dp2 = document.getElementById("dd4Player2");
       var dvp2 = document.createElement("div");
       dvp2.className = "dropdown-content mBtn";
       dvp2.id = "drop4p2";

       var a1p2 = document.createElement("button");
       a1p2.className = "unstyled-button";
       a1p2.setAttribute("onclick", "sMountP2()");
       a1p2.value = "mount";
       a1p2.textContent = "Mount";

       var a2p2 = document.createElement("button");
       a2p2.className = "unstyled-button";
       a2p2.value = "backmount";
       a2p2.setAttribute("onclick", "sbMountP2()");
       a2p2.textContent = "Back Mount";

       var a3p2 = document.createElement("button");
       a3p2.className = "unstyled-button";
       a3p2.setAttribute("onclick", "sbControltP2()");
       a3p2.value = "backcontrol";
       a3p2.textContent = "Back Control";

       dvp2.appendChild(a1p2);
       dvp2.appendChild(a2p2);
       dvp2.appendChild(a3p2);

       dp2.appendChild(dvp2);

       var d2p2 = document.getElementById("dd2Player2");
        var dv2p2 = document.createElement("div");
        dv2p2.className = "dropdown-content twoBtn";
        dv2p2.id = "drop2p2";

        var aa1p2 = document.createElement("button");
        aa1p2.className = "unstyled-button";
        aa1p2.setAttribute("onclick", "stdP2()");
        aa1p2.value = "takedown";
        aa1p2.textContent = "Takedown";

        var aa2p2 = document.createElement("button");
        aa2p2.className = "unstyled-button";
        aa2p2.setAttribute("onclick", "sbsweepP2()");
        aa2p2.value = "sweep";
        aa2p2.textContent = "Sweep";

        var aa3p2 = document.createElement("button");
        aa3p2.className = "unstyled-button";
        aa3p2.setAttribute("onclick", "skneeP2()");
        aa3p2.value = "knee";
        aa3p2.textContent = "Knee on belly";

        dv2p2.appendChild(aa1p2);
        dv2p2.appendChild(aa2p2);
        dv2p2.appendChild(aa3p2);

        d2p2.appendChild(dv2p2);


        var p2sub = document.getElementById("subPlayer2");
        var p2subDv = document.createElement("div");
        p2subDv.className = "dropdown-content sub";
        p2subDv.id = "dropSubp2";

        var p2subA1 = document.createElement("button");
        p2subA1.className = "unstyled-button";
        p2subA1.setAttribute("onclick", "sub(\"backChoke\", \"p2\")");
        p2subA1.value = "backChoke";
        p2subA1.textContent = "Choke From Back";

        var p2subA2 = document.createElement("button");
        p2subA2.className = "unstyled-button";
        p2subA2.setAttribute("onclick", "sub(\"armbar\", \"p2\")");
        p2subA2.value = "armbar";
        p2subA2.textContent = "Armbar";

        var p2subA3 = document.createElement("button");
        p2subA3.className = "unstyled-button";
        p2subA3.setAttribute("onclick", "sub(\"kimuraAmericana\", \"p2\")");
        p2subA3.value = "kimuraAmericana";
        p2subA3.textContent = "Kimura / Americana";

        var p2subA4 = document.createElement("button");
        p2subA4.className = "unstyled-button";
        p2subA4.setAttribute("onclick", "sub(\"omoplata\", \"p2\")");
        p2subA4.value = "omoplata";
        p2subA4.textContent = "Omoplata";

        var p2subA5 = document.createElement("button");
        p2subA5.className = "unstyled-button";
        p2subA5.setAttribute("onclick", "sub(\"barataplata\", \"p2\")");
        p2subA5.value = "barataplata";
        p2subA5.textContent = "Barataplata";

        var p2subA6 = document.createElement("button");
        p2subA6.className = "unstyled-button";
        p2subA6.setAttribute("onclick", "sub(\"collarBottom\", \"p2\")");
        p2subA6.value = "collarBottom";
        p2subA6.textContent = "Cross Collar Bottom";

        var p2subA7 = document.createElement("button");
        p2subA7.className = "unstyled-button";
        p2subA7.setAttribute("onclick", "sub(\"collarTop\", \"p2\")");
        p2subA7.value = "collarTop";
        p2subA7.textContent = "Cross Collar Top";

        var p2subA8 = document.createElement("button");
        p2subA8.className = "unstyled-button";
        p2subA8.setAttribute("onclick", "sub(\"loopChoke\", \"p2\")");
        p2subA8.value = "loopChoke";
        p2subA8.textContent = "Loop Choke";

        var p2subA8 = document.createElement("button");
        p2subA8.className = "unstyled-button";
        p2subA8.setAttribute("onclick", "sub(\"neckChoke\", \"p2\")");
        p2subA8.value = "neckChoke";
        p2subA8.textContent = "Neck Choke";

        var p2subA9 = document.createElement("button");
        p2subA9.className = "unstyled-button";
        p2subA9.setAttribute("onclick", "sub(\"wristLock\", \"p2\")");
        p2subA9.value = "wristLock";
        p2subA9.textContent = "Wrist Lock";

        var p2subA10 = document.createElement("button");
        p2subA10.className = "unstyled-button";
        p2subA10.setAttribute("onclick", "sub(\"kneebar\", \"p2\")");
        p2subA10.value = "kneebar";
        p2subA10.textContent = "Kneebar";

        var p2subA11 = document.createElement("button");
        p2subA11.className = "unstyled-button";
        p2subA11.setAttribute("onclick", "sub(\"triangle\", \"p2\")");
        p2subA11.value = "triangle";
        p2subA11.textContent = "Triangle";

        var p2subA12 = document.createElement("button");
        p2subA12.className = "unstyled-button";
        p2subA12.setAttribute("onclick", "sub(\"footLackAnkleLock\", \"p2\")");
        p2subA12.value = "footLackAnkleLock";
        p2subA12.textContent = "Footlack / Ankle Lock";

        var p2subA13 = document.createElement("button");
        p2subA13.className = "unstyled-button";
        p2subA13.setAttribute("onclick", "sub(\"other\", \"p2\")");
        p2subA13.value = "other";
        p2subA13.textContent = "Other";



        p2subDv.appendChild(p2subA1);
        p2subDv.appendChild(p2subA2);
        p2subDv.appendChild(p2subA3);
        p2subDv.appendChild(p2subA4);
        p2subDv.appendChild(p2subA5);
        p2subDv.appendChild(p2subA6);
        p2subDv.appendChild(p2subA7);
        p2subDv.appendChild(p2subA8);
        p2subDv.appendChild(p2subA9);
        p2subDv.appendChild(p2subA10);
        p2subDv.appendChild(p2subA11);
        p2subDv.appendChild(p2subA12);
        p2subDv.appendChild(p2subA13);

        p2sub.appendChild(p2subDv);

        
    } else {
        /*
        Removes the div that contains the pull down menu
        */
       var el = document.getElementById("drop4p1");
       el.remove();

       el = document.getElementById("drop2p1");
       el.remove();

       el = document.getElementById("dropSubp1");
       el.remove();

       el = document.getElementById("dropSubp2");
       el.remove();

       el = document.getElementById("drop4p2");
       el.remove();

       el = document.getElementById("drop2p2");
       el.remove();
    }
    console.log(document.getElementById("modes").value);
}


function setPlayer(player) {

    var rank = player.list.id;

    /*
    User must first select the belt rank
    */
    if (rank !== "empty") {
        var x = document.getElementById(rank).options[0].value;



        /*
        Goes through the datalist and searches for the input value 
        If it finds it then it sets the id to the player
        If it does not find it than the input is not in the datalist
        */
        var found = false;
        for (var i = 0; i < document.getElementById(rank).options.length; ++i) {
            if (document.getElementById(rank).options[i].value === player.value) {
                if (player.id === "inputP1") {
                    $idStartEnd.playerOne.id = document.getElementById(rank).options[i].id;
                    console.log("player1 id set ");
                }
                else {
                    $idStartEnd.playerTwo.id = document.getElementById(rank).options[i].id;
                    console.log("player2 id set ");
                }
                found = true;

                break;
            }
        }

        /*
        If player is not in datalist then alert the user
        */

        if (found === false) {
            console.log("player not found");
            var player = "Player";
            if (player.id === "inputP1") {
                player += " One";
            }
            else {
                player += " Two";
            }
            alert(player + " name is not valid");
        }
    }
    else {
        alert("Please select belt rank first");
    }


}