 function CalculateAge(){
    const DOB= document.getElementById('DOB').value;
    if(!DOB){
        alert("Please Enter Your Date Of Birth");
        return;
    }
    const today= new Date();
    const DOBDate =new Date(DOB);
    let age= today.getFullYear()-DOBDate.getFullYear();
    const month= today.getMonth()-DOBDate.getMonth();
    const day= today.getDate()-DOBDate.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }
    document.getElementById('Result').textContent=  `You are ${age} years old`;

}