<template>
  <div>
    sdf
    <!-- <Checkbox id="terms" /> -->
    <Button>Button</Button>
  </div>
</template>

<script>
import { Checkbox, Button } from "@client-gate/client-gate-shared-dependency";

export default {
  name: "App",
  components: {
    Checkbox,
    Button,
  },
  mounted() {
    console.log(Button);
  },
};
</script>

<style></style>
