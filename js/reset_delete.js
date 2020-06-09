/*
To delete all the radio buttons
 */
function deleteRadio() {

    $("#wrapper").empty();
}




/*
To reset all the values to default
 */
function reset() {
    deleteRadio();
    $arr = [];
    $link = window.location.href.toString();
    $selectRadio = -1;
    $videoId = "";
    $idStartEnd.id = $videoId;
    $idStartEnd.start_time = null;
    $idStartEnd.end_time = null;
    $idStartEnd.division = null;
    $idStartEnd.rank = null;


    $idStartEnd.playerOne.id = null;
    $idStartEnd.playerOne.points = 0;
    $idStartEnd.playerOne.advantages = 0;
    $idStartEnd.playerOne.penalties = 0;
    $idStartEnd.playerOne.disqualified = false;
    $idStartEnd.playerOne.winner = false;

    $idStartEnd.playerTwo.id = null;
    $idStartEnd.playerTwo.points = 0;
    $idStartEnd.playerTwo.advantages = 0;
    $idStartEnd.playerTwo.penalties = 0;
    $idStartEnd.playerTwo.disqualified = false;
    $idStartEnd.playerTwo.winner = false;

    $idStartEnd.video_url = $link;

    $idStartEnd.events = [];

    /*
    Reset to default
     */
    $("#division")[0].selectedIndex = 0;
    $("#belt")[0].selectedIndex = 0;


    var p1 = document.getElementById("inputP1");
    var p2 = document.getElementById("inputP2");

    p1.value = p1.defaultValue;
    p1.setAttribute("list", "empty");

    p2.value = p1.defaultValue;
    p2.setAttribute("list", "empty");

}