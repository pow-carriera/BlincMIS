<template>
  <div>
    <div class="profile-picture-container">
      <img :src="previewImage" alt="Profile Picture Preview" class="profile-picture-preview" v-if="previewImage" />
      <div class="profile-picture-placeholder" v-else>
        <i class="fas fa-user"></i>
        <p>Upload a profile picture</p>
      </div>
    </div>
    <input type="file" ref="fileInput" @change="onFileInputChange" style="display: none" />
    <button class="upload-button" @click="openFileInput">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    onFileInputChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.previewImage = null;
      }
    },
  },
};
</script>

<style scoped>
.profile-picture-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.profile-picture-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-picture-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  font-size: 24px;
  color: #888;
}

.upload-button {
  margin-top: 16px;
}
</style>
