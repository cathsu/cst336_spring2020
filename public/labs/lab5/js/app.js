// AJAX call to display random images when page is reloaded
$(document).ready(function(){
    var SIZE = 4;
    var results = $("#results");
    var arr = ["otter", "sunflower", "winter", "california"];
    var keyword = arr[Math.floor((Math.random()) * arr.length-1)]; 
    
    // return a random number from 0 to totalHits
    function getRandomIndices(arr, totalHits) {
        console.log(totalHits);
        let i = 0;
        while (i < SIZE) {
            var randomNumber = (Math.floor((Math.random()) * totalHits));
            if (!(arr.includes(randomNumber))) {
                arr[i] = randomNumber;
                i ++;
            }
            
        }
    }
    
    var URL = "https://pixabay.com/api/?key=";
    var API_KEY = "15391705-950cb256f2c7cb87c365c78fc"; 
    $.ajax({
        method: "GET",
        url: URL + API_KEY, 
        dataType: "json",
        // parameters the Web API is expecting
        data:  {"q" : keyword,
                "orientation": "horizontal"
            
        },
        success: function(data) {
            results.html("<br><br><h4>Results</h4>");
            console.log(data);
            var elements = data.hits;
            var numImages = elements.length;
            var randomIndices = new Array(SIZE);
            
            getRandomIndices(randomIndices, numImages);
            
            // display 4 random images and the number of likes above the image
            randomIndices.forEach(function(index) {
                let imageURL = elements[index].previewURL;
                let like = elements[index].likes;
                results.append(`
                                <div class = "likes">  
                                    Likes: ` + like + 
                                    `<img src = "` + imageURL + `">
                                </div>
                `); //results 
            }) //randomIndices
            
            results.append(`</div>`); 
        }, //success

        error: function(err) {
            console.log("Error");
        }
    });//ajax
    
}); 
    
// AJAX call when keywords are entered
function getInfo() {
    var keyword = $("#keyword").val();
    var orientation = $("#orientation").find(":selected").val();
    var results = $("#results");
    var SIZE = 4;
    console.log(keyword); 
    console.log(orientation);
    
    // return a random number from 0 to totalHits
    function getRandomIndices(arr, totalHits) {
        console.log(totalHits);
        let i = 0;
        while (i < SIZE) {
            var randomNumber = (Math.floor((Math.random()) * totalHits));
            if (!(arr.includes(randomNumber))) {
                arr[i] = randomNumber;
                i ++;
            }
            
        }
    }
    
    var URL = "https://pixabay.com/api/?key=";
    var API_KEY = "15391705-950cb256f2c7cb87c365c78fc"; 
    $.ajax({
        method: "GET",
        url: URL + API_KEY, 
        dataType: "json",
        // parameters the Web API is expecting
        data:  {"q" : keyword,
                "orientation": orientation
            
        },
        success: function(data) {
            results.html("<br><br><h4>Results</h4>");
            console.log(data);
            var elements = data.hits;
            var numImages = elements.length;
            var randomIndices = new Array(SIZE);
            
            getRandomIndices(randomIndices, numImages);
            
            // display 4 random images and the number of likes above the image
            randomIndices.forEach(function(index) {
                let imageURL = elements[index].previewURL;
                let like = elements[index].likes;
                results.append(`
                                <div class = "likes">  
                                    Likes: ` + like + 
                                    `<img src = "` + imageURL + `">
                                </div>
                `); //results 
            }) //randomIndices
            
            results.append(`</div>`); 
        }, //success

        error: function(err) {
            console.log("Error");
        }
    });//ajax
}