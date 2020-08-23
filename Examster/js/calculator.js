function display(val)
{
    document.getElementById("enter").value += val
}

function solve()
{
    let x = document.getElementById("enter").value
    let y = eval(x)
    document.getElementById("enter").value = y
}

function clr()
{
    document.getElementById("enter").value = ('')
}


// Question Numbers
var Count=0;

function funcOne() {
    Count++;
    document.getElementById("resultHere").innerHTML=Count;
}

function funcTwo() {
    var dec = parseInt(document.getElementById("resultHere").innerHTML=dec);
    dec = isNaN(dec) ? 0 : dec;
    dec < 1 ? dec = 1 : "";
    dec--;
    document.getElementById("resultHere").innerHTML=dec;
}

//question end





function btnToggle() { 
    document.getElementById("Dropdown").classList.toggle("show"); 
} 
  
// Prevents menu from closing when clicked inside 
document.getElementById("Dropdown").addEventListener('click', function (event) { 
    event.stopPropagation(); 
}); 
  
// Closes the menu in the event of outside click 
window.onclick = function(event) { 
    if (!event.target.matches('.dropbutton')) { 
      
        var dropdowns =  
        document.getElementsByClassName("dropdown-menu"); 
          
        var i; 
        for (i = 0; i < dropdowns.length; i++) { 
            var openDropdown = dropdowns[i]; 
            if (openDropdown.classList.contains('show')) { 
                openDropdown.classList.remove('show'); 
            } 
        } 
    } 
} 


// FAB
$(function() {
	$('.btn-group-fab').on('click', '.btn', function() {
	$('.btn-group-fab').toggleClass('active');
	});
	$('has-tooltip').tooltip();
    }); 
    
    //FAB END



    
	function addChar(input, character) {
        if(input.value == null || input.value == "0")
        input.value = character
        else
        input.value += character
        }
        
        function cos(form) {
        form.display.value = Math.cos(form.display.value);
        }
        
        function sin(form) {
        form.display.value = Math.sin(form.display.value);
        }
        
        function tan(form) {
        form.display.value = Math.tan(form.display.value);
        }
        
        function sqrt(form) {
        form.display.value = Math.sqrt(form.display.value);
        }
        
        function ln(form) {
        form.display.value = Math.log(form.display.value);
        }
        
        function exp(form) {
        form.display.value = Math.exp(form.display.value);
        }
        
        function deleteChar(input) {
        input.value = input.value.substring(0, input.value.length - 1)
        }
        var val = 0.0;
        function percent(input) {
        val = input.value;
        input.value = input.value + "%";
        }
        
        function changeSign(input) {
        if(input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
        else 
        
        input.value = "-" + input.value
        }
        
        function compute(form) {
        //if (val !== 0.0) {
        // var percent = form.display.value;  
        // percent = pcent.substring(percent.indexOf("%")+1);
        // form.display.value = parseFloat(percent)/100 * val;
        //val = 0.0;
        // } else 
        form.display.value = eval(form.display.value);
        }
        
        
        function square(form) {
        form.display.value = eval(form.display.value) * eval(form.display.value)
        }
        
        function checkNum(str) {
        for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
        if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
        && ch != "(" && ch!= ")" && ch != "%") {
        alert("invalid entry!")
        return false
        }
        }
        }
        return true
        } 
        
        