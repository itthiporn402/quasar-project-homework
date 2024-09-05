<template>
  <div class="htmlClass">
    <form>
      <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="secondName" v-model="secondName" />
      <input type="text" id="nickname" v-model="nickname" />
      <input type="text" id="code" v-model="code" />

      <button @click="submitForm()" class="submitForm">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      code:'6604101402',
      firstName: 'Itthiporn',
      secondName: 'Khad-see',
      nickname:'On'
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  }
}
</script>

<style scoped></style>
