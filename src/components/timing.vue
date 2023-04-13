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
          <span v-else>You clocked in at {{ clockedInTime }}.</span>
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
      };
    },
    methods: {
      clockIn() {
        // Get the current time and update the UI
        const now = new Date();
        this.isClockedIn = true;
        this.clockedInTime = now.toLocaleTimeString();
      },
      clockOut() {
        // Get the current time and update the UI
        const now = new Date();
        this.isClockedIn = false;
        this.clockedInTime = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .time-tracking {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;
  }
  
  .time-tracking__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .time-tracking__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #333;
  }
  
  .time-tracking__clock {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: #0070e0;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .time-tracking__clock-in,
  .time-tracking__clock-out {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 24px;
    color: #fff;
  }
  
  .time-tracking__status {
    margin-top: 20px;
    font-size: 16px;
    color: #333;
  }
  </style>
  