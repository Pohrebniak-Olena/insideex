<template>
    <main class="main main-settings">
        <h1 class="h1">Settings</h1>

        <div class="cards-config">

                <div class="card">
                    <p class="card-title">API configuration</p>

                    <div class="card-body">
                        <div class="hidden-data">
                            <p v-if="apiconnfig">
                                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbmR5QGd0cC5jYXNoIiwibmFtZSI6IkFtYiAxMiBDYW5keSIsImlhdCI6MTcxMzQ0MjA3NCwiZXhwIjoxNzEzNDc0NDc0fQ.2Kixz56jvKh4adBJfXnrxAqM_hSTC1HgIcYQhT1QibQ
                            </p>
                            <p v-if="!apiconnfig">
                                *************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
                            </p>
                            <div class="hidden-data-action">
                                <button class="btn-eye" @click="apiconnfig = !apiconnfig">
                                    <i v-if="apiconnfig" class="icon-eye-open"></i>
                                    <i v-else class="icon-eye-close"></i>
                                </button>
                                <button class="btn-copy">
                                    <i class="icon-copy"></i>
                                </button>
                            </div>
                        </div>

                        <div class="card-main-btn">
                            <button class="btn-gradient">
                                Update API KEY
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <p class="card-title">Add new Token</p>

                    <div class="card-body">
                        <div class="hidden-data">
                            <!-- <p v-if="apiconnfig">
                                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbmR5QGd0cC5jYXNoIiwibmFtZSI6IkFtYiAxMiBDYW5keSIsImlhdCI6MTcxMzQ0MjA3NCwiZXhwIjoxNzEzNDc0NDc0fQ.2Kixz56jvKh4adBJfXnrxAqM_hSTC1HgIcYQhT1QibQ
                            </p>
                            <p v-if="!apiconnfig">
                                *************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
                            </p>
                            <div class="hidden-data-action">
                                <button class="btn-eye" @click="apiconnfig = !apiconnfig">
                                    <i v-if="apiconnfig" class="icon-eye-open"></i>
                                    <i v-else class="icon-eye-close"></i>
                                </button>
                                <button class="btn-copy">
                                    <i class="icon-copy"></i>
                                </button>
                            </div> -->
                        </div>

                        <div class="card-main-btn">
                            <button class="btn-gradient">
                                Add New Monobank Token
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <p class="card-title">Active Monobank Tokens</p>

                    <div class="card-body">
                        No saved tokens

                        <!-- <div class="card-main-btn">
                            <button class="btn-gradient">
                                Update API KEY
                            </button>
                        </div> -->
                    </div>
                </div>
        </div>
    </main>
</template>

<script>

export default {
    data() {
        return {
            apiconnfig: false,
        }
    }
}

</script>