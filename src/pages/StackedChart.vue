<template>
    <div ref="chart" class="chartPie"></div>
</template>

<script>
    import ApexCharts from "apexcharts/dist/apexcharts.js";
    export default {
        name: "StackedChart",
        mounted() {
            var options = {
                chart: {
                    width: 380,
                    height: 250,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                series: [44, 55, 13, 43, 22],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 350
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }

            var chart = new ApexCharts(
                document.querySelector(".chartPie"),
                options
            );

            chart.render();
        }
    }
</script>

<style scoped>

</style>