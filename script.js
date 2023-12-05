function displayData(){
  var weight= w.value
  var height= h.value
  var bmi=weight/height**2 
  var result=''
  if(bmi>=18.5 && bmi<=24.9){
    result='Normal weight, Healthy';
}else if(bmi<18.5){
    result='Underweight, eat alot';
}else{
    result='Overweight, take diet';
}
  out.innerHTML=`<h1 class="text-center">${bmi}</h1>
  <h3>${result}</h3>
  `
               
// alert(bmi)
}