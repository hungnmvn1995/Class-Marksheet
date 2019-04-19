//Validation:
  function nameVal() {   //Name
    var input = $("#name").val();
    if (input == "") {
      alert("Missing name!");
      return false;
    }
    return true;
  }
  function scoreVal(id) {  //Score
     var input = parseInt($(id).val());
     if (input >=0 && input <= 10) {
       return true;
     } else {
       alert(id + " : Missing/Invalid Score!");
       return false;
     }
  }

//Add Student:
  function input() {
    if (nameVal() && scoreVal("#math") && scoreVal("#physics") && scoreVal("#chemistry")) {
      add();
      $("input").val("");
    }
  }

  function add() {
    $("tbody").append(
      "<tr>" +
      "<td>" + $("#name").val() + "</td>" +
      "<td>" + $("#math").val() + "</td>" +
      "<td>" + $("#physics").val() + "</td>" +
      "<td>" + $("#chemistry").val() + "</td>" +
      "<td>" + "?" + "</td>" +
      "</tr>"
    );
  }

//Calculating Average Score of Student:
  function avg() {
    $("tr").each(function() {
      var data = $(this).find("td");
      var avg = ( parseFloat($(data[1]).text()) + parseFloat($(data[2]).text()) + parseFloat($(data[3]).text()) ) / 3;
      $(data[4]).html(avg.toFixed(1));
      //Filter Good Student:
      $("#expectation").click(function() {
        if ( parseFloat($(data[4]).text()) >= 8.0 ) {
          $(data[4]).parent("tr").css({"color": "red", "font-weight": "bold"});
        }
      });
    });
  }
