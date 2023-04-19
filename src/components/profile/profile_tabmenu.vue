<script>

// import TabMenu from 'primevue/tabmenu';
</script>


<template>
    <div class="card">
        <Button @click="active = 0" text outlined label="Activate 1st" />
        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(3);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog'
    }
]);
</script>