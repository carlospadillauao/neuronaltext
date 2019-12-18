var model = new Object();
var lectura = [];
async function neuronal() {
    var xs = tf.tensor2d(bolsa_datos_full, [bolsa_datos_full.length, vocabulario2.length], 'int32');
    var ys = tf.tensor2d(datos_clases_full, [datos_clases_full.length, datos_clases_full[0].length], 'int32');
    var zs = tf.tensor2d(bolsa_datos_new, [bolsa_datos_new.length, vocabulario2.length], 'int32');

    if (sat == 1) {


        model = tf.sequential();
        model.add(tf.layers.dense({ units: 12, activation: 'relu', inputShape: [vocabulario2.length] }));
        model.add(tf.layers.dense({ units: datos_clases_full[0].length, activation: 'sigmoid' }));

        model.compile({
            loss: 'binaryCrossentropy',//'meanSquaredError',
            optimizer: tf.train.adam(0.05),//(0.005),tf.train.sgd(0.001),
            metrics: ['accuracy']
        });
        var c = 0;
        async function training() {
            c = c + 1;
            console.log(c);
        }

        model.fit(xs, ys, { epochs: 100, callbacks: { onEpochEnd: (epoch, logs) => training() } }).then(() => {

            //codigo ejecutado al finalizar 
            //model.predict(xs).print();
            //model.predict(zs).print();
            document.getElementById("e3").style.display = "none";
            document.getElementById("e4").style.display = "none";
            document.getElementById("e5").style.display = "flex";
            document.getElementById("e6").style.display = "flex";
            document.getElementById("train-button").style.display = "flex";
        });

    }
    if (sat == 2) {

        model.predict(xs).print();
        //lectura = model.predict(zs);

        const ou = await model.predict(zs);

        const oug = Array.from(await ou.data());
        console.log(oug);
        var numbers = await oug;
        numbers.sort(function (a, b) {
            return a - b;
        });
        //console.log(oug);
        //console.log(numbers);

        const oug4 = Array.from(await ou.data());
        //console.log(oug4);

        model.predict(zs).print();

        if (oug.length == 1) {
            document.getElementById("texto4b").style.display = "none";
            document.getElementById("texto4c").style.display = "none";
            $("#texto4").text("Clase: " + matriz_clases[oug4.indexOf(numbers[numbers.length - 1])+1] + " probabilidad: " + numbers[numbers.length - 1] * 100 + "%");

        }
        if (oug.length == 2) {
            document.getElementById("texto4b").style.display = "flex";
            document.getElementById("texto4c").style.display = "none";
            $("#texto4").text("Clase: " + matriz_clases[oug4.indexOf(numbers[numbers.length - 1])+1] + " probabilidad: " + numbers[numbers.length - 1] * 100 + "%");
            $("#texto4b").text("Clase: " + matriz_clases[oug4.indexOf(numbers[numbers.length - 2])+1] + " probabilidad: " + numbers[numbers.length - 2] * 100 + "%");

        }
        if (oug.length >= 3) {
            document.getElementById("texto4b").style.display = "flex";
            document.getElementById("texto4c").style.display = "flex";
            $("#texto4").text("Clase: " + matriz_clases[oug4.indexOf(numbers[numbers.length - 1])+1] + " probabilidad: " + numbers[numbers.length - 1] * 100 + "%");
            $("#texto4b").text("Clase: " + matriz_clases[oug4.indexOf(numbers[numbers.length - 2])+1] + " probabilidad: " + numbers[numbers.length - 2] * 100 + "%");
            $("#texto4c").text("Clase: " + matriz_clases[oug4.indexOf(numbers[numbers.length - 3])+1]+ " probabilidad: " + numbers[numbers.length - 3] * 100 + "%");
        }


        document.getElementById("spinerf").style.display = "none";
        document.getElementById("texto4").style.display = "flex";
    }
}


//neuronal();
