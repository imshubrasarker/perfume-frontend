import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import Order from '../pages/Order';
import RecommendationResult from "../pages/RecommendationResult";
import MyLab from "../pages/MyLab";
import MyHistory from "../pages/MyHistory";
import Tutorial from "../pages/Tutorial";
import Memories from "../pages/Memories";
import Assistance from "../pages/Assistance";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "orders",
        name: "Orders",
        component: Order
      },
      {
        path: "mylab",
        name: "My Lab",
        component: MyLab
      },
      {
        path: "my-history",
        name: "My History",
        component: MyHistory
      },
      {
        path: "tutorial",
        name: "Tutorial",
        component: Tutorial
      },
      {
        path: "memories",
        name: "Memories",
        component: Memories
      },
      {
        path: "assistance",
        name: "Assistance",
        component: Assistance
      },
      {
        path: "recommendation-result",
        name: "Recommendations Result",
        component: RecommendationResult
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  }
];

export default routes;
