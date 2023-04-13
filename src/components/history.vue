<template>
    <div class="time-tracking">
      <div class="time-tracking__container">
        <h1 class="time-tracking__title">Time Tracker</h1>
        <div class="time-tracking__clock">
          <div v-if="!isClockedIn" class="time-tracking__clock-in" @click="clockIn">
            <span>Time In</span>
          </div>
          <div v-else class="time-tracking__clock-out" @click="clockOut">
            <span>Time Out</span>
          </div>
        </div>
        <div class="time-tracking__status">
          <span v-if="!isClockedIn">You are currently not clocked in.</span>
          <span v-else>
            You clocked in at {{ clockedInTime }}. <br>
            Last clock-out time: {{ lastClockedOutTime }}
          </span>
        </div>
        <div class="time-tracking__history" v-if="timeHistory.length > 0">
          <h2 class="time-tracking__history-title">Time History</h2>
          <ul class="time-tracking__history-list">
            <li v-for="(time, index) in timeHistory" :key="index">
              {{ time.clockIn }} - {{ time.clockOut }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isClockedIn: false,
        clockedInTime: null,
        lastClockedOutTime: null,
        timeHistory: [],
      };
    },
    methods: {
      clockIn() {
        // Get the current time and update the UI
        const now = new Date();
        this.isClockedIn = true;
        this.clockedInTime = now.toLocaleTimeString();
        this.lastClockedOutTime = null;
      },
      clockOut() {
        // Get the current time and update the UI
        const now = new Date();
        this.isClockedIn = false;
        this.lastClockedOutTime = now.toLocaleTimeString();
  
        // Add the time entry to the time history
        const timeEntry = {
          clockIn: this.clockedInTime,
          clockOut: this.lastClockedOutTime,
        };
        this.timeHistory.push(timeEntry);
  
        // Reset clock-in and clock-out times
        this.clockedInTime = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles for time tracking page */
  </style>
  