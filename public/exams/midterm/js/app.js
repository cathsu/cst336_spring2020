function getInfo() {
    var ISBN = $("#inputISBN").val();
    var result = $("#result");
    result.empty(); 
    // console.log(ISBN);
    // var ISBN_param = "ISBN:" + ISBN;
    // console.log(ISBN_param);
    
    // var URL = "https://openlibrary.org/api/books";
    var URL = "https://openlibrary.org/api/books?bibkeys=ISBN:" + ISBN + "&format=json&jscmd=data";  

    $.ajax({
        method: "GET",
        url: URL,
        success: function(data) {
            console.log(data);
            var index = "ISBN:" + ISBN;
            var coverURL = data[index].url;
            var title = data[index].title;
            var author = data[index].authors["0"].name;
            var year = data[index].publish_date;
            var publisher = data[index].publishers["0"].name; 
            var pages = data[index].pagination; 
            
            
            result.append('<img class="flex-item" src="' + coverURL + '">');
            result.append("Title: " + title + "</br>"); 
            result.append("Author: " + author + "</br>"); 
            result.append("Publish: " + year + "</br>"); 
            result.append("Publisher: " + publisher + "</br>"); 
            result.append("Pages: " + pages + "</br>");
 
        },
        
        error: function(error) {
            console.log("Error");
            console.log(error);
        }
    });//ajax

}