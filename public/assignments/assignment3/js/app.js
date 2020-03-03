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
            output.empty();
            var result = data[0]; 
            console.log(data);
    
            output.append('<div id="output">');
            
            if (data.error_code === 50) {
                output.append('<h4 class ="error">Error: '+ data.error + '</h4>');
                if (output.hasClass('female')) {
                    output.removeClass('female');
                }
                if (output.hasClass('male')) {
                    output.removeClass('male');
                }
                
            }
            else {
                if (result.gender === 'f') {
                    output.append('<h5>' + result.name + ' is usually associated with the female gender </h5>');
                    output.addClass('female');
                }
                else {
                    output.append('<h5>' + result.name + ' is usually associated with the male gender</h5>');
                    output.addClass('male');
                }
                
                output.append('<p>' + result.name + ' is used in the following cultures: </p>');
                // output.append('<div class="list">');
                output.append('<ul>')
                result.usages.forEach(function(element) {
                    var country = element.usage_full;
                    output.append('<li class="list">' + country + '</li>')
                    
                }) //data.usages
                
                // change color of bullet points
                if (result.gender === 'f') {
                        $('li').addClass('femaleList');
                } 
                else {
                    $('li').addClass('maleList');
                }
                
                output.append('</ul>');
                // output.append('</div>'); //center
                output.append('</div>'); //output
            }
     
        }, //success 
        
        error: function(err) {
            output.append('<div id="output">');
            output.append(err);
            output.append('</div>');
        } //error
        
    });//ajax

}

