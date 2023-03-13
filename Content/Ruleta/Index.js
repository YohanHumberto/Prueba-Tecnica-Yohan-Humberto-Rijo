new Vue({
    el: '#app',
    data: {
        message: 'Vue - Chart.js',
        usuario: { Nombre: "", Monto: 00000 },
        Elemento: { label: null, color: null, nameColor: null, tipo: "" },
        ViewRegister: true,
        Apuesta: {
            TipoNumero: "Par",
            Color: "Rojo",
            Numero: "",
            Monto: 0
        },
        TipoNumeroDisabled: true,
        NumeroDisabled: true,
        TipoApuesta: 1,
    },
    provide: {
    },
    methods: {
        girar() {
            this.$refs.spinBtn.disabled = true;
            const referens = this.$children[0].$refs;
            let randomNumbert = Math.floor(Math.random() * 37);
            console.log(this)
            const item = this.$children[0].Elements.find(a => a.label == randomNumbert);
            let degree = (item.minDegree + item.maxDegree) / 2;

            //SETEAMOS EL STYLE
            let vueltas = Math.abs(referens.canvas.style.transform.replace("rotate(", "").replace("deg)", "")) < 2160 ? 3600 : 1800;
            referens.canvas.style.transform = `rotate(-${degree + vueltas}deg)`;

            console.log(item);

            setTimeout(() => {
                this.Elemento = { label: item.label, color: item.color, nameColor: item.nameColor, tipo: item.label % 2 == 0 ? "SI" : "NO" };
                this.$refs.spinBtn.disabled = false;
            }, 5000)
        },
        onApuesta() {
            if (this.Apuesta.Monto >= this.usuario.Monto) return alert("No tiene suficiente saldo para relizar esta apuesta");
            if (this.Apuesta.Monto <= 0) return alert("La monto minimo para realizar una apuesta es 1$");
            if (this.NumeroDisabled == false && this.Apuesta.Numero >= 0 && this.Apuesta.Numero <= 36) return alert("La monto minimo para realizar una apuesta es 1$");
        },
        onChangeDisabled() {
            console.log(this.TipoApuesta)
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
        }
    },
    mounted() {
        console.log(this)
    }
})
