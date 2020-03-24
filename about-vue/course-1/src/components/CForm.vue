<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    validate(cb) {
      console.log("form 中的 validate .");
      console.log(cb);
      const tasks = this.$children
        // .filter(item => {console.log("item.prop ", item.prop); })
        .map(item => item.validate());
      console.log(tasks);

      // 如果都成功返回的是一个数组； 如果有一个异常就返回的失败
      Promise.all(tasks)
        .then(item => cb(item))
        .catch(() => cb(false));
    }
  }
};
</script>

<style   scoped>
</style>