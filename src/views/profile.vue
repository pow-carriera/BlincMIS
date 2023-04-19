<script setup >
import Sidebar from '../components/sidebar.vue'
import ProfHeader from '../components/profile/prof_header.vue'
import ProfTabmenu from '../components/profile/profile_tabmenu.vue'
</script>

<template>
  <div class="sidebar-profile">
    <!-- wrap Sidebar inside a div to prevent unexpected resizing of its width -->
    <div class="container-1">
      <Sidebar />
    </div>

    <div class="profile-contents">
      <ProfHeader />
      <!-- <ProfTabmenu /> -->
    </div>
  </div>
</template>
<style lang="scss">
.sidebar-profile {
  display: flex;
  width: 100%;

  .profile-contents {
    display: inherit;
    flex-direction: column;
    width: 100%;
  }
}
</style>
