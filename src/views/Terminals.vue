<template>
    <main class="main main-terminals">
        <h1 class="h1">Terminals</h1>

        <div class="row-filters">

            <div class="filters-wrap">
                <div class="drop-down-filter" :class="{ 'active': dropDownBank }">
                    <div class="drop-down-cover" @click="dropDownBank = false"></div>
                    <button @click="dropDownBank = !dropDownBank" class="drop-down-btn">
                        <span>
                            Filter By Bank
                        </span>
                    </button>
                    <div class="drop-down-list">
                        <li class="item">All</li>
                        <li class="item">Sportbank</li>
                        <li class="item">Privatbank</li>
                        <li class="item">OTPbank</li>
                        <li class="item">А-банк</li>
                        <li class="item">ПУМБ</li>
                        <li class="item">Sense</li>
                        <li class="item">Укргазбанк (Екобанк)</li>
                        <li class="item">Спортбанк</li>
                        <li class="item">Ізібанк</li>
                        <li class="item">Власний Рахунок (БВР)</li>
                        <li class="item">>Кредi Агрiколь</li>
                        <li class="item">Кредо Банк</li>
                        <li class="item">Райффайзен</li>
                        <li class="item">Банк Пiвдений</li>
                        <li class="item">Банк Восток</li>
                        <li class="item">Кредит Днiпро</li>
                        <li class="item">МТБ</li>
                        <li class="item">Monobank</li>
                        <li class="item">Sportbank</li>
                        <li class="item">Monobank</li>
                        <li class="item">Sportbank</li>
                        <li class="item">JSC Oschadbank</li>
                        <li class="item">АКЦЕНТ БАНК</li>
                        <li class="item">Monobank</li>
                        <li class="item">TAS</li>
                        <li class="item">NovaPay</li>
                        <li class="item">УкрСиббанк</li>
                        <li class="item">Unex</li>
                        <li class="item">Idea Bank</li>
                        <li class="item">Інший Банк</li>
                    </div>
                </div>

                <button class="btn-border-color">
                    Reset All filters
                </button>
            </div>

            <div class="buttons-wrap">
                <button class="btn-border-color btn-add">
                    Add Terminal
                </button>
            </div>

        </div>

        <div class="section-table">
            <table>
                <thead>
                    <tr>
                        <th>Terminal</th>
                        <th>Turnover</th>
                        <th>Daily Limit</th>
                        <th>Monthly Limit</th>
                        <th>Number</th>
                        <th>Dily:Success</th>
                        <th>Success/Failed</th>
                        <th>Bank</th>
                        <th>Available</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr>
                        <td>Not found</td>
                    </tr> -->
                    <tr>
                        <td>
                            <p class="link-wrap link-full">https://send.monobank.ua/jsr/r93rujef84</p>
                            <p>Oleg 2</p>
                        </td>
                        <td>
                            <p>Dily: 0 UAH</p>
                            <p>Monthly: 0 UAH</p>
                        </td>
                        <td>
                            13244.00 UAH
                        </td>
                        <td>
                            754000.00 UAH
                        </td>
                        <td>
                           03 / 200
                        </td>
                        <td>
                            0 / 0
                        </td>
                        <td>
                            4 / 7
                        </td>
                        <td>
                            Monobank
                        </td>
                        <td class="switcher-td">
                            <p class="switcher">
                                <input type="checkbox" id="available-switcher">
                                <label for="available-switcher"></label>
                            </p>
                        </td>
                        <td>
                            <button 
                            @click="showSideBar"
                            class="btn-td-more"> Details</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        
        <h2 class="h1">Archive Terminal</h2>
        <div class="section-table section-table-archive">
            <table>
                <thead>
                    <tr>
                        <th>Terminal</th>
                        <th>Turnover</th>
                        <th>Daily Limit</th>
                        <th>Monthly Limit</th>
                        <th>Bank</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr>
                        <td>Not found</td>
                    </tr> -->
                    <tr>
                        <td>
                            <p class="link-wrap link-full">https://send.monobank.ua/jsr/r93rujef84</p>
                            <p>Oleg 2</p>
                        </td>
                        <td>
                            <p>Dily: 0 UAH</p>
                            <p>Monthly: 0 UAH</p>
                        </td>
                        <td>
                            13244.00 UAH
                        </td>
                        <td>
                            754000.00 UAH
                        </td>
                        <td>
                            Monobank
                        </td>
                        <td>
                            <button class="btn-td-border">Restore</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>

export default {
    data() {
        return {
            apiconnfig: false,
            dropDownBank: false,
            dropDownSort: false
        }
    },
    methods:{
        showSideBar(){
            this.$store.commit("setShowSideBar", true);
        }
    }
}

</script>