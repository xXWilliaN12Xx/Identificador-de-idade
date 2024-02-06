function verificar() {
  //Function check where we will have the values ​​being implemented within this function

  var data = new Date(); //date variable that will receive a new date

  var ano = data.getFullYear(); //year variable that will receive the date in full years

  var fano = document.getElementById("txtano"); //We will also have a variable called the year form that will contain a getElement of the id 'txt year' of the input in the html
  var resultado = document.getElementById("resultado"); //The result variable checked from the result div

  if (fano.value.length == 0 || fano.value > ano) {
    //If the value is equal to zero or the year form is greater than the year
    alert("[ERRO] Verifique os dados e tente novamente!"); //Display of the following message
  } else {
    var fsex = document.getElementsByName("radsex"); //We will also have the sex form variable
    
    var idade = ano - Number(fano.value); //the age variable that will receive the value of the year variable
    
    var gênero = ""; //variable that will not receive value
    
    var img = document.createElement("img"); //interactive image creation
    img.setAttribute("id", "foto");
   

    //Here we will have an if that will contain your commands and certain photos for each occasion
    if (fsex[0].checked) {
      gênero = "homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "foto-criança-m.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "foto-jovem-m.jpg");
      } else if (idade < 60) {
        // Adulto
        img.setAttribute("src", "foto-adulto-m.jpg");
      } else {
        //Idoso
        img.setAttribute("src", "foto-idoso-m.jpg");
      }
    } else if (fsex[1].checked) {
      gênero = "mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "foto-criança-f.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "foto-jovem-f.jpg");
      } else if (idade < 60) {
        // Adulta
        img.setAttribute("src", "foto-adulta-f.jpg");
      } else {
        //Idosa
        img.setAttribute("src", "foto-idosa-f.jpg");
      }
    }
    resultado.style.textAlign = "center"; //The result will be displayed in this command
    resultado.innerHTML = `Detectamos um ${gênero} com a idade de ${idade} anos`;
    resultado.appendChild(img);
  }
}
