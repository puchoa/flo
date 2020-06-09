/*
Buttons
 */


/*
Delete Button
Creates a new array where the selected radio button is not added to
Then repopulates $arr
Sends new $arr to addArray
Resets the $idStartEnd back to default
*/
$("#control2 .deleteBtn").click(() => {
    console.log("delete");

    if ($selectRadio != -1) {

        if ($arr[$selectRadio][2].includes("Takedown") || $arr[$selectRadio][2].includes("GuardPull")) {
            $idStartEnd.ground = null;
            $("#ground")[0].selectedIndex = 0;
        }

        if ($arr[$selectRadio][2] === "start time") {
            $idStartEnd.start_time = null;
        } else if ($arr[$selectRadio][2] === "end time") {
            $idStartEnd.end_time = null;
        }

        if ($arr[$selectRadio][3] === "4") {
            if ($arr[$selectRadio][1] === "player1") {
                $idStartEnd.playerOne.points -= 4;
                displayPoints("player1", $idStartEnd.playerOne.points.toString());
            } else {
                $idStartEnd.playerTwo.points -= 4;
                displayPoints("player2", $idStartEnd.playerTwo.points.toString());
            }
        }

        if ($arr[$selectRadio][3] === "3") {
            if ($arr[$selectRadio][1] === "player1") {
                $idStartEnd.playerOne.points -= 3;
                displayPoints("player1", $idStartEnd.playerOne.points.toString());
            } else {
                $idStartEnd.playerTwo.points -= 3;
                displayPoints("player2", $idStartEnd.playerTwo.points.toString());
            }
        }

        if ($arr[$selectRadio][3] === "2") {
            if ($arr[$selectRadio][1] === "player1") {
                $idStartEnd.playerOne.points -= 2;
                displayPoints("player1", $idStartEnd.playerOne.points.toString());
               
            } else {
                $idStartEnd.playerTwo.points -= 2;
                displayPoints("player2", $idStartEnd.playerTwo.points.toString());
            }
        }

        if ($arr[$selectRadio][2] === "penalty") {
            if ($arr[$selectRadio][1] === "player1") {
                $idStartEnd.playerOne.penalties -= 1;
                displayPoints("player1", $idStartEnd.playerOne.points.toString());
                
            } else {
                $idStartEnd.playerTwo.penalties -= 1;
                displayPoints("player2", $idStartEnd.playerTwo.points.toString());
            }
        }

        if ($arr[$selectRadio][2] === "adv") {
            if ($arr[$selectRadio][1] === "player1") {
                $idStartEnd.playerOne.advantages -= 1;
                displayPoints("player1", $idStartEnd.playerOne.points.toString());
                
            } else {
                $idStartEnd.playerTwo.advantages -= 1;
                displayPoints("player2", $idStartEnd.playerTwo.points.toString());
            }
        }

        /*
        If the player was disqualified then the opponent winner status is reset to false
         */
        if ($arr[$selectRadio][2] === "disqualified") {
            if ($arr[$selectRadio][1] === "player1") {
                $idStartEnd.playerOne.disqualified = false;
                $idStartEnd.playerTwo.winner = false;
            } else {
                $idStartEnd.playerTwo.disqualified = false;
                $idStartEnd.playerOne.winner = false;
            }
        }

        if ($arr[$selectRadio][2].includes("submission")) {
            if ($arr[$selectRadio][1] === "player1") {
                $idStartEnd.playerOne.winner = false;
            } else {
                $idStartEnd.playerTwo.winner = false;
            }
        }

        if ($selectRadio != -1) {
            console.log($selectRadio - 1);
            deleteRadio();

            $arr2 = [];
            for (var i = 0; i < $arr.length; ++i) {

                if ($selectRadio !== i) {
                    $arr2.push($arr[i]);
                }
            }
            $arr = [];
            for (var i = 0; i < $arr2.length; ++i) {
                addArray($arr2[i][0], $arr2[i][1], $arr2[i][2], $arr2[i][3]);
            }
        } else {
            console.log($selectRadio);
        }
        $selectRadio = -1;
    }
});


$("#control2 .exportBtn").click(() => {
    console.log("export");
    download();
});

$("#control3 .uploadBtn").click(() => {
    console.log("upload");
    alert("Function has not been implemented");
});

$("#control3 .resetBtn").click(() => {
    console.log("reset");
    reset();
});

$("#control .startBtn").click(() => {
    var isTrue = findArray("start time", "none");

    if (isTrue === false) {
        console.log("start time " + $(".video-current-time").text());
        var start = stringTimeConverter($(".video-current-time").text());
        addArray(start, "none", "start time", "none");
        $idStartEnd.start_time = start;
    }
});

$("#control .endBtn").click(() => {
    var isTrue = findArray("end time", "none");

    if (isTrue === false) {
        console.log("end time " + $(".video-current-time").text());
        var end = stringTimeConverter($(".video-current-time").text());
        addArray(end, "none", "end time", "none");
        $idStartEnd.end_time = end;
    }
});

$("#player1 .fourBtn").click(() => {
    console.log("player1 scored 4: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", "scored", "4");
    $idStartEnd.playerOne.points += 4;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
});

$("#player1 .threeBtn").click(() => {
    console.log("player1 scored 3: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", "scored", "3");
    $idStartEnd.playerOne.points += 3;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
});

$("#player1 .twoBtn").click(() => {
    console.log("player1 scored 2: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", "scored", "2");
    $idStartEnd.playerOne.points += 2;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
});

$("#player1 .pen").click(() => {
    console.log("player1 received penalty: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", "penalty", "none");
    $idStartEnd.playerOne.penalties += 1;
    $idStartEnd.playerOne.points -= 1;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
});

$("#player1 .adv").click(() => {
    console.log("player1 received adv: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", "adv", "none");
    $idStartEnd.playerOne.advantages += 1;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
});

/*
If player is disqualified then the opponent is the winner
 */
$("#player1 .dq").click(() => {
    var isTrue = findArray("disqualified", "player1");

    if (isTrue === false) {
        console.log("player1 was disqualified: " + $(".video-current-time").text());
        addArray(stringTimeConverter($(".video-current-time").text()), "player1", "disqualified", "none");
        $idStartEnd.playerOne.disqualified = true;
        $idStartEnd.playerTwo.winner = true;
    }
});

/*
$arr must not have any entry for submission in order to add one
 */
$("#player1 .sub").click(() => {
    var isTrue = findArray("submission", "player1");
    var isTrue2 = findArray("submission", "player2");

    if (isTrue === false && isTrue2 === false) {
        console.log("player1 won by submission: " + $(".video-current-time").text());
        addArray(stringTimeConverter($(".video-current-time").text()), "player1", "submission", "none");
        $idStartEnd.playerOne.winner = true;
    }
});

$("#player2 .fourBtn").click(() => {
    console.log("player2 scored 4: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", "scored", "4");
    $idStartEnd.playerTwo.points += 4;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
});

$("#player2 .threeBtn").click(() => {
    console.log("player2 scored 3: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", "scored", "3");
    $idStartEnd.playerTwo.points += 3;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
});

$("#player2 .twoBtn").click(() => {
    console.log("player2 scored 2: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", "scored", "2");
    $idStartEnd.playerTwo.points += 2;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
});

$("#player2 .pen").click(() => {
    console.log("player2 received penalty: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", "penalty", "none");
    $idStartEnd.playerTwo.penalties += 1;
    $idStartEnd.playerTwo.points -= 1;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
});

$("#player2 .adv").click(() => {
    console.log("player2 received adv: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", "adv", "none");
    $idStartEnd.playerTwo.advantages += 1;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
});

/*
If player is disqualified then the opponent is the winner
 */
$("#player2 .dq").click(() => {
    var isTrue = findArray("disqualified", "player2");

    if (isTrue === false) {
        console.log("player2 was disqualified: " + $(".video-current-time").text());
        addArray(stringTimeConverter($(".video-current-time").text()), "player2", "disqualified", "none");
        $idStartEnd.playerTwo.disqualified = true;
        $idStartEnd.playerOne.winner = true;
    }
});

/*
$arr must not have any entry for submission in order to add one
 */
$("#player2 .sub").click(() => {
    var isTrue = $idStartEnd.playerOne.winner;
    var isTrue2 = $idStartEnd.playerTwo.winner;

    if (isTrue === false && isTrue2 === false) {
        console.log("player2 won by submission: " + $(".video-current-time").text());
        addArray(stringTimeConverter($(".video-current-time").text()), "player2", "submission", "none");
        $idStartEnd.playerTwo.winner = true;
    }
    else {
        alert("Submission event already exists");
    }
});



$("#ground .guardpull1").click(() => {
    console.log("player1 guardpull");
    addArray(stringTimeConverter($(".video-current-time").text()), "none", "playerOneGuardPull", "none");
});

$("#ground .guardpull2").click(() => {
    console.log("player2 guardpull");
    addArray(stringTimeConverter($(".video-current-time").text()), "none", "playerTwoGuardPull", "none");
});

$("#ground .double").click(() => {
    console.log("double guardpull");
    addArray(stringTimeConverter($(".video-current-time").text()), "none", "doubleGuardPull", "none");
});




/*
Pull Down menu for Player 1
*/
function sMountP1() {

    console.log("player1 takes mount scored 4: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", " takes mount scored", "4");
    $idStartEnd.playerOne.points += 4;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
}

function sbMountP1() {
    console.log("player1 takes back mount scored 4: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", " takes back mount scored", "4");
    $idStartEnd.playerOne.points += 4;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
}

function sbControltP1() {

    console.log("player1 takes back control scored 4: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", " takes back control scored", "4");
    $idStartEnd.playerOne.points += 4;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
}

function stdP1() {

    console.log("player1 takedown scored 2: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", " takedown scored", "2");
    $idStartEnd.playerOne.points += 2;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
}

function sbsweepP1() {

    console.log("player1 sweep scored 2: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", " sweep scored", "2");
    $idStartEnd.playerOne.points += 2;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
}

function skneeP1() {
    console.log("player1 knee on belly scored 2: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player1", " knee on belly scored", "2");
    $idStartEnd.playerOne.points += 2;
    displayPoints("player1", $idStartEnd.playerOne.points.toString());
}


function sub(move, player) {
    console.log(move + player);

    var isTrue = $idStartEnd.playerOne.winner;
    var isTrue2 = $idStartEnd.playerTwo.winner;

    var moveString = "";
    var playerString = "";

    /*
    Set playerString
    */
    if (player === "p1") {
        playerString = "player1";
    }
    else {
        playerString = "player2";
    }

    /*
   Set moveString
   */
    if (move === "backChoke") {
        moveString = "Choke From Back";
    }
    else if (move === "armbar") {
        moveString = "Armbar";
    }
    else if (move === "kimuraAmericana") {
        moveString = "Kimura / Americana";
    }
    else if (move === "omoplata") {
        moveString = "Omoplata";
    }
    else if (move === "barataplata") {
        moveString = "Barataplata";
    }
    else if (move === "collarBottom") {
        moveString = "Cross Collar Bottom";
    }
    else if (move === "collarTop") {
        moveString = "Cross Collar Top";
    }
    else if (move === "loopChoke") {
        moveString = "loop Choke";
    }
    else if (move === "neckChoke") {
        moveString = "Neck Choke";
    }
    else if (move === "wristLock") {
        moveString = "Wrist Lock";
    }
    else if (move === "kneebar") {
        moveString = "Kneebar";
    }
    else if (move === "triangle") {
        moveString = "Triangle";
    }
    else if (move === "footLackAnkleLock") {
        moveString = "Footlack / Ankle Lock";
    }
    else {
        moveString = "Other"
    }

    if (isTrue === false && isTrue2 === false) {
        var submis = "submission" + move[0].toUpperCase()+move.slice(1);
        console.log(playerString + " won by submission(" + moveString + "): " + $(".video-current-time").text());
        
        if(player === "p1"){
            $idStartEnd.playerOne.winner = true;
            addArray(stringTimeConverter($(".video-current-time").text()), "player1", submis, "none");
        }
        else{
            $idStartEnd.playerTwo.winner = true;
            addArray(stringTimeConverter($(".video-current-time").text()), "player2", submis, "none");
        }
    }
    else {
        alert("Submission event already exists");
    }
}


/*
Pull Down menu for Player 2
*/
function sMountP2() {
    console.log("player2 takes mount scored 4: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", " takes mount scored", "4");
    $idStartEnd.playerOne.points += 4;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
}

function sbMountP2() {
    console.log("player2 takes back mount scored 4: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", " takes back mount scored", "4");
    $idStartEnd.playerOne.points += 4;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
}

function sbControltP2() {
    console.log("player2 takes back control scored 4: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", " takes back control scored", "4");
    $idStartEnd.playerOne.points += 4;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
}

function stdP2() {
    console.log("player2 takedown scored 2: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", " takedown scored", "2");
    $idStartEnd.playerOne.points += 2;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
}

function sbsweepP2() {
    console.log("player2 sweep scored 2: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", " sweep scored", "2");
    $idStartEnd.playerOne.points += 2;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
}

function skneeP2() {
    console.log("player2 knee on belly scored 2: " + $(".video-current-time").text());
    addArray(stringTimeConverter($(".video-current-time").text()), "player2", " knee on belly scored", "2");
    $idStartEnd.playerOne.points += 2;
    displayPoints("player2", $idStartEnd.playerTwo.points.toString());
}