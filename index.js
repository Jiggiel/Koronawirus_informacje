$(document).ready(function() { 
$("#polaform").submit(function(event) 
	{ performSearch(event); }); 
}); 

function performSearch(event) { 
  var request; 
  event.preventDefault(); 

  request = $.ajax({ 
      url:"https://api.covid19api.com/summary", 
      type: "GET", 
  }); 
  
pat=$("#poletekstowe").val();  
  
  request.done(function (response) { 
      
    // Calling formal search after getting data from api 
    formatSearchResults(response); 
  });
} 

var pat, flag = 0; 
function formatSearchResults(jsonResults) { 
  
    // Storing Json Data in jsonobject variable 
    var jsonObject = jsonResults; 
  
    jsonObject.Countries.forEach(function (item) { 
  
        // Matching user search data with api data  
        if (item.Country.toLowerCase() == pat.toLowerCase()) {
  
            // Printing the result 

var kraj = document.getElementById("kraj");
kraj.innerHTML += "Kraj: " + item.Country + "</br>";
			
var lacznie = document.getElementById("rezultat");
lacznie.innerHTML += "Zachorowań łącznie: " + item.TotalConfirmed + "</br>";  
  
var totalsmier = document.getElementById("rezultat");
totalsmier.innerHTML += "Śmierci łącznie: " + item.TotalDeaths + "</br>";

var totalprzyw = document.getElementById("rezultat");
totalprzyw.innerHTML += "Wyzdrowień łącznie: " + item.TotalRecovered + "</br>";
			
var nowepotw = document.getElementById("rezultat");
nowepotw.innerHTML += "Nowe zachorowania: " + item.NewConfirmed + "</br>";  

var nowesmier = document.getElementById("rezultat");
nowesmier.innerHTML += "Nowe śmierci: " + item.NewDeaths + "</br>";

var noweprzywr = document.getElementById("rezultat");
noweprzywr.innerHTML += "Nowe wyzdrowienia: " +item.NewRecovered + "</br>"; 
  
            flag = 1; 
            return; 
        } 
    }); 
 
} 

function resetResults() { 
$("#rezultat").text(""); 
$("#kraj").text(""); 
flag=0; 
} 

function sanitizeInputs() { 
var str = $("#poletekstowe").val(); 
str = str.replace(/[^a-zA-Z 0-9, ]/gim, ""); 
str = str.trim(); 
$("#poletekstowe").val(str); 
} 
