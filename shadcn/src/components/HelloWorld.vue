<script setup>
import { ref } from "vue";
// import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <Button>Click me</Button>
  <!-- <Checkbox id="terms" /> -->
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label for="terms">Accept terms and conditions</Label>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
