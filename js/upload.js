$fileOk = false;




/*
Checks that the json file has correct keys
*/
function checkJson(str) {
    str = JSON.parse(str);

    if (str.id !== undefined && str.start_time !== undefined && str.end_time !== undefined && str.division !== undefined && str.rank !== undefined

        && str.playerOne !== undefined && str.playerOne.id !== undefined && str.playerOne.points !== undefined && str.playerOne.advantages !== undefined
        && str.playerOne.penalties !== undefined && str.playerOne.disqualified !== undefined && str.playerOne.winner !== undefined

        && Number.isInteger(str.playerOne.points) === true && Number.isInteger(str.playerOne.advantages) === true && Number.isInteger(str.playerOne.penalties) === true
        && Number.isInteger(str.playerOne.points) === true && typeof str.playerOne.disqualified === "boolean" && typeof str.playerOne.winner === "boolean"

        && str.playerTwo !== undefined && str.playerTwo.id !== undefined && str.playerTwo.points !== undefined && str.playerTwo.advantages !== undefined
        && str.playerTwo.penalties !== undefined && str.playerTwo.disqualified !== undefined && str.playerTwo.winner !== undefined

        && Number.isInteger(str.playerTwo.points) === true && Number.isInteger(str.playerTwo.advantages) === true && Number.isInteger(str.playerTwo.penalties) === true
        && Number.isInteger(str.playerTwo.points) === true && typeof str.playerTwo.disqualified === "boolean" && typeof str.playerTwo.winner === "boolean"

        && str.video_url !== undefined && str.events !== undefined) {
        console.log("Passed properties check");
        return true
    }
    else {
        console.log("Failed properties check");
        return false;
    }


}

/*
Checks if string is JSON
*/

function IsJsonString(str) {
    try {
        JSON.parse(str);
        console.log("File is Json Format");
        return true;
    } catch (e) {
        console.log("File is not in Json Format");
        return false;
    }

}

/*
Set players name 
*/
function setPlayerName(player, id, rank) {
    rank = rank.toLowerCase();
    rank = rank.split(" ")[0];

    var rank = document.getElementById(rank).options;

    var foundP1 = false;
    var foundP2 = false;
    for (var i = 0; i < rank.length; ++i) {
        if (player === "player1") {

            if (rank[i].id === id) {
                var p = document.getElementById("inputP1");
                p.value = rank[i].value;
                foundP1 = true;
            }
        }

        if (player === "player2") {
            if (rank[i].id === id) {
                var p2 = document.getElementById("inputP2");
                p2.value = rank[i].value;
                foundP2 = true;
            }
        }

        if (foundP1 === true && foundP2 === true) { break; }

    }

}




function loadData() {

    var fileInput = document.getElementById("file-1");
    var fileDisplayArea = document.getElementById("fileDisplayArea");
    var file = fileInput.files[0];






    if (file.type === "text/plain") {

        var reader = new FileReader();

        var txt = "";

        reader.onload = function (e) {
            fileDisplayArea.innerText = reader.result;
            txt = reader.result;
            console.log(txt);
            var checkOne = IsJsonString(txt);
            var checkTwo = checkJson(txt);

            if (checkOne === true && checkTwo === true) {
                $fileOk = true;
                var obj = JSON.parse(txt);
                if (obj.video_url === window.location.href.toString()) {


                    reset();

                    $(".inputfile").each(function () {
                        var $input = $(this),
                            $label = $input.next("label"),
                            labelVal = $label.html();
                        $label.find("span").html(file.name);
                    });

                    $idStartEnd.stat_time = obj.stat_time;
                    $idStartEnd.end_time = obj.end_time;
                    $idStartEnd.division = obj.division;
                    $idStartEnd.rank = obj.rank;

                    $idStartEnd.playerOne.id = obj.playerOne.id;
                    $idStartEnd.playerOne.points = obj.playerOne.points;
                    $idStartEnd.playerOne.advantages = obj.playerOne.advantages;
                    $idStartEnd.playerOne.penalties = obj.playerOne.penalties;
                    $idStartEnd.playerOne.disqualified = obj.playerOne.disqualified;
                    $idStartEnd.playerOne.winner = obj.playerOne.winner;

                    $idStartEnd.playerTwo.id = obj.playerTwo.id;
                    $idStartEnd.playerTwo.points = obj.playerTwo.points;
                    $idStartEnd.playerTwo.advantages = obj.playerTwo.advantages;
                    $idStartEnd.playerTwo.penalties = obj.playerTwo.penalties;
                    $idStartEnd.playerTwo.disqualified = obj.playerTwo.disqualified;
                    $idStartEnd.playerTwo.winner = obj.playerTwo.winner;

                    $idStartEnd.video_url = obj.video_url;




                    /*
                    Set Division
                    */
                    if ($idStartEnd.division !== null) {
                        var e = document.getElementById("division");
                        for (var i = 0; i < e.options.length; ++i) {
                            if (e.options[i].text === $idStartEnd.division) {
                                e.selectedIndex = i;
                                break;
                            }
                        }
                    }



                    /*
                    Set Belt Rank
                    */

                    if ($idStartEnd.rank !== null) {
                        var e = document.getElementById("belt");
                        for (var i = 0; i < e.options.length; ++i) {
                            if (e.options[i].text === $idStartEnd.rank) {
                                e.selectedIndex = i;
                                break;
                            }
                        }
                    }



                    /*
                    Set players name
                    */
                    if ($idStartEnd.playerOne.id !== null) {
                        setPlayerName("player1", $idStartEnd.playerOne.id, $idStartEnd.rank);

                    }

                    if ($idStartEnd.playerTwo.id !== null) {
                        setPlayerName("player2", $idStartEnd.playerTwo.id, $idStartEnd.rank);

                    }
                    
                    displayPoints("player1", $idStartEnd.playerOne.points.toString());
                    displayPoints("player2", $idStartEnd.playerTwo.points.toString());






                    /*
                    Set Radio buttons
                    */

                    if (obj.events.length > 0) {

                        for (var i = 0; i < obj.events.length; ++i) {

                            var time = obj.events[i]["time"].toString();


                            if (obj.events[i]["eventID"] === "matchStart") {
                                $arr.push([time, "none", "start time", "none"]);
                                eventName(time, "none", "start time", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "matchEnd") {
                                $arr.push([time, "none", "end time", "none"]);
                                eventName(time, "none", "end time", "none", i);

                            }

                            /*
                            4 Points
                            */
                            /*
                            Player 1
                            */
                            else if (obj.events[i]["eventID"] === "playerOneFourPoints") {
                                $arr.push([time, "player1", " scored", "4"]);
                                eventName(time, "player1", " scored", "4", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneFourPointsTakesMount") {
                                $arr.push([time, "player1", " takes mount scored", "4"]);
                                eventName(time, "player1", " takes mount scored", "4", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneFourPointsTakesBackMount") {
                                $arr.push([time, "player1", " takes back mount scored", "4"]);
                                eventName(time, "player1", " takes back mount scored", "4", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneFourPointsTakesBackControl") {
                                $arr.push([time, "player1", " takes back control scored", "4"]);
                                eventName(time, "player1", " takes back control scored", "4", i);

                            }
                            /*
                          Player 2
                          */
                            else if (obj.events[i]["eventID"] === "playerTwoFourPoints") {
                                $arr.push([time, "player2", " scored", "4"]);
                                eventName(time, "player2", " scored", "4", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoFourPointsTakesMount") {
                                $arr.push([time, "player2", " takes mount scored", "4"]);
                                eventName(time, "player2", " takes mount scored", "4", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoFourPointsTakesBackMount") {
                                $arr.push([time, "player2", " takes back mount scored", "4"]);
                                eventName(time, "player2", " takes back mount scored", "4", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoFourPointsTakesBackControl") {
                                $arr.push([time, "player2", " takes back control scored", "4"]);
                                eventName(time, "player2", " takes back control scored", "4", i);

                            }
                            /*
                           3 Points
                           */
                            /*
                            Player 1
                            */
                            else if (obj.events[i]["eventID"] === "playerOneThreePoints") {
                                $arr.push([time, "player1", " scored", "3"]);
                                eventName(time, "player1", " scored", "3", i);

                            }
                            /*
                               Player 2
                               */
                            else if (obj.events[i]["eventID"] === "playerTwoThreePoints") {
                                $arr.push([time, "player2", " scored", "3"]);
                                eventName(time, "player2", " scored", "3", i);

                            }
                            /*
                          2 Points
                          */
                            /*
                            Player 1
                            */
                            else if (obj.events[i]["eventID"] === "playerOneTwoPoints") {
                                $arr.push([time, "player1", " scored", "2"]);
                                eventName(time, "player1", " scored", "2", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneTwoPointsTakeDown") {
                                $arr.push([time, "player1", " takedown scored", "2"]);
                                eventName(time, "player1", " takedown scored", "2", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneTwoPointsSweep") {
                                $arr.push([time, "player1", " sweep scored", "2"]);
                                eventName(time, "player1", " sweep scored", "2", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneTwoPointsKneeOnBelly") {
                                $arr.push([time, "player1", " knee on belly scored", "2"]);
                                eventName(time, "player1", " knee on belly scored", "2", i);

                            }
                            /*
                                Player 2
                                */
                            else if (obj.events[i]["eventID"] === "playerTwoTwoPoints") {
                                $arr.push([time, "player2", " scored", "2"]);
                                eventName(time, "player2", " scored", "2", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoTwoPointsTakeDown") {
                                $arr.push([time, "player2", " takedown scored", "2"]);
                                eventName(time, "player2", " takedown scored", "2", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoTwoPointsSweep") {
                                $arr.push([time, "player2", " sweep scored", "2"]);
                                eventName(time, "player2", " sweep scored", "2", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoTwoPointsKneeOnBelly") {
                                $arr.push([time, "player2", " knee on belly scored", "2"]);
                                eventName(time, "player2", " knee on belly scored", "2", i);

                            }
                            /*
                         1 Point
                         */
                            /*
                            Player 1
                            */
                            else if (obj.events[i]["eventID"] === "playerOnePenalty") {
                                $arr.push([time, "player1", "penalty", "none"]);
                                eventName(time, "player1", "penalty", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneAdv") {
                                $arr.push([time, "player1", "adv", "none"]);
                                eventName(time, "player1", "adv", "none", i);

                            }
                            /*
                                Player 2
                                */
                            else if (obj.events[i]["eventID"] === "playerTwoPenalty") {
                                $arr.push([time, "player2", "penalty", "none"]);
                                eventName(time, "player2", "penalty", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoAdv") {
                                $arr.push([time, "player2", "adv", "none"]);
                                eventName(time, "player2", "adv", "none", i);

                            }
                            /*
                      DQ / Win
                      */
                            /*
                            Player 1
                            */
                            else if (obj.events[i]["eventID"] === "playerOneSubmission") {
                                $arr.push([time, "player1", "submission", "none"]);
                                eventName(time, "player1", "submission", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionChokeFromBack") {
                                $arr.push([time, "player1", "playerOneSubmissionChokeFromBack", "none"]);
                                eventName(time, "player1", "submissionBackChoke", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionOther") {
                                $arr.push([time, "player1", "playerOneSubmissionOther", "none"]);
                                eventName(time, "player1", "submissionOther", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionFootLackAnkleLock") {
                                $arr.push([time, "player1", "playerOneSubmissionFootLackAnkleLock", "none"]);
                                eventName(time, "player1", "submissionFootLackAnkleLock", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionKneebar") {
                                $arr.push([time, "player1", "playerOneSubmissionKneebar", "none"]);
                                eventName(time, "player1", "submissionKneebar", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionTriangle") {
                                $arr.push([time, "player1", "playerOneSubmissionTriangle", "none"]);
                                eventName(time, "player1", "submissionTriangle", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionWristLock") {
                                $arr.push([time, "player1", "playerOneSubmissionWristLock", "none"]);
                                eventName(time, "player1", "submissionWristLock", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionNeckChoke") {
                                $arr.push([time, "player1", "playerOneSubmissionNeckChoke", "none"]);
                                eventName(time, "player1", "submissionNeckChoke", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionLoopChoke") {
                                $arr.push([time, "player1", "playerOneSubmissionLoopChoke", "none"]);
                                eventName(time, "player1", "submissionLoopChoke", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionCrossCollarTop") {
                                $arr.push([time, "player1", "playerOneSubmissionCollarTop", "none"]);
                                eventName(time, "player1", "submissionCollarTop", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionCrossCollarBottom") {
                                $arr.push([time, "player1", "playerOneSubmissionCollarBottom", "none"]);
                                eventName(time, "player1", "submissionCollarBottom", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionBarataplata") {
                                $arr.push([time, "player1", "playerOneSubmissionBarataplata", "none"]);
                                eventName(time, "player1", "submissionBarataplata", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionOmoplata") {
                                $arr.push([time, "player1", "playerOneSubmissionOmoplata", "none"]);
                                eventName(time, "player1", "submissionOmoplata", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionKimuraAmericana") {
                                $arr.push([time, "player1", "playerOneSubmissionKimuraAmericana", "none"]);
                                eventName(time, "player1", "submissionKimuraAmericana", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerOneSubmissionArmbar") {
                                $arr.push([time, "player1", "playerOneSubmissionArmbar", "none"]);
                                eventName(time, "player1", "submissionArmbar", "none", i);

                            }

                            else if (obj.events[i]["eventID"] === "playerOneDisqualified") {
                                $arr.push([time, "player1", "disqualified", "none"]);
                                eventName(time, "player1", "disqualified", "none", i);

                            }
                            /*
                           Player 2
                           */
                            else if (obj.events[i]["eventID"] === "playerTwoSubmission") {
                                $arr.push([time, "player2", "submission", "none"]);
                                eventName(time, "player2", "submission", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionChokeFromBack") {
                                $arr.push([time, "player2", "playerTwoSubmissionChokeFromBack", "none"]);
                                eventName(time, "player2", "submissionBackChoke", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionOther") {
                                $arr.push([time, "player2", "playerTwoSubmissionOther", "none"]);
                                eventName(time, "player2", "submissionOther", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionFootLackAnkleLock") {
                                $arr.push([time, "player2", "playerTwoSubmissionFootLackAnkleLock", "none"]);
                                eventName(time, "player2", "submissionFootLackAnkleLock", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionKneebar") {
                                $arr.push([time, "player2", "playerTwoSubmissionKneebar", "none"]);
                                eventName(time, "player2", "submissionKneebar", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionTriangle") {
                                $arr.push([time, "player2", "playerTwoSubmissionTriangle", "none"]);
                                eventName(time, "player2", "submissionTriangle", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionWristLock") {
                                $arr.push([time, "player2", "playerTwoSubmissionWristLock", "none"]);
                                eventName(time, "player2", "submissionWristLock", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionNeckChoke") {
                                $arr.push([time, "player2", "playerTwoSubmissionNeckChoke", "none"]);
                                eventName(time, "player2", "submissionNeckChoke", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionLoopChoke") {
                                $arr.push([time, "player2", "playerTwoSubmissionLoopChoke", "none"]);
                                eventName(time, "player2", "submissionLoopChoke", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionCrossCollarTop") {
                                $arr.push([time, "player2", "playerTwoSubmissionCollarTop", "none"]);
                                eventName(time, "player2", "submissionCollarTop", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionCrossCollarBottom") {
                                $arr.push([time, "player2", "playerTwoSubmissionCollarBottom", "none"]);
                                eventName(time, "player2", "submissionCollarBottom", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionBarataplata") {
                                $arr.push([time, "player2", "playerTwoSubmissionBarataplata", "none"]);
                                eventName(time, "player2", "submissionBarataplata", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionOmoplata") {
                                $arr.push([time, "player2", "playerTwoSubmissionOmoplata", "none"]);
                                eventName(time, "player2", "submissionOmoplata", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionKimuraAmericana") {
                                $arr.push([time, "player2", "playerTwoSubmissionKimuraAmericana", "none"]);
                                eventName(time, "player2", "submissionKimuraAmericana", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoSubmissionArmbar") {
                                $arr.push([time, "player2", "playerTwoSubmissionArmbar", "none"]);
                                eventName(time, "player2", "submissionArmbar", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "playerTwoDisqualified") {
                                $arr.push([time, "player2", "disqualified", "none"]);
                                eventName(time, "player2", "disqualified", "none", i);

                            }
                            /*
                      guardpull
                      */
                            /*
                            Player 1
                            */
                            else if (obj.events[i]["eventID"] === "PlayerOneGuardPull") {
                                $arr.push([time, "none", "playerOneGuardPull", "none"]);
                                eventName(time, "none", "playerOneGuardPull", "none", i);

                            }
                            /*
                               Player 2
                               */
                            else if (obj.events[i]["eventID"] === "PlayerTwoGuardPull") {
                                $arr.push([time, "none", "playerTwoGuardPull", "none"]);
                                eventName(time, "none", "playerTwoGuardPull", "none", i);

                            }
                            else if (obj.events[i]["eventID"] === "DoubleGuardPull") {
                                $arr.push([time, "none", "doubleGuardPull", "none"]);
                                eventName(time, "none", "doubleGuardPull", "none", i);

                            }
                        }

                    }

                }
                else {
                    $fileOk = false;
                    console.log("Data does not match link");
                    alert("Data does not match link");
                }
            }
            else {
                $fileOk = false;
                alert("File not accepted");
            }
        };

        console.log(reader.readAsText(file));
    }
    else {
        $fileOk = false;
        alert("File not accepted");
    }


}


