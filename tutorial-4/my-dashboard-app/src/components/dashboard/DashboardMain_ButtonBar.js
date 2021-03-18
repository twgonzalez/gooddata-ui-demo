import React, { useState } from 'react';
import styles from './DashboardMain.module.scss';

// This line here is super important;
import * as Ldm from '../../ldm/full';
import { newRelativeDateFilter, newPreviousPeriodMeasure } from '@gooddata/sdk-model';
import { DateFilter, DateFilterHelpers, defaultDateFilterOptions } from '@gooddata/sdk-ui-filters';
import { Headline, AreaChart, BarChart } from '@gooddata/sdk-ui-charts';
import { InsightView } from '@gooddata/sdk-ui-ext';
import '@gooddata/sdk-ui-filters/styles/css/main.css';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const DashboardMain = () => {
    const [timePeriod, setTimePeriod] = useState(0);

    const availableGranularities = ['GDC.time.date', 'GDC.time.month', 'GDC.time.quarter', 'GDC.time.year'];
    const [dateFilterOptions, setDateFilterOptions] = useState(defaultDateFilterOptions.allTime);
    const [excludeCurrentPeriod, setExcludeCurrentPeriod] = useState(false);

    const DATASET = 'date.dataset.dt';

    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        dateFilterOptions,
        {
            identifier: DATASET,
        },
        excludeCurrentPeriod,
    );

    const timePeriodFilters = [
        newRelativeDateFilter(DATASET, 'GDC.time.year', -1, -1),
        newRelativeDateFilter(DATASET, 'GDC.time.quarter', -1, -1),
        newRelativeDateFilter(DATASET, 'GDC.time.month', -1, -1),
    ];

    const [timePeriodFilter, setTimePeriodFilter] = useState(timePeriodFilters[0]);
    const [timePeriodLabel, setTimePeriodLabel] = useState('Year');

    const handleTimePeriodChange = (value) => {
        setTimePeriodFilter(timePeriodFilters[value]);
        setTimePeriodLabel(['Year', 'Quarter', 'Month'][value]);
        setTimePeriod(value);
    };

    const totalSales = Ldm.TotalSales;
    const totalSalesPrevious = newPreviousPeriodMeasure(
        totalSales,
        [{ dataSet: DATASET, periodsAgo: 1 }],
        (m) => m.alias('Previous Period'),
    );

    const totalProfit = Ldm.TotalProfit;
    const totalProfitPrevious = newPreviousPeriodMeasure(
        totalProfit,
        [{ dataSet: DATASET, periodsAgo: 1 }],
        (m) => m.alias('Previous Period'),
    );

    const totalReturns = Ldm.TotalReturnAmount;
    const totalReturnsPrevious = newPreviousPeriodMeasure(
        totalReturns,
        [{ dataSet: DATASET, periodsAgo: 1 }],
        (m) => m.alias('Previous Period'),
    );

    const totalTransactions = Ldm.CountOfTransactions;
    const totalTransactionsPrevious = newPreviousPeriodMeasure(
        totalTransactions,
        [{ dataSet: DATASET, periodsAgo: 1 }],
        (m) => m.alias('Previous Period'),
    );

    const onApplyDateFilter = (dateFilterOption, excludeCurrentPeriod) => {
        setDateFilterOptions(dateFilterOption);
        setExcludeCurrentPeriod(excludeCurrentPeriod);
    };

    return (
        <div className={styles.DashboardMain}>
            <div className={styles.Filters}>
                <div className={styles.ButtonGroup}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button
                            variant={timePeriod === 0 ? 'contained' : 'outlined'}
                            onClick={() => handleTimePeriodChange(0)}
                        >
                            This Year
                        </Button>
                        <Button
                            variant={timePeriod === 1 ? 'contained' : 'outlined'}
                            onClick={() => handleTimePeriodChange(1)}
                        >
                            This Quarter
                        </Button>
                        <Button
                            variant={timePeriod === 2 ? 'contained' : 'outlined'}
                            onClick={() => handleTimePeriodChange(2)}
                        >
                            This Month
                        </Button>
                    </ButtonGroup>
                </div>
                <div className={styles.DateFilterGroup}>
                    <DateFilter
                        excludeCurrentPeriod={excludeCurrentPeriod}
                        selectedFilterOption={dateFilterOptions}
                        filterOptions={defaultDateFilterOptions}
                        availableGranularities={availableGranularities}
                        customFilterName="Date filter name"
                        dateFilterMode="active"
                        onApply={onApplyDateFilter}
                    />
                </div>
            </div>
            <div className={styles.KPIs}>
                <div className={styles.KPI}>
                    <span className={styles.Title}>This {timePeriodLabel} Sales</span>
                    <Headline
                        primaryMeasure={totalSales}
                        secondaryMeasure={totalSalesPrevious}
                        filters={[dateFilter]}
                    />
                </div>
                <div className={styles.KPI}>
                    <span className={styles.Title}>This {timePeriodLabel} Profit</span>
                    <Headline
                        primaryMeasure={totalProfit}
                        secondaryMeasure={totalProfitPrevious}
                        filters={[timePeriodFilter]}
                    />
                </div>
                <div className={styles.KPI}>
                    <span className={styles.Title}>This {timePeriodLabel} Returns</span>
                    <Headline
                        primaryMeasure={totalReturns}
                        secondaryMeasure={totalReturnsPrevious}
                        filters={[timePeriodFilter]}
                    />
                </div>
                <div className={styles.KPI}>
                    <span className={styles.Title}>This {timePeriodLabel} Transactions</span>
                    <Headline
                        primaryMeasure={totalTransactions}
                        secondaryMeasure={totalTransactionsPrevious}
                        filters={[timePeriodFilter]}
                    />
                </div>
            </div>
            <div className={styles.Chart}>
                <AreaChart
                    measures={[Ldm.CountOfTransactions]}
                    stackBy={Ldm.ProductCategory}
                    viewBy={[Ldm.DateMonth.Short]}
                ></AreaChart>
                <InsightView
                    insight={Ldm.Insights.RevenueTrendByProductCategory}
                    filters={[timePeriodFilter]}
                />
            </div>
            <div className={styles.Table}>
                <InsightView insight={Ldm.Insights.MeasuresByProductCategoruy} filters={[timePeriodFilter]} />
            </div>
        </div>
    );
};

export default DashboardMain;
