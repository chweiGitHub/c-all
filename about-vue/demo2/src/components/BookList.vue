<template>
  <div>
    <div v-for="item in bookList" :key="item.name">
      <router-link :to="`/detail/${item.name}`">{{ item.name }} ￥{{item.price}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookList: {
      type: Array,
      default: function() {
        return [{ name: "完美世界" }, { name: "瓦尔登湖" }];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>