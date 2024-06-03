<template>
    <main class="main main-wallet">
        <section>

            <h1 class="h1">My Wallet</h1>

            <div class="cards-grid">
                <div class="card card-total-balance">
                    <div class="card-header">
                        <p class="title">
                            Total Balance
                        </p>
                        <button class="btn-scan">
                            <i class="icon-qr"></i>
                        </button>
                    </div>
                    <div class="card-content">
                        <div class="chart-wrap">
                            <p>0.00 USDT</p>
                        </div>

                        <div class="chart-legend">
                            <p>
                                <i style="background-color: rgb(148, 126, 254)"></i>
                                <b>Trading balance</b>
                                <br>(Active)
                            </p>
                            <p>
                                <i style="background-color: rgb(73, 80, 87)"></i>
                                <b>Balance</b>
                                <br>(Inactive)
                            </p>
                            <p>
                                <i style="background-color: rgb(101, 190, 255)"></i>
                                <b>Held in transactions balance</b>
                                <br>(Frozen)
                            </p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row row-id">
                            <p class="wallet-id">
                                Wallet ID:
                                <b>TXLZtWXGmTPdaoddesTPHSHrvUPiU3QCCJ</b>
                            </p>
                            <div class="wallet-id-copy">

                                <button class="btn-copy">
                                    <i class="icon-copy-fill"></i>
                                    Copy ID
                                </button>

                                <p v-if="false">
                                    <i class="icon-check"></i>
                                    Copied !
                                </p>
                            </div>
                        </div>
                        <div class="row row-actions">
                            <button class="btn btn-gradient">
                                Top up active balance
                            </button>
                            <button class="btn btn-border-color">
                                Withdrawal
                            </button>
                        </div>
                    </div>
                </div>

                <div class="cards-col">

                    <div class="card card-balance">
                        <div class="card-header">
                            <p class="card-title-label">
                                Balance
                            </p>
                            <p class="card-state">
                                Inactive
                            </p>
                        </div>
                        <div class="card-footer">
                            <p class="balance">
                                0.00 USDT
                            </p>
                            <div class="chart-wrap">

                            </div>
                        </div>
                    </div>

                    <div class="card card-trading-balance">
                        <div class="card-header">
                            <p class="card-title-label">
                                Trading balance
                            </p>
                            <p class="card-state">
                                Active
                            </p>
                        </div>
                        <div class="card-footer">
                            <p class="balance">
                                0.00 USDT
                            </p>
                            <div class="chart-wrap">

                            </div>
                        </div>
                    </div>

                    <div class="card card-held-balance">
                        <div class="card-header">
                            <p class="card-title-label">
                                Held in transactions balance
                            </p>
                            <p class="card-state">
                                Frozen
                            </p>
                        </div>
                        <div class="card-footer">
                            <p class="balance">
                                0.00 USDT
                            </p>
                            <div class="chart-wrap">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section>
            <h1 class="h1">Transactions</h1>

            <div class="row row-buttons-end">

                <button class="btn-refresh">
                    <i class="icon-refresh"></i>
                    <span>Refresh</span>
                </button>
            </div>

            <div class="section-table-wrap">
                <div class="row-table-header">
                    <div class="tabs">
                        <button @click="tabActive=0">Withdrawal</button>
                        <button @click="tabActive=1">Deposit</button>
                    </div>
                </div>

                <!-- Withdrawal  -->
                <div v-if="tabActive==0" class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th class="td-value">
                                    Value
                                </th>
                                <th class="td-status">
                                    Status
                                </th>
                                <th>
                                    Date and Time
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p class="data-copy">
                                        <i class="icon-copy-fill"></i>
                                        <span>37</span>
                                    </p>
                                </td>
                                <td class="td-value">
                                    <p>2500.00</p>
                                </td>
                                <td class="td-status">
                                    <p class="cancel">Canceled</p>
                                </td>
                                <td>
                                    <p>09.05.2024 16:54</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </main>
</template>

<script>
export default{
    data(){
        return{
            tabActive:0,
        }
    }
}
</script>