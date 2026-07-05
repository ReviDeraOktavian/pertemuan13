<template>
  <div class="max-w-md mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg border border-gray-200">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Tambah Pengguna</h2>
    <form @submit.prevent="submitUser" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Nama</label>
        <input v-model="form.name" type="text" class="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Pekerjaan</label>
        <input v-model="form.job" type="text" class="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" required />
      </div>
      <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 font-semibold">
        Kirim Data
      </button>
    </form>

    <div v-if="createdUser" class="mt-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
      <p class="font-bold">Berhasil Dibuat!</p>
      <p>ID: {{ createdUser.id }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createUser } from '../api.js';

const form = ref({ name: '', job: '' });
const createdUser = ref(null);

const submitUser = async () => {
  // Menggunakan fungsi createUser dari api.js
  const response = await createUser(form.value);
  createdUser.value = response.data;
};
</script>