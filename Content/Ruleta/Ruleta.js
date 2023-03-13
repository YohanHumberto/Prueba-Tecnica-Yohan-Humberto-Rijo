Vue.component('chart', {
    extends: VueChartJs.Pie,
    data() {
        return {
            Elements: [
                { "label": 0, "value": 1, "color": "#019a01", "nameColor": "Verde", "minDegree": 0, "maxDegree": 9.74 },
                { "label": 32, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 9.75, "maxDegree": 19.46 },
                { "label": 15, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 19.47, "maxDegree": 29.19 },
                { "label": 19, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 29.2, "maxDegree": 38.93 },
                { "label": 4, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 38.94, "maxDegree": 48.66 },
                { "label": 21, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 48.67, "maxDegree": 58.39 },
                { "label": 2, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 58.40, "maxDegree": 68.12 },
                { "label": 25, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 68.13, "maxDegree": 77.85 },
                { "label": 17, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 77.86, "maxDegree": 87.58 },
                { "label": 34, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 87.59, "maxDegree": 97.31 },
                { "label": 6, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 97.32, "maxDegree": 107.04 },
                { "label": 27, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 107.05, "maxDegree": 116.77 },
                { "label": 13, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 116.78, "maxDegree": 126.50 },
                { "label": 36, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 126.51, "maxDegree": 136.23 },
                { "label": 11, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 136.24, "maxDegree": 145.96 },
                { "label": 30, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 145.97, "maxDegree": 155.69 },
                { "label": 8, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 155.70, "maxDegree": 165.42 },
                { "label": 23, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 165.43, "maxDegree": 175.15 },
                { "label": 10, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 175.16, "maxDegree": 184.88 },
                { "label": 5, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 184.89, "maxDegree": 194.61 },
                { "label": 24, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 194.62, "maxDegree": 204.34 },
                { "label": 16, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 204.35, "maxDegree": 214.07 },
                { "label": 33, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 214.08, "maxDegree": 223.8 },
                { "label": 1, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 223.81, "maxDegree": 233.53 },
                { "label": 20, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 233.54, "maxDegree": 243.26 },
                { "label": 14, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 243.27, "maxDegree": 252.99 },
                { "label": 31, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 252.991, "maxDegree": 262.72 },
                { "label": 9, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 262.73, "maxDegree": 272.45 },
                { "label": 22, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 272.46, "maxDegree": 282.18 },
                { "label": 18, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 282.19, "maxDegree": 291.91 },
                { "label": 29, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 291.92, "maxDegree": 301.64 },
                { "label": 7, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 301.65, "maxDegree": 311.37 },
                { "label": 28, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 311.38, "maxDegree": 321.1 },
                { "label": 12, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 321.2, "maxDegree": 330.83 },
                { "label": 35, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 330.84, "maxDegree": 340.56 },
                { "label": 3, "value": 1, "color": "#ff0000", "nameColor": "Rojo", "minDegree": 340.57, "maxDegree": 350.29 },
                { "label": 26, "value": 1, "color": "#000000", "nameColor": "Negro", "minDegree": 350.30, "maxDegree": 360 }
            ]
        }
    },
    mounted() {
        this.addPlugin(ChartDataLabels);
        this.renderChart({
            labels: this.Elements,
            datasets: [
                {
                    backgroundColor: this.Elements.map(a => a.color),
                    data: this.Elements.map(a => a.value),
                }
            ]
        }, {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: false,
                legend: {
                    display: false,
                },
                datalabels: {
                    anchor: "end",
                    align: "start",
                    color: "#ffffff",
                    formatter: (_, context) => context.chart.data.labels[context.dataIndex].label,
                    font: { size: 18 },
                }
            }
        })
    },
    methods: {
    }
});
