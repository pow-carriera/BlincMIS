<template>
  <div class="slds-m-around_medium">
    <div class="header">
      <h1 class="slds-text-heading_large slds-m-bottom_medium">Attendance</h1>
    </div>
    <table class="slds-table slds-table_bordered slds-table_striped slds-m-top_medium" v-if="logs.length > 0">
      <thead>
        <tr class="slds-text-title_caps">
          <th scope="col">Date</th>
          <th scope="col">Time In</th>
          <th scope="col">Time Out</th>
          <th scope="col">Hours Worked</th>
        </tr>
      </thead>
      <hr >
      <tbody>
        <tr v-for="(log, index) in logs" :key="index">
          <td>{{ log.date }}</td>
          <td>{{ log.timeIn }}</td>
          <td>{{ log.timeOut }}</td>
          <td>{{ log.hoursWorked }}</td>
        </tr>
      </tbody>
    </table>

    <div class="slds-m-bottom_medium" v-if="!clockedIn">
      <button class="slds-button slds-button_brand" @click="clockIn">Clock In</button>
    </div>
    <div class="slds-m-bottom_medium" v-else>
      <button class="slds-button slds-button_brand" @click="clockOut">Clock Out</button>
    </div>
    <button class="clearbtn" @click="clearLogs">Clear Logs</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clockedIn: false,
      timeIn: null,
      timeOut: null,
      logs: []
    }
  },
  methods: {
    clockIn() {
      this.clockedIn = true
      this.timeIn = new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    },
    clockOut() {
      this.clockedIn = false
      this.timeOut = new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
      const currentDate = new Date().toLocaleDateString()
      const startTime = new Date(`2000-01-01 ${this.timeIn}`)
      const endTime = new Date(`2000-01-01 ${this.timeOut}`)
      const timeDifference = (endTime - startTime) / 1000 // time difference in seconds
      const hoursWorked = (timeDifference / 3600).toFixed(2) // time difference in hours with 2 decimal places
      this.logs.push({
        date: currentDate,
        timeIn: this.timeIn,
        timeOut: this.timeOut,
        hoursWorked: hoursWorked
      })
      this.timeIn = null
      this.timeOut = null
    },
    clearLogs() {
      this.logs = []
    }
  }
}
</script>

<style scoped>
/* Salesforce Lightning Design System styles */
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

table {
  border-collapse: collapse;
  width: 100%;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  position: relative;
  border: 1px solid #4C519F;

  

}

th{
  padding: 8px;
  text-align: left;
  vertical-align: middle;

  margin: 0;
  align-items: center;
}

td {
  padding: 8px;
  text-align: left;
  vertical-align: middle;
  margin: 0;
  align-items: center;
}
hr{
  border-top: #4C519F 1px solid;
  width: 426.5%;
  margin: 0;
}
/* Salesforce-like table styles */


.img-size-pos {
  height: 10px;
}

.slds-text-heading_large {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 30px;
  font-weight: bold;
  color: #4c519f;
  margin-top: 0;
  box-shadow: 0 8px 6px -6px #606a7b;
}

.slds-m-around_medium {
  height: 100%;
  width: 100%;

}

.slds-buttones {
  padding: 8px;
  background-color: #0070E0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
  margin-left: 90%;
  margin-right: auto;
  z-index:999 ;

}

.slds-button {
  padding: 8px;
  background-color: #0070E0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
  margin-left: 80%;
  margin-right: 0;
  margin-top: 3%;
  z-index: 999;

}

.clearbtn {
  padding: 8px;
  background-color: #0070E0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
  margin-top: 1%;
  top: 0;
  margin-left: 80%;
  z-index: 999;

}

.slds-table {
  background-color: #f3f5f9;
  width: 1000px;


}

.slds-button_brand {
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.slds-table th {
  background-color: #fff;
  font-weight: bold;
  color: #606a7b;
}

.slds-m-top_medium {
  align-items: center;
  justify-content: center;
}

.slds-table td {
  background-color: #ffffff;
  color: #606a7b;
}

.header {
  background-color: #fff;
}



.slds-line-height_reset {
  line-height: 1.3;
}

.slds-table_fixed-layout {
  table-layout: fixed;
}

.slds-text-title_caps {
  text-transform: uppercase;
  font-size: 12px;
}</style>
