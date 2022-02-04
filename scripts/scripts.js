function insert(number){
  document.form.textview.value = document.form.textview.value + number;
}

function equal(){
  expression = document.form.textview.value;
  if(expression){
     document.form.textview.value = eval(expression);
  } else{
      window.alert('Por favor, informe os números para operação')
  }
}
function c(){
  document.form.textview.value = "";
}

function back(){
  var expression = document.form.textview.value;
  document.form.textview.value = expression.substring(0, expression.length-1)
}
