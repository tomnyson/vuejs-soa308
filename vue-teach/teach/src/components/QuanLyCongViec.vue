<script>
import { ref, reactive } from 'vue'
export default {
    setup() {
        const task_name = ref('')
        const tasks = reactive(['task1', 'task2', 'task3', 'task4'])
        const error = ref(false)
        const cantext = ref('center')
        const isHightLight = ref(true)
        const onSubmit = () => {
            if (!task_name.value.trim() == '') {
                tasks.push(task_name)
            } else {
                error.value = true
            }
        }
        const deleteTask = (index) => {
            // const index = tasks.findIndex(t => t === task_name);
            console.log(index);
            if (index != -1) {
                tasks.splice(index, 1);
            }

        }
        const thayDoiStyle = (style) => {
            cantext.value = style
        }
        return {
            task_name, tasks, onSubmit, deleteTask, isHightLight, error, cantext, thayDoiStyle
        }
    }
}
</script>
<template>
    <div class="card mt-5" style="width: 500px;">
        <div class="card-body">
            <h5 class="card-title">Quản lý công việc</h5>
            <form @submit.prevent="onSubmit">
                <input type="text" class="form-control" :class="{ error: error }" placeholder="nhập tên công việc"
                    v-model="task_name">
                <button type="submit" class="btn btn-primary mt-3">thêm công việc</button>
            </form>
            <div class="list-group mt-2">

                <a href="#" class="list-group-item list-group-item-action" v-for="(item, index) in tasks"
                    :key="index">{{ item
                    }} <button class="btn btn-danger" @click="deleteTask(index)">Xoa</button></a>
            </div>
        </div>
    </div>
    <h2>demo style</h2>
    <p :class="{ hightLight: isHightLight }">hello world</p>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">trái</button>
        <button type="button" class="btn btn-secondary">giữa</button>
        <button type="button" class="btn btn-secondary">phải</button>
    </div>
    <p :class="['inDam', cantext, 'chuTo']">Phan Công Bảo</p>
    <div role="group" aria-label="Basic example">
        <button type="button" @click="thayDoiStyle('left')" class="btn btn-secondary">trái</button>
        <button type="button" @click="thayDoiStyle('center')" class="btn btn-secondary">giữa</button>
        <button type="button" @click="thayDoiStyle('right')" class="btn btn-secondary">phải</button>
    </div>
</template>
<style scoped>
.hightLight {
    background: #FFFF00;
}

.error {
    border: 1px solid red !important;
}

.inDam {
    font-weight: bold;
}

.center {
    text-align: center;
}

.left {
    text-align: left;
}

.right {
    text-align: right;
}

.chuTo {
    font-size: 20px;
}
</style>