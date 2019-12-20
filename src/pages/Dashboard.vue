<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <chart-card :chart-data="dailySalesChart.data" :chart-options="dailySalesChart.options" :chart-type="'Line'" data-background-color="blue">
          <template slot="content">
            <h4 class="title">Online Users</h4>
            <h4 class="title">302</h4>
            <p class="category">
              <small class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </small>
            </p>
          </template>
        </chart-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Monthly Traffic</h4>
            <h4 class="title">13245</h4>
            <p class="category">
              <small class="text-success"
              ><i class="fas fa-long-arrow-alt-up"></i> 21%
              </small>
            </p>
          </template>
        </chart-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
       <md-card>
         <md-card-header data-background-color="purple">
           <h4 class="title">Top Used Accords</h4>
         </md-card-header>
         <md-card-content>
           <stacked-chart></stacked-chart>
         </md-card-content>
       </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Instagram Thread Top #Omynote</h4>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Top Users</h4>
          </md-card-header>
          <md-card-content>
            <top-user table-header-color="orange"></top-user>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Top Notes</h4>
          </md-card-header>
          <md-card-content>
            <div style="height: 200px !important;" ref="chart" class="chart"></div>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Activity Log</h4>
          </md-card-header>
          <md-card-content>
            <activity-log table-header-color="slate"></activity-log>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <chart-card
                :chart-data="emailsSubscriptionChart.data"
                :chart-options="emailsSubscriptionChart.options"
                :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
                :chart-type="'Bar'"
                data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">geographical distribution</h4>
            <h4 class="title">13245</h4>
          </template>
        </chart-card>
      </div>

    </div>
  </div>
</template>

<script>
  import StackedChart from '../pages/StackedChart';
  import PieChart from "../PieChart";
  import ApexCharts from "apexcharts/dist/apexcharts.js";
  import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
} from "@/components";
import TopUser from "../components/Tables/TopUser";
import ActivityLog from "../components/Tables/ActivityLog";

export default {
  components: {
    ActivityLog,
    TopUser,
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    PieChart,
    StackedChart
  },
  mounted() {
    var options = {
      chart: {
        height: 150,
        type: 'bar',
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },

      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      series: [{
        name: 'Marine Sprite',
        data: [20]
      },{
        name: 'Striking Calf',
        data: [20]
      },{
        name: 'Tank Picture',
        data: [20]
      },{
        name: 'Bucket Slope',
        data: [20]
      },{
        name: 'Reborn Kid',
        data: [20]
      }],
      fill: {
        opacity: 1
      },

      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    }
    var chart = new ApexCharts(
            document.querySelector(".chart"),
            options
    );
    chart.render();
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20,
      },
      chartData: {
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF"
            ],
            data: [1, 10, 5]
          }
        ]
      },

      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  },
};
</script>

<style>
  #pie-chart {
    height: 187px !important;
    width: 187px !important;
    margin-left: auto;
    margin-right: auto;
  }
  .apexcharts-menu-icon {
    display: none;
  }
  .apexcharts-xaxis-inversed {
    display: none;
  }
  .apexcharts-yaxis-inversed {
    display: none;
  }
</style>