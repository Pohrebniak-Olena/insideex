<script setup>
import '@/assets/styles/_header.scss'
</script>

<template>
    <div class="header-wrap">
        <header>

            <div class="header-user">
                <i class="icon-operator"></i>
                Operator
            </div>

            <div class="header-data">

                <p class="data-line">
                    <span class="title">Reward Qac:</span>
                    <span class="value">2.20%</span>
                </p>

                <p class="data-line">
                    <span class="title">Reward P2P:</span>
                    <span class="value">2.435%</span>
                </p>

                <p class="data-line data-line-rate">
                    <span class="title">Rate:</span>
                    <span class="value">
                        40.67 / 39.80</span>
                    <span class="subvalue">(5/19/2024, 7:05:01 PM)</span>
                </p>

                <p class="data-line data-line-user">
                    <i class="icon-user-line"></i>
                    <span class="value">Amb 12 Candy</span>
                </p>

                <div class="lang">
                    <div class="drop-down-lang" :class="{ 'active': dropDownLang }">
                        <div class="drop-down-cover" @click="dropDownLang = false"></div>
                        <button @click="dropDownLang = !dropDownLang" class="drop-down-btn">
                            <i class="icon-lang"></i>
                            <span>
                                En
                            </span>
                        </button>
                        <div class="drop-down-list">
                            <li class="item">En</li>
                            <li class="item">Ua</li>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropDownLang: false,
        }
    }
}
</script>