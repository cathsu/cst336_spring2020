var output = $("#details-text");

function getInfo() {
    console.log("printing");
    $("#queryButton").hide();
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        type: "GET",
        dataType: "json",
        success: function(data) {
            output.html("Hello");
            console.log(data);
            data.forEach(function(element){
                output.append(element.title);
            })
        },
        error: function(e) {
            output.html("An error occurred during your request: " +  e.status + " " + e.statusText);
            // output.addClass("error");
        }
      });
}