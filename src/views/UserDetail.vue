<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-center">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Detail Pengguna</h2>
    <div v-if="user" class="space-y-4">
      <img :src="user.avatar" alt="Avatar" class="w-24 h-24 rounded-full mx-auto shadow-sm" />
      <p class="text-xl font-semibold text-gray-900">{{ user.first_name }} {{ user.last_name }}</p>
      <p class="text-gray-500">{{ user.email }}</p>
    </div>
    <router-link to="/" class="mt-6 inline-block text-blue-600 hover:underline">
      &larr; Kembali ke Daftar
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getUserById } from '../api.js';

const route = useRoute();
const user = ref(null);

onMounted(async () => {
  const id = route.params.id;
  // Menggunakan fungsi getUserById dari api.js
  const response = await getUserById(id);
  user.value = response.data.data;
});
</script>