function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	return /^[0-9]{13}$/.test(nid); 
  }

  function checkTicketNo() {
	let num = parseInt(document.getElementById("ticknum").value.trim());
	return (!isNaN(num) && num >= 1 && num <= 5);
  }

function validateForm(){
	let fname = document.getElementById("fname").value.trim();
	let lname = document.getElementById("lname").value.trim();
	if (fname === "" || lname === "") { 
    alert("Please fill in all fields"); 
    return false; 
}
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
		}
	}
}