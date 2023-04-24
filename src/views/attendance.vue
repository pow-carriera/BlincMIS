<script setup>
import History from '../components/timing.vue'
import Sidebar from '../components/sidebar.vue';
// import SearchBar from '../components/attendance/SearchBar.Vue'
</script>

<template>
  <div class="content-fixing">
    <div>
      <div class="container-1">
        <!-- <SearchBar /> -->

        <Sidebar />
      </div>
    </div>

    <div class="fix-position">
      <History />
    </div>
  </div>
</template>
<style scoped>
.content-fixing {
  display: flex;
  position: relative;

}

.container-1 {
  z-index: 1;
}

.fix-position {
  width: 100%;
  z-index: 1;

}
</style>