class articulo {
    constructor(nombrearticulo, nombrecomercial, precioarticulo, carticulo, totalarticulo, costoarticulo, borrararticulo, numeroarticulo) {
        this.nombrearticulo = nombrearticulo;
        this.nombrecomercial = nombrecomercial;
        this.carticulo = carticulo;
        this.totalarticulo = totalarticulo;
        this.costoarticulo = costoarticulo;
        this.borrararticulo = borrararticulo;
        this.numeroarticulo = numeroarticulo;
        this.precioarticulo = precioarticulo;
        this.articulo = function() {
            document.getElementById(this.nombrearticulo).innerHTML = this.nombrecomercial;
            var vcandidadarticulo = Number(document.getElementById(this.carticulo).value);
            document.getElementById(this.totalarticulo).innerHTML = vcandidadarticulo;
            var vcostoarticulo = vcandidadarticulo * this.precioarticulo;
            document.getElementById(this.costoarticulo).innerHTML = vcostoarticulo;
            document.getElementById(this.borrararticulo).innerHTML = `<p><button type="button" class="btn btn-danger btn-sm" onclick="this.frestararticulo, this.fborrararticulo"><i class="fa fa-trash"></i></button></p>`
            document.getElementById(this.numeroarticulo).value = vcandidadarticulo;
        }
        this.fborrararticulo = function() {
            document.getElementById(this.nombrearticulo).innerHTML = " ";
            document.getElementById(this.totalarticulo).innerHTML = " ";
            document.getElementById(this.costoarticulo).innerHTML = " ";
            document.getElementById(this.borrararticulo).innerHTML = " ";
            document.getElementById(this.carticulo).value = 0;
            document.getElementById(this.numeroarticulo).value = 0;
        }
        this.frestararticulo = function() {
            var totales = totalPagar()
            var menosarticulo = totales - (Number(document.getElementById(this.carticulo).value) * this.precioarticulo);
            return document.getElementById("Total").innerHTML = menosarticulo;
        }
        this.validararticulo = function() {
            if ((Number(document.getElementById(this.carticulo).value) * this.precioarticulo) == 0 || (Number(document.getElementById(this.carticulo).value) * this.precioarticulo) < 0) {
                alert("la Cantidad es cero o negativa");
                document.getElementById(this.carticulo).value = 0;
            } else {
                this.articulo();
                totalPagar();
            }
        }

    }
}

function totalPagar() {
    var numharinapans = Number(document.getElementById("charinapan").value) * precioharinapan;

    var numnaranjas = Number(document.getElementById("cnaranja").value) * precionaranja;

    var numuvas = Number(document.getElementById("cuva").value) * preciouva;

    var numarrozdiana500g = Number(document.getElementById("cArrozDiana").value) * precioArrozDiana;

    var numARROZDIANAARROBA = Number(document.getElementById("cARROZDIANAARROBA").value) * precioARROZDIANAARROBA;


    var numARROZROA500g = Number(document.getElementById("cARROZROA500g").value) * precioARROZROA500g;

    var totalpagar = numharinapans + numnaranjas + numuvas + numarrozdiana500g + numARROZDIANAARROBA + numARROZROA500g;
    return document.getElementById("Total").innerHTML = totalpagar;

}

var harinapan = new articulo("nombreharinapan", "Harina Pan", 1600, "charinapan", "totalharinapans", "costoharinapans", "borrarharinapans", "numerodeharinapans");
console.log(harinapan.precioarticulo)