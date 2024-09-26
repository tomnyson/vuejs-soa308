<script>
import { ref, reactive } from 'vue'
export default {
    setup() {
        const dem = ref(0)
        const enableFlag = ref(false)

        const state = reactive({
            user: {
                username: 'tomnyson',
                password: '123456',
                email: 'admin@example.com',
                ghichu: 'một ngày tồi tệ 😢'
            },
            posts: [
                {
                    id: 1,
                    title: 'abc'
                }
            ]
        })

        const congDem = () => {
            dem.value++;
        }
        const trudem = () => {
            if (dem.value <= 0) {
                alert('ko nhỏ hơn 0')
                return
            }
            dem.value--;
        }
        const hienThiCo = () => {
            enableFlag.value = !enableFlag.value
        }
        const updateStatus = () => { // ham
            let status = prompt("bạn đang nghĩ gì", "");
            if (status) {
                state.user.ghichu = status
            }
        }
        return { dem, congDem, trudem, hienThiCo, enableFlag, state, updateStatus }
    }
}


</script>

<template>
    <h1>demo composition API</h1>
    <button type="button" @click="congDem" class="btn btn-primary">tăng</button>
    <button type="button" @click="trudem" class="btn btn-primary">giam</button>
    <button type="button" @click="hienThiCo" class="btn btn-primary">Hiện or ẩn quốc kỳ</button>
    <h1>count: {{ dem }}</h1>
    <img v-show="enableFlag" class="img-thumbnail" width="500"
        src="https://st.quantrimang.com/photos/image/2021/09/05/Co-Vietnam.png" />

    <h1>State reactive</h1>
    <h3>username: {{ state.user.username }}</h3>
    <h3>password: ****</h3>
    <h3>Email: {{ state.user.email }}</h3>
    <h4>Hôm nay bạn nghỉ gì ? <i @click="updateStatus" class="bi bi-pen icon_click"></i></h4>
    <h5>{{ state.user.ghichu }}</h5>
    <h2>Danh sách công việc</h2>
</template>

<style scoped>
.icon_click {
    cursor: pointer;
}
</style>