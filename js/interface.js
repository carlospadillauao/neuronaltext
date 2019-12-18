var matriz_clases = [""];
//var datos_in = [""];
//var datos_out = [""];

var class_array = [];
var cont = 0;
var cont_clases = 0;
$("#agregar_clase").click(function (event) {

    for (l = 0; l < matriz_clases.length; l++) {
        if ($("#class-input").val() == matriz_clases[l]) {
            contc = 1;
        }
        if ($("#class-input").val() == "") {
            contc = 1;
        }
        else if ($("#class-input").val() != matriz_clases[l]) {
            contc = 2;
        }
    }
    if (contc == 2) {
        matriz_clases.push($("#class-input").val());

        document.clases_formulario.clases_f.length = matriz_clases.length;
        document.clases_formulario2.clases_f2.length = matriz_clases.length;
        for (i = 0; i < matriz_clases.length; i++) {
            document.clases_formulario.clases_f.options[i].value = matriz_clases[i];
            document.clases_formulario.clases_f.options[i].text = matriz_clases[i];
            document.clases_formulario2.clases_f2.options[i].value = matriz_clases[i];
            document.clases_formulario2.clases_f2.options[i].text = matriz_clases[i];
        }
        console.log(document.clases_formulario.clases_f[document.clases_formulario.clases_f.selectedIndex].value);
    }
    /*datos_out = matriz_clases;
    datos_out.splice(0,1);
    console.log(datos_out);*/

})

function item_lista() {
    console.log(document.clases_formulario.clases_f[document.clases_formulario.clases_f.selectedIndex].value);
}

$("#borrar_clase").click(function (event) {
    matriz_clases = ["-"];
    document.clases_formulario.clases_f.length = matriz_clases.length;
    document.clases_formulario2.clases_f2.length = matriz_clases.length;
    for (i = 0; i < matriz_clases.length; i++) {
        document.clases_formulario.clases_f.options[i].value = matriz_clases[i];
        document.clases_formulario.clases_f.options[i].text = matriz_clases[i];
        document.clases_formulario2.clases_f2.options[i].value = matriz_clases[i];
        document.clases_formulario2.clases_f2.options[i].text = matriz_clases[i];
    }

})
$("#text-button").click(function (event) {   

    datos_in.push(String($("#text-input").val()));

    datos_out.push(document.clases_formulario2.clases_f2[document.clases_formulario2.clases_f2.selectedIndex].value);
    class_array.push("new");
    console.log(datos_out);
    console.log(datos_in);
    $("#texto2").text(datos_in.length);
    $("#lista").append("<li>"
        + '<label for="" class=' + "listtt_2" + ">" + cont_clases + "</label>"
        + '<label for="" class=' + "listtt" + ">" + document.clases_formulario2.clases_f2[document.clases_formulario2.clases_f2.selectedIndex].value + "</label>"
        + '<label>'+String($("#text-input").val())+'</label>' 
        + "</li>");
    cont_clases = cont_clases + 1;
})
var sat = 0;
$("#train-button").click(function (event) {
    document.getElementById("e1").style.display = "none";
    document.getElementById("train-button").style.display = "none";
    document.getElementById("e3").style.display = "flex";
    document.getElementById("e4").style.display = "flex";
    document.getElementById("e5").style.display = "none";
    document.getElementById("e6").style.display = "none";


    sat = 1;
    cont = 0;
    datos_new = [];
    console.log("Training");
    console.log(datos_new);
   
    
    classes();
    datos();                   
    neuronal();

})
$("#predict-button").click(function (event) {
    document.getElementById("texto4").style.display = "none";
    document.getElementById("spinerf").style.display = "flex";
    sat = 2;
    datos_new = [];
    datos_new.push(String($("#text-val").val()));
    console.log("texto validar");
    console.log(datos_new);
    classes();
    datos();                 
    neuronal();
})
$("#btn_borrar_ultimo").click(function () {
    datos_in.pop();
    datos_out.pop();
    class_array.pop();
    console.log(datos_out);
    console.log(datos_in);
    var list = document.getElementById("lista");   // Get the <ul> element with id="myList"
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    if (cont_clases > 0) {
        cont_clases = cont_clases - 1;
    }

    $("#lista").append("<li>"
        + '<label for="" class=' + "listtt_2" + ">" + "#" + "</label>"
        + '<label for="" class="listtt">Clase</label><label for="" class="listtt">Imagen</label>'
        + "</li>");

    var contadorx = 0;
    datos_in.forEach(element => {
        $("#lista").append("<li>"
            + '<label for="" class=' + "listtt_2" + ">" + contadorx + "</label>"
            + '<label for="" class=' + "listtt" + ">" + datos_out[contadorx] + "</label>"
            + '<label>' + datos_in[contadorx] + '</label>'
            + "</li>");
        contadorx = contadorx + 1;
    });
    contadorx = 0;

});
