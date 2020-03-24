<template>
    <div>
        <input type="text" :value="value" @input="onInput">
    </div>
</template>

<script>
    export default {
        inject: ['form'], 
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        methods: {
            onInput(e) {
                this.$emit ("input", e.target.value); 
                // this.$parent.$emit ('validate');  //  调用失败
                this.form.validate(); 
                // this.$parent.validate();  // 调用成功
                this.$parent.test='更新后的 test ';  
                // console.log('发送通知。', this.$parent);
            }
        },
    }
</script>

<style   scoped>

</style>