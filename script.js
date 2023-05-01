function example() {
        
    // Creating Date Object 
    var dateobj = new Date();
    
    // Year from the above object 
    // is being fetched using getFullYear() 
    var dateObject = dateobj.getFullYear();
    
    // Printing current year 
    document.getElementById("myID").innerHTML = 
    "The Current Year is " + dateObject;
}