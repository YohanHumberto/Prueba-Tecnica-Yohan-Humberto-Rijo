Vue.component("Login", {
    //inject: ['ViewLogin'],
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
                            <input class="form-control" />
                        </div>
                        <div>
                            <label>Monto</label>
                            <input class="form-control" disabled />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="ChangeView" class="btn btn-secondary" data-bs-dismiss="modal">Regresar</button>
                        <button type="button" class="btn btn-primary">Validar</button>
                    </div>
                </div>
            </div>
    </div>`,
    methods: {
        ChangeView() {
            this.$parent._data.ViewRegister = !this.$parent._data.ViewRegister;
        },
    }
});