$arr = [];
$link = window.location.href.toString();
$selectRadio = -1;
$videoId = "";



/*
Notes:
id - the id of the site ex flograppling.com/video/6743296 id=6743296
playerOne.id or playerTwo.id is the players id taken from the datalist in players.html
*/

$idStartEnd = {
    id: $videoId, start_time: null, end_time: null, division: null, rank: null,
    playerOne: { id: null, points: 0, advantages: 0, penalties: 0, disqualified: false, winner: false },
    playerTwo: { id: null, points: 0, advantages: 0, penalties: 0, disqualified: false, winner: false },
    video_url: $link, events: []
};




/*
Converts string time to an int
ex
1:00:00 becomes 3600 seconds
1:00 becomes 60 seconds
 */
function stringTimeConverter(time) {
    var seconds = 0;
    var timeArr = time.split(":");

    /*
    If time has hour - calculates according so
    Else time only has mins and seconds and calculates according so
     */
    if (timeArr.length === 3) {
        seconds += parseInt(timeArr[0]) * 3600;
        seconds += parseInt(timeArr[1]) * 60;
        seconds += parseInt(timeArr[2]);
    } else {
        seconds += parseInt(timeArr[0]) * 60;
        seconds += parseInt(timeArr[1]);
    }
    return seconds;
}

/*
Converts int time to a String
in either 0:00:00 or 0:00 format
 */
function intTimeConverter(time) {
    var convertedTime = "";

    try {
        var t = parseInt(time, 10);

        if (t >= 3600) {
            var hours = Math.floor(t / 3600);
            var mins = Math.floor(t / 60) % 60;
            var m = ("0" + mins).slice(-2);
            var secs = t % 60;
            var s = ("0" + secs).slice(-2);

            return hours.toString() + ":" + m + ":" + s;

        } else {
            var mins = Math.floor(t / 60) % 60;
            var secs = t % 60;
            var s = ("0" + secs).slice(-2);
            return mins.toString() + ":" + s;
        }

    } catch (e) {
        return "-1";
    }
}



/*
Creates radio buttons
 */
function createRadio(stringEvent, i) {
    var wrapper = document.getElementById("wrapper");
    var radio = document.createElement("input");
    var label = document.createElement("label");
    var linebreak = document.createElement("br");

    radio.type = "radio";
    radio.name = "event";
    radio.id = i;
    radio.value = stringEvent;
    radio.style.marginRight = "10px";

    radio.onclick = function () {
        $selectRadio = parseInt(radio.id);
    };

    label.setAttribute("for", stringEvent);
    label.innerHTML = stringEvent;

    wrapper.appendChild(radio);
    wrapper.appendChild(label);
    wrapper.appendChild(linebreak);
}

/*
Adds to the array - if new time entry is not in ascending order, then
radio buttons are deleted because of their Id order
the new entry is added then Quicksort is used.
Finally sends to eventName
 */

function addArray(timeMark, player, event, point) {

    if (timeMark !== undefined && player !== undefined && event !== undefined && point !== undefined) {
        $arr.push([timeMark, player, event, point]);
        if ($arr.length === 0 || timeMark > $arr[$arr.length - 1][0]) {
            eventName(timeMark, player, event, point, ($arr.length - 1).toString());
        } else {
            deleteRadio();
            quickSort(0, $arr.length - 1);

            for (var i = 0; i < $arr.length; ++i) {
                eventName($arr[i][0], $arr[i][1], $arr[i][2], $arr[i][3], i.toString());
            }
        }
        console.log($arr);
    }


}

/*
Creates the string to be used for radio button
Sends that string to createRadio
 */
function eventName(timeMark, player, event, point, i) {
    if (timeMark !== undefined && player !== undefined && event !== undefined && point !== undefined && i !== undefined) {
        
        var stringEvent = "";

        if (point === "none") {
            
            if (event === "penalty" || event === "adv") {
                stringEvent = intTimeConverter(timeMark) + " " + player + " received " + event;
            } else if (event === "start time" || event === "end time") {
                stringEvent = intTimeConverter(timeMark) + " " + event;
            } else if (event === "disqualified") {
                stringEvent = intTimeConverter(timeMark) + " " + player + " was " + event;
            } else if (event.includes("submission") || event.includes("Submission")) {
                
                var event2 = "";
                if (event === "submission") {
                    event2 = "submission";
                }
                else if (event.includes("BackChoke")) {
                    event2 = "submission(Choke From Back)"
                }
                else if (event.includes("Armbar")) {
                    event2 = "submission(Armbar)"
                }
                else if (event.includes("KimuraAmericana")) {
                    event2 = "submission(Kimura / Americana)"
                }
                else if (event.includes("Omoplata")) {
                    event2 = "submission(Omoplata)"
                }
                else if (event.includes("Barataplata")) {
                    event2 = "submission(Barataplata)"
                }
                else if (event.includes("BackChoke")) {
                    event2 = "submission(Choke From Back)"
                }
                else if (event.includes("CollarBottom")) {
                    event2 = "submission(Cross Collar Bottom)"
                }
                else if (event.includes("CollarTop")) {
                    event2 = "submission(Cross Collar Top)"
                }
                else if (event.includes("LoopChoke")) {
                    event2 = "submission(Loop Choke)"
                }
                else if (event.includes("NeckChoke")) {
                    event2 = "submission(Neck Choke)"
                }
                else if (event.includes("WristLock")) {
                    event2 = "submission(Wrist Lock)"
                }
                else if (event.includes("Kneebar")) {
                    event2 = "submission(Kneebar)"
                }
                else if (event.includes("Triangle")) {
                    event2 = "submission(Triangle)"
                }
                else if (event.includes("FootLackAnkleLock")) {
                    event2 = "submission(Footlack / Ankle Lock)"
                }
                else if (event.includes("Other")) {
                    event2 = "submission(Other)"
                }

                stringEvent = intTimeConverter(timeMark) + " " + player + " won by " + event2;
            }
            else if (event.includes("GuardPull")) {

                if (event.includes("playerOne")) {
                    event = "player1 Guard Pull";
                }
                else if (event.includes("playerTwo")) {
                    event = "player2 Guard Pull";
                }
                else if (event.includes("double")) {
                    event = "Double Guard Pull";
                }
                stringEvent = intTimeConverter(timeMark) + " " + event;
            }
        } else {
    
            stringEvent = intTimeConverter(timeMark) + " " + player + " " + event + " " + point + " points";

        }
       
        createRadio(stringEvent, i);
    }

}


/*
Used to prevent duplicates of start time, end time, winner, and disqualified
 */
function findArray(event, player) {

    if (player === "none") {
        for (var i = 0; i < $arr.length; ++i) {
            if ($arr[i][2] === event) {
                return true;
            }
        }
        return false;
    } else {
        for (var i = 0; i < $arr.length; ++i) {
            if ($arr[i][2] === event && $arr[i][1] === player) {
                return true;
            }
        }
        return false;
    }
}

/*
Adds Point tracking to players names
*/
function displayPoints(player, num) {


    if (player === "player1") {
        var p1 = document.getElementById("inputP1");

        if (p1.value === "") {
            p1.value = "Player One \t\t :Points " + num;

        }
        else {
            if (p1.value.includes(":Points")) {
                var subValue = p1.value.split(":Points");
                subValue = subValue[0] + ":Points " + num;
                p1.value = subValue;

            }
            else {
                p1.value = p1.value + "\t\t :Points " + num;

            }

        }
    }
    else {
        var p2 = document.getElementById("inputP2");

        if (p2.value === "") {
            p2.value = "Player Two \t\t :Points " + num;
        }
        else {

            if (p2.value.includes(":Points")) {
                var subValue = p2.value.split(":Points");
                subValue = subValue[0] + ":Points " + num;
                p2.value = subValue;

            }
            else {
                p2.value = p2.value + "\t\t :Points " + num;

            }

        }
    }
}
