<template>
    <div class="pop-up pop-up-qr">
        <div class="pop-up-close" @click="closeModal()"></div>

        <div class="pop-up__wrap">
            <div class="pop-up__header">
                <button class="btn-pop-up-close" @click="closeModal()"></button>
            </div>

            <div class="pop-up__body">
                <div class="img-qr">
                    <svg height="200" width="200" viewBox="0 0 37 37">
                        <path fill="#F1F1F1" d="M0,0 h37v37H0z" shape-rendering="crispEdges"></path>
                        <path fill="#000000"
                            d="M4 4h7v1H4zM12 4h1v1H12zM16 4h1v1H16zM19 4h3v1H19zM23 4h1v1H23zM26,4 h7v1H26zM4 5h1v1H4zM10 5h1v1H10zM13 5h1v1H13zM15 5h1v1H15zM17 5h2v1H17zM20 5h1v1H20zM22 5h1v1H22zM26 5h1v1H26zM32,5 h1v1H32zM4 6h1v1H4zM6 6h3v1H6zM10 6h1v1H10zM12 6h5v1H12zM18 6h6v1H18zM26 6h1v1H26zM28 6h3v1H28zM32,6 h1v1H32zM4 7h1v1H4zM6 7h3v1H6zM10 7h1v1H10zM13 7h1v1H13zM15 7h1v1H15zM18 7h1v1H18zM21 7h2v1H21zM24 7h1v1H24zM26 7h1v1H26zM28 7h3v1H28zM32,7 h1v1H32zM4 8h1v1H4zM6 8h3v1H6zM10 8h1v1H10zM13 8h3v1H13zM17 8h3v1H17zM21 8h1v1H21zM23 8h1v1H23zM26 8h1v1H26zM28 8h3v1H28zM32,8 h1v1H32zM4 9h1v1H4zM10 9h1v1H10zM12 9h5v1H12zM19 9h1v1H19zM21 9h1v1H21zM26 9h1v1H26zM32,9 h1v1H32zM4 10h7v1H4zM12 10h1v1H12zM14 10h1v1H14zM16 10h1v1H16zM18 10h1v1H18zM20 10h1v1H20zM22 10h1v1H22zM24 10h1v1H24zM26,10 h7v1H26zM16 11h1v1H16zM18 11h3v1H18zM24 11h1v1H24zM4 12h1v1H4zM6 12h1v1H6zM10 12h2v1H10zM13 12h3v1H13zM17 12h2v1H17zM20 12h1v1H20zM23 12h1v1H23zM27 12h1v1H27zM30 12h1v1H30zM32,12 h1v1H32zM6 13h1v1H6zM8 13h2v1H8zM11 13h4v1H11zM16 13h3v1H16zM22 13h1v1H22zM24 13h1v1H24zM26 13h2v1H26zM30 13h2v1H30zM4 14h1v1H4zM6 14h1v1H6zM8 14h3v1H8zM12 14h4v1H12zM19 14h2v1H19zM23 14h1v1H23zM25 14h5v1H25zM32,14 h1v1H32zM5 15h2v1H5zM8 15h1v1H8zM16 15h2v1H16zM19 15h1v1H19zM23 15h3v1H23zM27 15h1v1H27zM29 15h1v1H29zM4 16h1v1H4zM6 16h5v1H6zM12 16h1v1H12zM14 16h2v1H14zM17 16h1v1H17zM20 16h2v1H20zM24 16h1v1H24zM26 16h2v1H26zM6 17h1v1H6zM12 17h1v1H12zM20 17h1v1H20zM22 17h1v1H22zM24 17h1v1H24zM26 17h2v1H26zM29 17h1v1H29zM4 18h3v1H4zM8 18h1v1H8zM10 18h1v1H10zM14 18h1v1H14zM16 18h4v1H16zM21 18h1v1H21zM23 18h2v1H23zM27 18h4v1H27zM32,18 h1v1H32zM4 19h2v1H4zM7 19h3v1H7zM13 19h1v1H13zM15 19h1v1H15zM18 19h2v1H18zM22 19h5v1H22zM29 19h1v1H29zM5 20h3v1H5zM9 20h3v1H9zM13 20h9v1H13zM24 20h1v1H24zM26 20h1v1H26zM28 20h1v1H28zM30 20h2v1H30zM6 21h4v1H6zM12 21h1v1H12zM17 21h2v1H17zM20 21h1v1H20zM22 21h1v1H22zM24 21h1v1H24zM26 21h2v1H26zM29 21h1v1H29zM31 21h1v1H31zM4 22h2v1H4zM7 22h1v1H7zM9 22h2v1H9zM13 22h1v1H13zM15 22h1v1H15zM19 22h1v1H19zM21 22h3v1H21zM26 22h3v1H26zM32,22 h1v1H32zM9 23h1v1H9zM11 23h1v1H11zM13 23h1v1H13zM15 23h1v1H15zM17 23h1v1H17zM19 23h1v1H19zM23 23h1v1H23zM27 23h1v1H27zM29 23h1v1H29zM4 24h8v1H4zM13 24h5v1H13zM19 24h2v1H19zM23 24h6v1H23zM30 24h1v1H30zM32,24 h1v1H32zM12 25h5v1H12zM20 25h2v1H20zM23 25h2v1H23zM28 25h1v1H28zM30 25h2v1H30zM4 26h7v1H4zM12 26h3v1H12zM16 26h4v1H16zM21 26h2v1H21zM24 26h1v1H24zM26 26h1v1H26zM28 26h3v1H28zM32,26 h1v1H32zM4 27h1v1H4zM10 27h1v1H10zM13 27h1v1H13zM15 27h2v1H15zM18 27h1v1H18zM22 27h3v1H22zM28 27h2v1H28zM32,27 h1v1H32zM4 28h1v1H4zM6 28h3v1H6zM10 28h1v1H10zM13 28h2v1H13zM16 28h4v1H16zM21 28h1v1H21zM23,28 h10v1H23zM4 29h1v1H4zM6 29h3v1H6zM10 29h1v1H10zM16 29h3v1H16zM20 29h1v1H20zM22 29h2v1H22zM25 29h1v1H25zM27 29h1v1H27zM29 29h1v1H29zM32,29 h1v1H32zM4 30h1v1H4zM6 30h3v1H6zM10 30h1v1H10zM12 30h2v1H12zM15 30h1v1H15zM19 30h1v1H19zM21 30h1v1H21zM24 30h2v1H24zM28 30h1v1H28zM31,30 h2v1H31zM4 31h1v1H4zM10 31h1v1H10zM13 31h1v1H13zM16 31h4v1H16zM22 31h1v1H22zM24 31h2v1H24zM27 31h1v1H27zM29 31h1v1H29zM4 32h7v1H4zM12 32h3v1H12zM16 32h4v1H16zM22 32h1v1H22zM24 32h3v1H24zM29 32h1v1H29zM32,32 h1v1H32z"
                            shape-rendering="crispEdges"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(["popUpTradingBalance"]),
    },
    methods: {
        closeModal() {
            this.$store.commit("setPopUpQR", false);
        }
    }
}

</script>

<style lang="scss">
.pop-up.pop-up-qr .pop-up__wrap {
    max-width: fit-content;

    .pop-up__header {
        padding-top: 0;

        .btn-pop-up-close {
            top: -1.25rem;
            right: -2rem;
            width: 1.5rem;
            height: 1.5rem;
        }
    }
}

.img-qr {
    display: flex;
    align-items: center;
    justify-content: center;

    svg,
    img {
        width: 12.5rem;
        max-width: 200px;
        aspect-ratio: 1/1;
    }
}
</style>