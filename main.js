var modelo = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9-XzSqzG4/model.json", listo);
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100 
});
Webcam.attach("#camara");
function tomarFoto(){
    Webcam.snap(function(uri){
document.getElementById("captura").innerHTML = '<img src="'+uri+'" id="foto">';
    }) 
}
function listo(){
    console.log("ya estoy listo para el examen")
}
function reconocer(){
    foto = document.getElementById("foto");
    modelo.classify(foto, mostrarRespuesta);
}
function mostrarRespuesta(error,resultados){
    if(!error){
        console.log(resultados);
objeto = resultados[0].label;
        document.getElementById("objeto").innerHTML = objeto;
        porcentaje = resultados[0].confidence;
        porcentaje = porcentaje * 100;
        porcentaje = Math.round(porcentaje)
document.getElementById("porcentaje").innerHTML = porcentaje + "%"
    }
}