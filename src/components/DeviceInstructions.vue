<template>
  <div class="space-y-4">
    <div v-for="device in devices" :key="device.name" class="overflow-hidden rounded-lg border">
      <button
        @click="toggleDevice(device.name)"
        :class="[
          'flex w-full items-center justify-between p-4 transition-colors',
          activeDevice === device.name
            ? 'bg-gradient-to-r from-red-500 to-yellow-500 text-white'
            : 'bg-red-600 hover:bg-yellow-400',
        ]"
      >
        <span>{{ device.name }}</span>
        <i :class="activeDevice === device.name ? 'pi pi-caret-up' : 'pi pi-caret-down'"></i>
      </button>
      <div v-if="activeDevice === device.name" class="bg-yellow-500 p-4">
        <p v-html="device.instructions"></p>
        <!-- Sử dụng v-html để hiển thị HTML -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeDevice = ref(null);

const devices = [
  { name: 'Android', instructions: 'Tải file .apk từ trang Github sau đó cài đặt nó' },
  {
    name: 'Windows',
    instructions: 'Tải file nén .zip từ trang Github sau đó giải nén nó vào thư mục mà bạn chọn',
  },
  {
    name: 'iOS',
    instructions:
      'Tải file .ipa sau đó sử dụng Scarlet hoặc TrollStore để cài đặt (Người dùng jailbreak có thể cài đặt trực tiếp từ Filza hoặc bất kỳ cách nào bạn thích)',
  },
  {
    name: 'Geode',
    instructions:
      'Tải xuống bản Geode build riêng cho Android <a href="https://github.com/TacoEnjoyer/gdvnps/releases/tag/geode" class="text-blue-500 underline" target="_blank">tại đây</a> sau đó cài đặt nó.',
  },
];

const toggleDevice = (deviceName) => {
  activeDevice.value = activeDevice.value === deviceName ? null : deviceName;
};
</script>

<style scoped></style>
