<script>
import { Bar } from 'vue-chartjs';

export default {
 extends: Bar,
 name: 'LineChart',
 data:() => ({
   chartdata: {
     labels: ["30分前", "29分前","28分前", "27分前","26分前", "25分前", "24分前", "23分前", "22分前", "21分前", "20分前", "19分前","18分前", "17分前","16分前", "15分前", "14分前", "13分前", "12分前", "11分前", "10分前", "9分前","8分前", "7分前", "6分前", "5分前", "4分前", "3分前", "2分前", "1分前"],
     datasets: [
       {
         label: '盛数',
         data: [23, 25, 22, 20, 19, 19, 19, 20, 23,23, 25, 22, 20, 19, 19, 19, 20, 23, 23, 25, 22, 20, 19, 19, 19, 20, 23, 23, 32, 23]
       }
     ]
   },
   options: {
     responsive: true,
     maintainAspectRatio: false
   }
 }),
 mounted () {
   this.renderChart(this.chartdata, this.options);
 },
}
</script>