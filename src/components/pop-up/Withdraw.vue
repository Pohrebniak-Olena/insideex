<template>
    <div class="pop-up">
        <div class="pop-up-close" @click="closeModal()"></div>

        <div class="pop-up__wrap">
            <div class="pop-up__header">
                <button class="btn-pop-up-close" @click="closeModal()"></button>
                <p class="h4">
                    Enter the top-up amount from your deposit
                </p>
                <p class="h6">
                    Min amount - more 500 USDT
                </p>
            </div>

            <div class="pop-up__body">
                <div class="input-wrap">
                    <input type="number" v-model="valueInput" placeholder="0"/>
                </div>

                <div class="pop-up__buttons">
                    <button class="btn-confirm"
                    :disabled=!valueInput
                    >Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default{
    data() {
        return {
            valueInput: 0,
        }
    },
    computed: {
        ...mapState(["popUpWithdraw"]),
    },
    methods: {
        closeModal(){
            this.$store.commit("setPopUpWithdraw", false);
        }
    }
}

</script>