<template>
  <div>
    <!-- <c-input v-model="name"/>  -->
    <slot></slot>
    <p>{{test}}</p>
  </div>
</template>

<script>
import CInput from "./CInput";

export default {
  inject: ["form"],

  data() {
    return {
      test: "test1"
    };
  },
  components: {
    CInput
  },
  mounted() {
    console.log("form数据。"); 
    this.$on("validate", () => {
      console.log("监听到，被调用。 ");
      this.validate();
    });
  },
  methods: {
    validate() {
      console.log("form item - validate..."); 
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //    resolve (true);
          reject(true);
        }, 2000);
      });
    }
  }
};
</script>

<style  scoped>
</style>