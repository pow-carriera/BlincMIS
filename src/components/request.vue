<template>
  <div class="slds-m-around_medium">
 <div class="header">
      <h1 class="slds-text-heading_large slds-m-bottom_medium">Requests</h1>
    </div>
    <div class="leave-request-form">
    <!-- Request History Table -->
    <table class="request-history-table slds-table slds-table_bordered slds-table_striped slds-m-top_medium">
      <thead>
        <tr class="slds-text-title_caps">
          <th scope="col">Request ID</th>
          <th scope="col">Reason</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
        </tr>
      </thead>
      <tbody>
        <!-- Render request history data here -->
      </tbody>
    </table>

    <!-- Request Form Trigger Button -->
    <button class="form-button" @click="showForm">Request Leave</button>

    <!-- Leave Request Form Popup -->
    <div v-if="showPopup" class="popup-form-container">
      <div class="popup-form">
        <h2 class="popup-form-title">Leave Request Form</h2>
        <form @submit.prevent="submitRequest">
          <label class="form-label">Reason:</label>
          <input v-model="reason" class="form-input" type="text" required>
<br>
          <label class="form-label">Start Date:</label>
          <input v-model="startDate" class="form-input" type="date" required>
<br>  
          <label class="form-label">End Date:</label>
          <input v-model="endDate" class="form-input" type="date" required>

          <div class="popup-form-buttons">
            <button type="submit" class="form-button">Submit</button>
            <button @click="cancelForm" class="form-button close-popup-form-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      reason: '',
      startDate: '',
      endDate: '',
      showPopup: false
    }
  },
  methods: {
    showForm() {
      this.showPopup = true;
    },
    cancelForm() {
      this.showPopup = false;
    },
    submitRequest() {
      // Handle form submission logic here
      // After successful submission, reset form data and close popup
      this.reason = '';
      this.startDate = '';
      this.endDate = '';
      this.showPopup = false;
    }
  }
}
</script>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
.header {
  background-color: #fff;
}
.slds-text-heading_large {
  font-family:'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 30px;
  font-weight: bold;
  width: 100%;
  color: #000;
  margin-top: 0;
  box-shadow: 0 8px 6px -6px #606a7b;
}
.leave-request-form{
  margin: auto;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-label {
  font-weight: bold;
}

.form-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-button {
  padding: 8px;
  background-color: #0070E0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
  margin-left: 8%;
}

.request-history-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 24px;
}

.request-history-table th,
.request-history-table td {
  border: 1px solid #ccc;
  padding: 8px;
}

.popup-form-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-form {
  max-width: 400px;
  padding: 24px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.popup-form-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.popup-form-container input {
  margin-bottom: 12px;
}

.popup-form-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
}

.popup-form-buttons button {
  padding: 8px;
  background-color: #0070E0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-popup-form-button {
  background-color: #ccc;
}
table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: 3px .5px 3px #888888;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  position: relative;


}

th,
td {
  padding: 8px;
  text-align: left;
  vertical-align: middle;
  border: 1px solid #d8dde6;
  margin: 0;
  align-items: center;

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
  color: #000;
  margin-top: 0;
  box-shadow: 0 8px 6px -6px #606a7b;
}

.slds-m-around_medium {
  height: 100%;
  width: 100%;

}

.slds-buttones {
  width: 10rem;
  height: 3rem;
  border-radius: 12px;
  border: 2px #4c519f;
  color: #fff;
  background-color: #4c519f;
  margin-left: 90%;
  margin-right: auto;
  z-index:999 ;

}

.slds-button {
  width: 10rem;
  height: 3rem;
  border-radius: 12px;
  border: 2px #4c519f;
  color: #fff;
  background-color: #4c519f;
  margin-left: 80%;
  margin-right: 0;
  margin-top: 3%;
  z-index: 999;

}

.clearbtn {
  width: 10rem;
  height: 3rem;
  border-radius: 12px;
  border: 2px #4c519f;
  color: #fff;
  background-color: #4c519f;
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
  width: 100%;
}

.slds-table_bordered th,
.slds-table_bordered td {
  border: 1px solid #d8dde6;
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
}

</style>