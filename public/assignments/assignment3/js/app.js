document.getElementById("nameForm").addEventListener("submit", getGender);

function getGender() {
    var name = $("#inputName").val();
    var output = $("#output"); 
    var URL = "https://www.behindthename.com/api/lookup.json"; 
    var API_KEY = "ca122000358"; 
    $.ajax({
      method: "GET",
         url: URL,
        dataType: "json",
        data: { "key": API_KEY, 
                "name": name},
        success: function(data) {
            var result = data[0]; 
            console.log(data);
    
            output.empty();
            removeClasses(); //remove all output classes!
            
            // if name cannot be found!
            if (data.error_code === 50) {
                output.append('<h4 class ="error">Error: '+ data.error + '</h4>');
                
            }
            else {
                if (result.gender == 'f') {
                    output.append('<h5>' + result.name + ' is usually associated with the female gender</h5>');
                    output.addClass('femaleBackground');
                    // output.removeClass('maleBackground');
                }
                else if (result.gender == 'm') {
                    output.append('<h5>' + result.name + ' is usually associated with the male gender</h5>');
                    output.addClass('maleBackground');
                    // output.removeClass('femaleBackground');
                }
                else { //result.gender == 'fm' or 'mf'
                    output.append('<h5>' + result.name + ' is associated with both males and females</h5>');
                    output.addClass('bothBackground');
                }
                
                output.append('<p>' + result.name + ' is used in the following cultures: </p>');
                output.append('<ul>')
                
                // if name is associated with only 1 gender, just print out the cultures that use it
                if (result.gender == 'f' || result.gender == 'm') {
                    result.usages.forEach(function(element) {
                        var country = element.usage_full;
                        output.append('<li class="list">' + country + '</li>')
                        
                    }) //data.usages
                }
                
                // if name is associated with both genders, print out culture and associated gender
                else {
                    console.log(data.length);
                    for (var i = 0; i<data.length; i++) {
                        for (var j = 0; j<data[i].usages.length; j++) {
                            var countryGender = data[i].usages[j].usage_full + "-" + data[i].usages[j].usage_gender;
                            output.append('<li>' + countryGender + "</li>")
                        }
                    }
                }
                    
                // change color of bullet points
                if (result.gender === 'f') {
                        $('li').addClass('femaleList');
                } 
                else if (result.gender == 'm') {
                    $('li').addClass('maleList');
                }
                else {
                    $('li').addClass('bothList');
                }
                
                output.append('</ul>');
            }
     
        }, //success 
        
        error: function(err) {
            output.append('<div id="output">');
            output.append(err);
            output.append('</div>');
        } //error
        
    });//ajax

}

function removeClasses (){
    var output = $("#output"); 
    output.removeClass("femaleBackground"); 
    output.removeClass("maleBackground"); 
    output.removeClass("bothBackground");
    
}

