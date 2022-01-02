function addProgram(){
 const programName = prompt("Enter the name of the program you wish to add: ");
 let listElt = document.createElement("li");
 listElt.textContent = programName;
 let list = document.getElementById("progList");
 list.appendChild(listElt);
}

