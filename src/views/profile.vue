<script setup >
import Sidebar from '../components/sidebar.vue'
import ProfHeader from '../components/profile/prof_header.vue'
import ProfTabmenu from '../components/profile/profile_tabmenu.vue'
import ProfilePic from '../components/profile/ProfilePic.vue';

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
    <div class="fix-position">
      <ProfilePic />

    </div>
  </div>
  
</template>


<style lang="scss">
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
.profile-pic-pos{
  display: flex;
}
input[type="file"] {
  display: none;
}

img {
  max-width: 200px;
}
.sidebar-profile {
  display: flex;
  width: 100%;

  .profile-contents {
    display: inherit;
    flex-direction: column;
    width: 100%;
  }
}
.fix-position {
  max-width: 100%;
  z-index: 1;

}
</style>
