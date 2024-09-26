<script>
export default {
    setup() {

    }
}
</script>
<template>
    <div class="card mt-5" style="width: 500px;">
        <div class="card-body">
            <h5 class="card-title">Quản lý công việc</h5>
            <form>
                <input type="text" class="form-control" placeholder="nhập tên công việc" />
                <button type="submit" class="btn btn-primary mt-3">thêm công việc</button>
            </form>
            <div class="list-group mt-2">
                <a href="#" class="list-group-item list-group-item-action">First item</a>
                <a href="#" class="list-group-item list-group-item-action">Second item</a>
                <a href="#" class="list-group-item list-group-item-action">Third item</a>
            </div>
        </div>
    </div>
</template>