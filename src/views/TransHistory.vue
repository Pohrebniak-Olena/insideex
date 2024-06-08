<template>
    <main class="main main-trans">
        <h1 class="h1">History Transactions</h1>

        <div class="row row-search">
            <div class="input-search">
                <input type="text">
                <i class="icon-search"></i>
            </div>
        </div>

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

                <div class="drop-down-filter" :class="{ 'active': dropDownStatus }">
                    <div class="drop-down-cover" @click="dropDownStatus = false"></div>
                    <button @click="dropDownStatus = !dropDownStatus" class="drop-down-btn">
                        <span>
                            Filter By Status
                        </span>
                    </button>
                    <div class="drop-down-list">
                        <li class="item">All</li>
                        <li class="item">Tag #1</li>
                    </div>
                </div>

                <div class="drop-down-filter" :class="{ 'active': dropDownSort }">
                    <div class="drop-down-cover" @click="dropDownSort = false"></div>
                    <button @click="dropDownSort = !dropDownSort" class="drop-down-btn">
                        <span>
                            Sort By
                        </span>
                    </button>
                    <div class="drop-down-list">
                        <li class="item">All</li>
                        <li class="item">value less</li>
                        <li class="item">value High</li>
                    </div>
                </div>

                
                <div class="inl-flex looking-period">
                
                    <button class="btn-date">
                        <i class="icon-calendar"></i>
                        Choose period
                    </button>
                </div>
            </div>

            <div class="buttons-wrap">
                <button class="btn-border-color">
                    Download
                </button>
                <button class="btn-border-color">
                    Reset All filters
                </button>
            </div>

        </div>

        <div class="section-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card</th>
                        <th>Value UAH</th>
                        <th>Value USDT</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>State</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr>
                        <td>Not found</td>
                    </tr> -->
                    <tr>
                        <td>
                            <p>Olga Hurchyk</p>
                        </td>
                        <td>
                            <p>**2323</p>
                            <p>Monobank</p>
                        </td>
                        <td>
                            2453.00
                        </td>
                        <td>
                            11.43
                        </td>
                        <td>
                           19.05.2024 12:45
                        </td>
                        <td>
                           07.02.2025 12:46
                        </td>
                        <td style="font-weight:600;">
                            <p style="color:#C51919;">Canceled</p>
                        </td>
                        <td>
                            <button class="btn-td-more"> Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Maks Yavorsky</p>
                        </td>
                        <td>
                            <p>**3453</p>
                            <p>Monobank</p>
                        </td>
                        <td>
                            30245.00
                        </td>
                        <td>
                            65.62
                        </td>
                        <td>
                           19.05.2024 12:45
                        </td>
                        <td>
                           07.02.2025 12:46
                        </td>
                        <td style="font-weight:600;">
                            <p style="color:#36B830">Paid</p>
                        </td>
                        <td>
                            <button class="btn-td-more"> Details</button>
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
            dropDownStatus: false,
            dropDownSort: false
        }
    }
}

</script>