
<script setup>
import AttendanceTable from '../components/attendance/Attendance-Table.vue';
import Sidebar from '../components/sidebar.vue';
</script>

<template>
  <div class="content-fixing">
    <div>
      <div class="container-1">

        <Sidebar />
      </div>
    </div>

    <div class="fix-position">
      <AttendanceTable />
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
