<template>
    <div class="notification"
        :class="{
            'success':currentNotif == 'success',
            'error':currentNotif == 'error',
            'warning':currentNotif == 'warning'

        }"
    >
        <div class="container">
            <div class="content">
                Changes saved
            </div>
        </div>
        <button class="btn-close">
            <i class="i-close">  </i>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentNotif: 'success'
        }
    }
}
</script>