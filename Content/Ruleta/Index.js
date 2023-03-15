new Vue({
    el: '#app',
    data: {
        usuario: { Nombre: "", Monto: 00000 },
        Elemento: { label: null, nameColor: null, tipo: "" },
        ViewRegister: true,
        Apuesta: {
            TipoNumero: "Par",
            Color: "Rojo",
            Numero: "",
            Monto: 0,
            MontoResultante: 0
        },
        TipoNumeroDisabled: true,
        NumeroDisabled: true,
        TipoApuesta: 1,
    },
    provide: {
    },
    methods: {
        async girar() {
            let URI = `${window.location.origin}/${window.location.href.split("/").length == 6 ? window.location.href.split("/")[3] : ""}`;
            const { Number, Color } = await fetch(URI + "/api/Api/GetRandomNumberAndColor").then(response => response.json()).then(({ Data }) => Data);
            console.log({ Number, Color });

            this.$refs.spinBtn.disabled = true;
            const referens = this.$children[0].$refs;
            const item = this.$children[0].Elements.find(a => a.label == Number);
            let degree = (item.minDegree + item.maxDegree) / 2;
            console.log(item);

            //SETEAMOS EL STYLE
            let vueltas = Math.abs(referens.canvas.style.transform.replace("rotate(", "").replace("deg)", "")) < 2160 ? 3600 : 1800;
            referens.canvas.style.transform = `rotate(-${degree + vueltas}deg)`;

            setTimeout(() => {
                this.Elemento = { label: Number, nameColor: Color, tipo: Number % 2 == 0 ? "SI" : "NO" };
                this.$refs.spinBtn.disabled = false;
                return true;
            }, 5000)
        },
        async onApuesta() {

            if (this.Apuesta.Monto > this.usuario.Monto) return alert("No tiene suficiente saldo para relizar esta apuesta");
            if (this.Apuesta.Monto <= 0) return alert("La monto minimo para realizar una apuesta es 1$");
            if (!this.NumeroDisabled) {
                if (this.Apuesta.Numero < 0 || this.Apuesta.Numero > 36 || this.Apuesta.Numero == "") return alert("El numero de la apuesta esta fuera de rango");
            }

            await this.girar();

            setTimeout(() => {

                const { TipoNumero, Color, Numero, Monto } = this.Apuesta;
                let URI = `${window.location.origin}/${window.location.href.split("/").length == 6 ? window.location.href.split("/")[3] : ""}`;
                fetch(URI + `/api/Api/GetMontoApuesta?userName=${this.usuario.Nombre}&TipoApuesta=${this.TipoApuesta}&Monto=${Monto}&Color=${Color}&TipoNumber=${TipoNumero}&Numero=${Numero}&RandomNumber=${this.Elemento.label}`).then(response => response.json())
                    .then(({ Data }) => {

                        this.Apuesta.MontoResultante = Data.montoGanado > 0 ? Data.montoGanado : - this.Apuesta.Monto;

                        setTimeout(() => {
                            const div = document.createElement("div");
                            div.appendChild(document.getElementById("resultados").cloneNode(true));

                            if (Data.montoGanado > 0) {
                                new swal({
                                    title: "APUESTA GANADA",
                                    content: div,
                                    icon: "success"
                                });
                            } else {
                                new swal({
                                    title: "APUESTA PERDIDA",
                                    content: div,
                                    icon: "error"
                                });
                            }

                            this.usuario.Monto = Data.montoGanado > 0 ? this.usuario.Monto + Data.montoGanado : this.usuario.Monto - this.Apuesta.Monto;
                        }, 100)

                    });

            }, 5000);

        },
        onChangeDisabled() {
            switch (parseInt(this.TipoApuesta)) {
                case 1:
                    this.NumeroDisabled = true;
                    this.TipoNumeroDisabled = true;
                    break;
                case 2:
                    this.NumeroDisabled = true;
                    this.TipoNumeroDisabled = false;
                    break;
                case 3:
                    this.NumeroDisabled = false;
                    this.TipoNumeroDisabled = true;
                    break;
            }
        },
        guardarPartida() {
            let URI = `${window.location.origin}/${window.location.href.split("/").length == 6 ? window.location.href.split("/")[3] : ""}`;
            fetch(URI + "/api/Api/AddUser", {
                method: "POST",
                body: JSON.stringify({ Name: this.usuario.Nombre, Monto: this.usuario.Monto }),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.json())
                .then(({ Data }) => {
                    console.log(Data);
                    if (Data.state) {
                        new swal({
                            title: "PARTIDA GUARDADA",
                            content: "Su partida ha sido guardada correctamente",
                            icon: "success"
                        });
                    } else {
                        new swal("ERROR", Data?.errorMessage, "error");
                    }
                });
        }
    },
    mounted() {
    }
})
