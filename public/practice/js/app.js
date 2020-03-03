function getInfo() {
    let inputNum = parseInt($("#inputNum").val()); 
    let result = $("#result");
    $.ajax({
        method: "GET",
        url: "https://dog.ceo/api/breeds/image/random/" + inputNum,
        dataType: "json",
        // data: { "": },
        success: function(data) {
            // result.html('<div class="flex-container">');
            result.html("");
            
            let imagesURL = data.message;
            
            imagesURL.forEach(function(imageURL) {
                result.append(`
                                <div class="flex-item">
                                <img src ="` + imageURL + `">
                                </div>
                                `);    
            }) //imagesURL
 
        } 
    });//ajax

}