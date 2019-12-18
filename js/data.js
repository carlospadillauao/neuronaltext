var vocabulario2 = [];
var bolsa_datos_full = [];
var bolsa_datos_new = [];
var datos_clases_full = [];
var datos_new = [];//["i like sandwich","how is your mom today?"];

var datos_in = [];
var datos_out = [];
var datos_out_mod = [];

var clas_vocabulario = [];

function datos(){
console.log("procesando datos");
//#1 adquirir datos 
var datos_texto = datos_in;

var datos_clases = datos_out_mod;

datos_clases_full = datos_clases;

//#2 preparar texto para entrenamiento 
//-1 separar texto por palabras (vocabulario)
var vocabulario = [];
var cont1 = 0;
var cont2 = 0;
datos_texto.forEach(element => {
    
    datos_texto[cont1].split(/[,.!?'\s/]+/).forEach(element => {
        if (datos_texto[cont1].split(/[,.!?_\s]+/)[cont2]=="") {
            
        } else {
            vocabulario.push(datos_texto[cont1].split(/[,.!?_\s]+/)[cont2]); 
            cont2 = cont2 + 1;  
        }
        
    }); 
    cont2 = 0;
    cont1 = cont1 + 1;  
});
console.log("datos de entrada");
console.log(datos_texto);
console.log("listado palabras completo");
console.log(vocabulario);
//-2 eliminar palabras repetida
var cont3 = 0;
vocabulario.forEach(element => {
    if (vocabulario2.indexOf(vocabulario[cont3])==-1) {
        
        vocabulario2.push(vocabulario[cont3]);
            
    }
    cont3 = cont3 + 1;  
});
console.log("vocabulario");
console.log(vocabulario2);
//-3 bolsa de datos
bolsa_datos_full = bolsa_d(datos_texto);
bolsa_datos_new = bolsa_d(datos_new);
console.log("bolsa datos");
console.log(bolsa_datos_full);
}

//bolsa de datos
function bolsa_d(variable_datos){
var datos_pr = variable_datos;
var bolsa_datos_pr = [];
var bolsa_datos = [];
var cont4 = 0;
var cont5 = 0;
datos_pr.forEach(element => {
    bolsa_datos = [];
    vocabulario2.forEach(element => {
        bolsa_datos.push(0);
    });
    datos_pr[cont5].split(/[,.!?_\s]+/).forEach(element => {
        if (vocabulario2.indexOf(datos_pr[cont5].split(/[,.!?_\s]+/)[cont4])!=-1) {
            bolsa_datos[vocabulario2.indexOf(datos_pr[cont5].split(/[,.!?_\s]+/)[cont4])] = 1;
        }else if(vocabulario2.indexOf(datos_pr[cont5].split(/[,.!?_\s]+/)[cont4])==-1){
            bolsa_datos[vocabulario2.indexOf(datos_pr[cont5].split(/[,.!?_\s]+/)[cont4])] = 0;
        } 
        cont4 = cont4 + 1;
    });
    bolsa_datos_pr.push(bolsa_datos);
    cont4 = 0;
    cont5 = cont5 + 1;
});
return bolsa_datos_pr;
}
function classes(){
    var clas = datos_out;
    clas_vocabulario = [];
    var clas2 = [];   
    var escalon = [];    
    var cont6 = 0;
    var cont7 = 0;
    var cont8 = 0;
    var cont9 = 0;
    var cont10 = 0;
    //crear matriz con el vocabulario
    clas.forEach(element => {
        if (clas_vocabulario.indexOf(clas[cont6])==-1) {
         clas_vocabulario.push(clas[cont6]);
        }
        cont6 = cont6 + 1;  
    });
    //crear arreglo dimencionado
    clas.forEach(element => {
        cont8 = 0;        
        clas_vocabulario.forEach(element => {
            escalon.push(0);
            cont8 = cont8 + 1;
        });  
        clas2.push(escalon);
        escalon = [];
        cont7 = cont7 + 1;      
    });
    //acomodar matriz con las magnitudes de salida
    clas.forEach(element => {
        cont10 = 0;
        clas_vocabulario.forEach(element => {
            if (clas[cont9] == clas_vocabulario[cont10]) {
                clas2[cont9][cont10] = 1;
            } else {
                clas2[cont9][cont10] = 0;
            }
            cont10 = cont10 + 1;
        });  
        cont9 = cont9 + 1;      
    });
    /*console.log("!!!!!!");
    console.log(clas2);
    console.log("!!!!!!");
    console.log(clas_vocabulario);*/
    datos_out_mod = clas2;
}

//datos();