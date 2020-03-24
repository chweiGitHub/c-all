<template>
  <div class="hello">
    <CForm ref="loginForm">
      <CItem>
        <CInput v-model="accountInfo.name" />
      </CItem>
      <CItem>
        <CInput v-model="accountInfo.pwd" />
      </CItem>
    </CForm>
    <button @click="submit">submit</button>
  </div>
</template>

<script>
import CItem from "./CItem.vue";
import CInput from "./CInput.vue";
import CForm from "./CForm.vue";

export default {
  name: "test",
  provide() {
    return { form: this };
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      accountInfo: {
        name: "",
        pwd: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    CItem,
    CInput,
    CForm
  },
  methods: {
    submit() {
      console.log("提交:", this.accountInfo);
      this.$refs["loginForm"].validate(valid => {
        console.log("valid: ", valid);
        if (valid) {
          console.log("success");
        } else {
          console.log("error");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
