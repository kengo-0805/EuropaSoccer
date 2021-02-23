// jQuery読み込み
{
  // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>;
}

$(function () {
  $.ajaxSetup({
    headers: { "X-Auth-Token": "74a5af63dc574317912967c010201990 " },
  });

  $.getJSON(
    "https://api.football-data.org/v2/competitions/PL/standings?standingType=TOTAL",
    function (data_PL) {
      //JSON取得後の処理
      standings = data_PL.standings[0].table;
      // 順位表にデータを挿入
      standings.forEach(function (standing) {
        $("#league-tbl").append(
          '<tr align="center">' +
            "<td>" +
            standing.position +
            "</td>" +
            "<td>" +
            '<div style = "text-align: left"><div style="display: table-cell; vertical-align: middle;"><img src="' +
            standing.team.crestUrl +
            '" height="24"></div><div style="display: table-cell; vertical-align: middle;">' +
            standing.team.name +
            "</div></div></td>" +
            "<td>" +
            standing.playedGames +
            "</td>" +
            "<td>" +
            standing.won +
            "</td>" +
            "<td>" +
            standing.draw +
            "</td>" +
            "<td>" +
            standing.lost +
            "</td>" +
            "<td>" +
            standing.points +
            "</td>" +
            "</tr>"
        );
      });
    }
  );
});
