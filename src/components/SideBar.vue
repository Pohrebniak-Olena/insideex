<template>
    <div class="sidebar">
        <div class="sidebar-close" @click="closeSideBar"></div>
        <div class="sidebar-wrap">
            <div class="sidebar__header">
                General information
            </div>

            <div class="sidebar_section">
                <p class="sidebar_section__title">
                    About Trans
                </p>
                <ul>
                    <li>Id: <span>234353</span></li>
                    <li>Id hash:
                        <span>sudn9y34hde78fy48ry4fhsf7e8+ewdijJHubyTyugyhU=</span>
                    </li>
                    <li>Order Id: 234353</li>
                    <li>Id: 234353</li>
                    <li>Id: 234353</li>
                    <li>Id: 234353</li>
                </ul>
            </div>

            <div class="sidebar_section">
                <p class="sidebar_section__title">
                    About Trans
                </p>
                <ul>
                    <li>Id: <span>234353</span></li>
                    <li>Id hash:
                        <span>sudn9y34hde78fy48ry4fhsf7e8+ewdijJHubyTyugyhU=</span>
                    </li>
                    <li>Order Id: 234353</li>
                    <li>Id: 234353</li>
                    <li>Id: 234353</li>
                    <li>Id: 234353</li>
                </ul>
            </div>

            <div class="sidebar_section">
                <p class="sidebar_section__title">
                    About Trans
                </p>
                <ul>
                    <li>Id: <span>234353</span></li>
                    <li>Id hash:
                        <span>sudn9y34hde78fy48ry4fhsf7e8+ewdijJHubyTyugyhU=</span>
                    </li>
                    <li>Order Id: 234353</li>
                    <li>Id: 234353</li>
                    <li>Id: 234353</li>
                    <li>Id: 234353</li>
                </ul>
            </div>



        </div>
    </div>
</template>

<script>
import '@/assets/styles/_sidebar.scss'

export default {
    data() {
        return {
        }
    },
    methods:{
        closeSideBar(){
            this.$store.commit("setShowSideBar", false);
        }
    }
}
</script>