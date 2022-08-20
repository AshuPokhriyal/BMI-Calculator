function getSelectedMetric(){
    if (document.getElementById('metricradio').checked) {
      document.getElementById('ftheight-container').style.display="none";
      document.getElementById('cmheight').style.display="flex";
    }
  else if(document.getElementById('usradio').checked){
      document.getElementById('ftheight-container').style.display="flex";
      document.getElementById('cmheight').style.display="none";
    }
}

function calculateBMI(){
  if(IsValidate()){
  var heightinmeter;
  var bmiResult;
  if (document.getElementById('metricradio').checked) {
      var heightincm = document.getElementById('heightincm').value;
      heightinmeter=heightincm/100;
  }else if(document.getElementById('usradio').checked){
      var heightinch=document.getElementById('inchheight').value;
      var ftconverter=heightinch/12;
      var ftHeight=document.getElementById('ftheight').value;
      var heightinft= Number(ftHeight)+ ftconverter;
      heightinmeter=heightinft/3.281;
    }
    bmiResult=document.getElementById('weight').value/Math.pow(heightinmeter,2);
    if(bmiResult < 18.5){
      document.getElementById("result-img").src="images/underweight.png";
      document.getElementById('result-desc').innerHTML="You are under weight"
    }else if (bmiResult >= 18.5 && bmiResult <25 ) {
      document.getElementById("result-img").src="images/body-weight.png";
      document.getElementById('result-desc').innerHTML="You are in healthy weight range"
    }else if (bmiResult>=25 && bmiResult<30) {
      document.getElementById("result-img").src="images/overweight.png";
      document.getElementById('result-desc').innerHTML="You are over weight"
    }else if (bmiResult>=30) {
      document.getElementById("result-img").src="images/obesity.png";
      document.getElementById('result-desc').innerHTML="You are obese"
    }
    document.getElementById('result-bmi').innerHTML=Math.round(bmiResult);
  }
}


function IsValidate(){
  var isvalidate =true;
  if (document.getElementById('metricradio').checked) {
      var heightincm = document.getElementById('heightincm').value;
      var weight = document.getElementById('weight').value;
      if(heightincm==null || heightincm==""){
        alert("Height should not be blank");
        if (weight==null || weight=="") {
          alert("Weight should not be blank");
        }
        isvalidate=false;
      }
  }
  else if (document.getElementById('usradio').checked) {
      var heightinft = document.getElementById('ftheight').value;
      var weight = document.getElementById('weight').value;
      if(heightinft==null || heightinft==""){
        alert("Height should not be blank");
        if (weight==null || weight=="") {
          alert("Weight should not be blank");
        }
      isvalidate=false;
  }
}
  return isvalidate;
}
