Vue.component("Resultados", {
    props: ["Elemento", "Apuesta"],
    template: `
        <div id="resultados">
          <table class="table table-white table-striped table-bordered">
                    <thead>
                        <tr class="">
                            <th colspan="5" class="text-center">
                                RESULTADOS
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">NUMERO</th>
                            <th scope="col">COLOR</th>
                            <th scope="col">TIPO</th>
                            <th scope="col">MONTO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{Elemento.label}}</td>
                            <td>{{Elemento.nameColor}}</td>
                            <td>{{Elemento.tipo}}</td>
                            <td>{{Apuesta.Monto}}</td>
                        </tr>
                    </tbody>
                </table><br/>
               <h1><span :class="{badge: true, 'bg-primary': Apuesta.MontoResultante > 0,  'bg-danger': Apuesta.MontoResultante <= 0}">{{Apuesta.MontoResultante}}</span></h1>
          </div>`,
});