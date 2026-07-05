<template>
  <div id="app">
    <header>
      <nav style="margin-bottom: 20px;">
        <router-link to="/">Daftar Pengguna</router-link> | 
        <router-link to="/create">Tambah Pengguna</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>