<template src="./App.html" />
<script>
export default {
  data: function () {
    return { 
      counter: 0 
    }
  },
  methods: {
    handleClick() {
      this.counter++;
    }
  },
  computed: {
    message() {
      return this.counter == 0 ? "The button has not been pressed" : `Count pressed: ${this.counter}`;
    }
  }
}
</script>