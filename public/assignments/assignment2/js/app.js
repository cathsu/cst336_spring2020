$(document).ready(function(){
    
    
    
    // Ensure form is filled with 0 or positive numbers
    function validate() {
        let item1 = $('#item1').val(); 
        let item2 = $('#item2').val(); 

        console.log(item1);
        let isValid = true;
        if (isNaN(parseInt(item1))) { //take into account 0 items bought
            console.log(item1);
            $('#invalid-input-text1').removeAttr('hidden');
            $('#negative-number-text1').attr('hidden', true);
            isValid = false;

        } else if (item1 < 0) {
            console.log('positive number');
            $('#negative-number-text1').removeAttr('hidden');
            $('#invalid-input-text1').attr('hidden', true);
            isValid = false;
        }
        else {
            $('#invalid-input-text1').attr('hidden', true);
            $('#negative-number-text1').attr('hidden', true);
        }
        
        if (isNaN(parseInt(item2))) { //take into account 0 items bought
            $('#invalid-input-text2').removeAttr('hidden');
            $('#negative-number-text2').attr('hidden', true);
            isValid = false;

        } else if (item2 < 0) {
            $('#negative-number-text2').removeAttr('hidden');
            $('#invalid-input-text2').attr('hidden', true);
            isValid = false;
        } 
        else {
            $('#invalid-input-text2').attr('hidden', true);
            $('#negative-number-text2').attr('hidden', true);
        }
        return isValid;
    }
    
    // Calculate total cost
    function getTotal() {
        let cost = 0;
        if (validate()) {
            let item1 = $('#item1').val(); 
            let item2 = $('#item2').val(); 
            cost += 5*item1 + 0.25*item2;
            $("#totalCost").html(`Total Cost: $${cost.toFixed(2)}`);
        } else {
            $("#totalCost").html("");
        }
        
    }
    
    $("#sButton").on("click", getTotal); 
})
