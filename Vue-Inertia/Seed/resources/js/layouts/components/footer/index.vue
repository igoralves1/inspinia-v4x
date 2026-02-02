<template>
  <footer class="footer">
    <BContainer fluid>
      <BRow>
        <BCol md="6" class="text-center text-md-start">
          © 2014 - {{ currentYear }} {{ appName }} By <span class="fw-semibold">{{ author }}</span>
        </BCol>
        <BCol md="6">
          <div class="text-md-end d-none d-md-block">
            10GB of <span class="fw-bold">250GB</span> Free.
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template>

<script setup lang="ts">
import { appName, author, currentYear } from '@/helpers/index.js'
</script>
