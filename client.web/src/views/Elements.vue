<template>
  <div>
    <h1>Buttons</h1>
    <BaseButton class="btn">
      button
    </BaseButton>
    <h1>Links</h1>
    <BaseLink class="link">
      link
    </BaseLink>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseLink from '@/components/BaseLink.vue';

export default {
  name: 'elements',
  components: { BaseButton, BaseLink },
};
</script>

<style scoped>
  * {
    font-family: "Roboto", "Nunito";
  }
</style>
