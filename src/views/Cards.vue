<template>
    <main class="main main-cards">
        <h1 class="h1">Cards</h1>

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

                <div class="drop-down-filter" :class="{ 'active': dropDownTag }">
                    <div class="drop-down-cover" @click="dropDownTag = false"></div>
                    <button @click="dropDownTag = !dropDownTag" class="drop-down-btn">
                        <span>
                            Filter By Tag
                        </span>
                    </button>
                    <div class="drop-down-list">
                        <li class="item">All</li>
                        <li class="item">Tag #1</li>
                    </div>
                </div>
            </div>

            <div class="switcher-filter">
                <div class="switch">
                    <p class="switcher-title">
                        Accessibility for all:
                    </p>
                    <div class="switcher">
                        <input type="checkbox" id="switcher-access">
                        <label for="switcher-access">
                            <div class="label-prompt">
                                <span>On</span>
                                <span>Off</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div class="buttons-wrap">
                <button class="btn-border-color btn-add">
                    Add Tag
                </button>
                <button class="btn-border-color btn-add">
                    Add Card
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
                        <th>
                            <p class="checkbox">
                                <input type="checkbox" class="td-checkbox" id="checkbox1">
                                <label for="checkbox1">-</label>
                            </p>
                        </th>
                        <th>Card</th>
                        <th>Turnover</th>
                        <th>
                            Daily Limit
                        </th>
                        <th>
                            Month Limit
                        </th>
                        <th>Daily Count</th>
                        <th>Bank</th>
                        <th>Tag</th>
                        <th>Accessibility</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr>
                        <td>Not found</td>
                    </tr> -->
                    <tr>
                        <td>
                            <p class="checkbox">
                                <input type="checkbox" class="td-checkbox" id="checkbox1">
                                <label for="checkbox1">-</label>
                            </p>
                        </td>
                        <td>
                            <p>242343***4364</p>
                            <p>Saluna2</p>
                        </td>
                        <td>Daily: 345UAH</td>
                        <td>Monthly: 345UAH</td>
                        <td>
                            32000 UAH
                        </td>
                        <td>
                            0/204
                        </td>
                        <td>
                            Monobank
                        </td>
                        <td>not found</td>
                        <td class="switcher-td">
                            <p class="switcher">
                                <input type="checkbox" id="available-switcher-cards">
                                <label for="available-switcher-cards"></label>
                            </p>
                        </td>
                        <td>
                            <button class="btn-td-more"> Change</button>
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
            dropDownTag: false
        }
    }
}

</script>