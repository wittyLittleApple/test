
export default {
    data () {
        return{

        }
    },
    methods: {
        test () {
            // 调用beforeDe
            this.timer = setInterval(() => {
                // 一秒执行一次
            }, 1000)
            this.$once('hook:beforeDestroy', () => {
                clearInterval(this.timer)
            })
        }
    },
}
