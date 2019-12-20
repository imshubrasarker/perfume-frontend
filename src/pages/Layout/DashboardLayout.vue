<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Analytics</p>
      </sidebar-link>
      <sidebar-link to="/orders">
        <md-icon>person</md-icon>
        <p>Orders</p>
      </sidebar-link>
      <sidebar-link to="/mylab">
        <md-icon>content_paste</md-icon>
        <p>My Lab</p>
      </sidebar-link>
      <sidebar-link to="/my-history">
        <md-icon>library_books</md-icon>
        <p>My History</p>
      </sidebar-link>
      <sidebar-link to="/tutorial">
        <md-icon>bubble_chart</md-icon>
        <p>Tutorial</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
