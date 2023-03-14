Vue.component("Login", {
    template: `
    <div>
        <div class="modal-dialog" style="margin-top: 15rem;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Iniciar seccion</h5>
                    </div>
                    <div class="modal-body">
                        <div>
                            <label>Nombre</label>
                            <input v-model="Nombre" class="form-control" />
                        </div>
                        <div>
                            <label>Monto</label>
                            <input class="form-control" disabled />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="ChangeView" class="btn btn-secondary" data-bs-dismiss="modal">Regresar</button>
                        <button type="button" class="btn btn-primary" v-on:click="Login">Validar</button>
                    </div>
                </div>
            </div>
    </div>`,
    data() {
        return {
            Nombre: ""
        }
    },
    methods: {
        ChangeView() {
            this.$parent._data.ViewRegister = !this.$parent._data.ViewRegister;
        },
        Login() {
            fetch(window.location.origin + `/api/Api/GetUser?userName=${this.Nombre}`).then(response => response.json())
                .then(({ Data }) => {
                    console.log(Data);
                    if (Data.user) {
                        this.$parent._data.usuario.Nombre = Data.user.Name;
                        this.$parent._data.usuario.Monto = Data.user.Monto;
                    } else {
                        alert("Este nombre de usurario no exite!");
                    }
                });
        }
    }
});