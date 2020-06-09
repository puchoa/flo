function download() {

    var num;
    var title = "";

    /*
    There are 35 chars in https://www.flograppling.com/video/
     */
    for (var i = 35; i < $link.length; ++i) {
        if ($link[i] === "-") {
            num = i - 35;
            break;
        }
    }

    /*
    Sets .id to just the int value after flograppling.com/video
     */
    $idStartEnd.id = $link.substr(35, num);

    /*
    Resets .events back to default
     */
    $idStartEnd.events = [];

    /*
    Creates the title string to be used to push to .events
     */
    for (var i = 0; i < $arr.length; ++i) {
        title = "";

        if ($arr[i][2] === "start time" || $arr[i][2] === "end time") {
            if ($arr[i][2] === "start time") {
                title = "matchStart";
            } else {
                title = "matchEnd";
            }
        } else {

            if ($arr[i][1] === "player1") {
                title += "playerOne";
            } else if ($arr[i][1] === "player2") {
                title += "playerTwo";
            }

            if ($arr[i][3] === "4") {
                title += "Four";
            } else if ($arr[i][3] === "3") {
                title += "Three";
            } else if ($arr[i][3] === "2") {
                title += "Two";
            }

            if ($arr[i][2] !== "start time" || $arr[i][2] !== "end time") {
                if ($arr[i][2] === "scored") {
                    title += "Points";
                }
                else if ($arr[i][2].includes("scored")) {
                    if ($arr[i][2].includes("take")) {
                        if ($arr[i][2].includes("control")) {

                            title += "PointsTakesBackControl";
                        }
                        else {
                            if ($arr[i][2].includes("down")) {

                                title += "PointsTakeDown";
                            }
                            else {
                                if ($arr[i][2].includes("back")) {
                                    title += "PointsTakesBackMount";
                                }
                                else {
                                    title += "PointsTakesMount";
                                }
                            }
                        }
                    }
                    else {
                        if ($arr[i][2].includes("sweep")) {
                            title += "PointsSweep";
                        }
                        else {
                            title += "PointsKneeOnBelly";
                        }
                    }
                }
                else {
                    if($arr[i][2].includes("BackChoke")){
                        title += "SubmissionChokeFromBack";
                    }
                    else if($arr[i][2].includes("CollarBottom")){
                        title += "SubmissionCrossCollarBottom";
                    }
                    else if($arr[i][2].includes("CollarTop")){
                        title += "SubmissionCrossCollarTop";
                    }
                    else{
                        title += $arr[i][2].charAt(0).toUpperCase() + $arr[i][2].slice(1);
                    }
                    
                    console.log(title);
                }
            }
        }


        $idStartEnd.events.push({ eventID: title, time: $arr[i][0] });
    }

    /*
    The JSON.stringify() method converts a JavaScript object or value to a JSON string
     */
    var json = JSON.stringify($idStartEnd);

    /*
    Creates a txt file and is automatically downloaded
    The element inside encodeURIComponent() is what populates the txt file
     */
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(json));
    element.setAttribute("download", $link.substr(35, num));

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}