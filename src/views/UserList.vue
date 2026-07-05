<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-3xl font-extrabold text-gray-800 mb-6">Daftar Pengguna</h2>
    <ul class="grid gap-4">
      <li v-for="user in users" :key="user.id" class="flex items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200">
        <span class="text-lg font-medium text-gray-700">{{ user.first_name }} {{ user.last_name }}</span>
        <router-link :to="`/user/${user.id}`">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
            Lihat Detail
          </button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAllUsers } from '../api.js';

const users = ref([]);

onMounted(async () => {
  // Menggunakan fungsi getAllUsers dari api.js
  const response = await getAllUsers();
  users.value = response.data.data;
});
</script>