<template>
    <main class="main main-dashboard">
        <h1 class="h1">Dashboard</h1>
        <div class="inl-flex looking-period">
            Search by period:
            <button class="btn-date">
                <i class="icon-calendar"></i>
                05-21-2024 - 05-21-2024
            </button>
        </div>

        <div class="cards-grid">
            <div class="cards-col">

                <div class="card">
                    <div class="card-header">
                        <p class="title">
                            <i class="icon-turnovers"></i>
                            Turnovers
                        </p>
                        <p class="card-date">05-21-2024 - 05-21-2024</p>
                    </div>
                    <div class="card-body">
                        <div class="card-table">

                            <div class="card-table-tr">
                                <p class="card-table-title">
                                    Total card turnover USDT
                                </p>
                                <p class="card-table-value">
                                    0.00 USDT
                                </p>
                            </div>

                            <div class="card-table-tr">
                                <p class="card-table-title">
                                    Total card turnover UAH
                                </p>
                                <p class="card-table-value">
                                    0.00 ₴
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <p class="title">
                            <i class="icon-percent"></i>
                            Earned money on a fee
                        </p>
                        <p class="card-date">05-21-2024 - 05-21-2024</p>
                    </div>
                    <div class="card-body">
                        <div class="card-table">

                            <div class="card-table-tr">
                                <p class="card-table-title">
                                    Fee Amount Earned
                                </p>
                                <p class="card-table-value">
                                    0 USDT
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="card card-transaction">
                <div class="card-header">
                    <p class="title">
                        <i class="icon-statistics"></i>
                        Transaction statistics
                    </p>
                    <p class="card-date">05-21-2024 - 05-21-2024</p>
                </div>
                <div class="card-body">
                    <div class="card-table">

                        <div class="card-table-tr">
                            <p class="card-table-title">
                                Count of successful transactions
                            </p>
                            <p class="card-table-value">
                                0
                            </p>
                        </div>

                        <div class="card-table-tr">
                            <p class="card-table-title">
                                Count of failed transactions
                            </p>
                            <p class="card-table-value">
                                0
                            </p>
                        </div>

                        <div class="card-table-tr">
                            <p class="card-table-title">
                                Average check
                            </p>
                            <p class="card-table-value">
                                0.00 ₴
                            </p>
                        </div>

                        <div class="card-table-tr">
                            <p class="card-table-title">
                                Average Rate
                            </p>
                            <p class="card-table-value">
                                0.00
                            </p>
                        </div>

                    </div>
                    <div class="card-chart">
                        <p class="card-chart-main">
                            <div class="chart">
                                0%
                            </div>
                        </p>
                        <div class="card-chart-legend">
                            <p>
                                <i style="background-color: rgb(24, 232, 6);"></i>
                                Successful transactions - 0%</p>
                            <p>
                                <i style="background-color: rgb(235, 87, 87);"></i>
                                Failed transactions - 0%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>