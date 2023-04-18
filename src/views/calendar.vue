<script setup>
import Sidebar from '../components/sidebar.vue';
import Date from '../components/date.vue';
</script>
<template>
    <div class="content-fixing">
      <div>
        <div class="container-1">
  
            <Sidebar />
        </div>
      </div>
  
      <div class="fix-position">
        <Date />
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
  