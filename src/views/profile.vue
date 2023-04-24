<script setup >
import Sidebar from '../components/sidebar.vue'
import ProfHeader from '../components/profile/prof_header.vue'
import ProfTabmenu from '../components/profile/profile_tabmenu.vue'
import ProfilePic from '../components/profile/ProfilePic.vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
</script>

<template>
  <div class="sidebar-profile">
    <!-- wrap Sidebar inside a div to prevent unexpected resizing of its width -->
    <div class="container-1">
      <Sidebar />
    </div>

    <div class="profile-contents">
      <ProfHeader />
      <div class="profile-brief-info">
        <ProfilePic id="profile-pic" />

        <p class="name">
          Jane Rivera Doe
        </p>
        <div class="below-name">
          <div class="email">
            <label for="p-email">Email: </label>
            <p class="p-email" name="p-email">janedoe@gmail.com </p>
          </div>
          <div class="contact">
            <label for="p-contact">Contact Number: </label>
            <p class="p-contact" name="p-contact">janedoe@gmail.com </p>
          </div>
          <div class="system-id">
            <label for="p-system-id">System ID: </label>
            <p class="p-system-id" name="p-system-id">janedoe@gmail.com </p>
          </div>
          <div class="employee-id">
            <label for="p-employee-id">Employee ID: </label>
            <p class="p-employee-id" name="p-employee-id">janedoe@gmail.com </p>
          </div>
        </div>
      </div>

      <!-- <TabView/> -->
      <!-- <ProfTabmenu /> -->
    </div>
    <div class="fix-position">


    </div>
  </div>
</template>


<style lang="scss">
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

.profile-pic-pos {
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
    row-gap: 1em;

    .profile-brief-info {
      display: grid;
      grid-template-columns: 14% 70%;
      grid-template-rows: 40% 50%;

      #profile-pic {
        grid-row: 1 / span 2;
        margin-left: 2rem;
      }

      .name {
        font-size: 3em;
        font-weight: bold;
        margin-bottom: 0;
      }

      .below-name {
        display: inline-flex;
        column-gap: 3em;

        label {
          font-weight: 100;
        }

        .email, 
        .contact,
        .system-id,
        .employee-id {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}

.fix-position {
  max-width: 100%;
  z-index: 1;

}
</style>
