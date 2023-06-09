﻿Vue.component("Registro", {
    template: `
    <div>
        <div class="modal-dialog" style="margin-top: 15rem;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Registrate</h5>
                </div>
                <div class="modal-body">
                    <div>
                        <label>Nombre</label>
                        <input class="form-control" v-model="Nombre"/>
                    </div>
                    <div class="mt-2">
                        <label>Monto</label>
                        <input v-model="Monto" class="form-control" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" v-on:click="ChangeView" class="btn btn-secondary">
                        Ya tengo usuario
                    </button>
                    <button type="button" v-on:click="Guardar" class="btn btn-primary">Entrar</button>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            Nombre: "",
            Monto: 0
        }
    },
    methods: {
        ChangeView() {
            this.$parent._data.ViewRegister = !this.$parent._data.ViewRegister;
        },
        Guardar() {
            const ApplicationPath = document.getElementById("ApplicationPath").textContent;
            let URI = `${window.location.origin}${ApplicationPath.length > 1 ? ApplicationPath : ""}`;
            fetch(URI + `/api/Api/GetUser?userName=${this.Nombre}`).then(response => response.json())
                .then(({ Data }) => {
                    console.log(Data);
                    if (Data.user) {
                        alert("Este nombre de usurario ya esta en uso!");
                    } else {
                        this.$parent._data.usuario = { Nombre: this.Nombre, Monto: this.Monto };
                    }
                });
        }
    }
});