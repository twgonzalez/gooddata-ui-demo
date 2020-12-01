import React, { useState } from "react";
import styles from "./DashboardMain.module.scss";

import * as Ldm from "../../ldm/full";
import { newPreviousPeriodMeasure} from "@gooddata/sdk-model";
import { DateFilter, DateFilterHelpers, defaultDateFilterOptions } from "@gooddata/sdk-ui-filters";
import { Headline } from "@gooddata/sdk-ui-charts";
import { InsightView } from "@gooddata/sdk-ui-ext";
import "@gooddata/sdk-ui-filters/styles/css/main.css";

const DashboardMain= () => {

    // This is used to identifiy the data set we will use for all date filtering - better explanatoin ??
    const DATASET = "date.dataset.dt";

    // We enumerate all of the measures we want to display in our headline components, as well as their corresponding previous
    // period measures.
    const totalSales = Ldm.TotalSales;
    const totalSalesPrevious = newPreviousPeriodMeasure(totalSales, [{dataSet: DATASET, periodsAgo: 1}],  m => m.alias("Previous Period"));
     
    const totalProfit = Ldm.TotalProfit;
    const totalProfitPrevious = newPreviousPeriodMeasure(totalProfit, [{dataSet: DATASET, periodsAgo: 1}],  m => m.alias("Previous Period"));

    const totalReturns = Ldm.TotalReturnAmount;
    const totalReturnsPrevious = newPreviousPeriodMeasure(totalReturns, [{dataSet: DATASET, periodsAgo: 1}],  m => m.alias("Previous Period"));

    const totalTransactions = Ldm.CountOfTransactions;
    const totalTransactionsPrevious = newPreviousPeriodMeasure(totalTransactions, [{dataSet: DATASET, periodsAgo: 1}],  m => m.alias("Previous Period"));

    // We use this to set up our 
    const availableGranularities = ["GDC.time.date", "GDC.time.month", "GDC.time.quarter", "GDC.time.year"];
    const [dateFilterOptions, setDateFilterOptions]  = useState(defaultDateFilterOptions.allTime);
    const [excludeCurrentPeriod, setExcludeCurrentPeriod] = useState(false);
    const [timePeriodLabel, setTimePeriodLabel] = useState("all time");

    const onApplyDateFilter = (dateFilterOption, excludeCurrentPeriod) => {
        setDateFilterOptions(dateFilterOption);
        setExcludeCurrentPeriod(excludeCurrentPeriod);
        setTimePeriodLabel(String(dateFilterOption.localIdentifier.replace(/_/g,' ')).toLowerCase());
    };

    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        dateFilterOptions,
        {
            identifier: DATASET,
        },
        excludeCurrentPeriod,
    );

    return (
        <div className={styles.DashboardMain}>
            <div className={styles.Filters}>
                <div className={styles.DateFilterGroup}>
                <DateFilter
                    excludeCurrentPeriod={excludeCurrentPeriod}
                    selectedFilterOption={dateFilterOptions}
                    filterOptions={defaultDateFilterOptions}
                    availableGranularities={availableGranularities}
                    customFilterName="Select a Date Range"
                    dateFilterMode="active"
                    onApply={onApplyDateFilter}
                />
                </div>
            </div>
            <div className={styles.KPIs}>
                <div className={styles.KPI}>
                    <span className={styles.Title}>{timePeriodLabel} Sales</span>
                    <Headline
                        primaryMeasure={totalSales}
                        secondaryMeasure={totalSalesPrevious}
                        filters={dateFilter ? [dateFilter] : []}
                    />
                </div>
                <div className={styles.KPI}>
                    <span className={styles.Title}>{timePeriodLabel} Profit</span>
                    <Headline
                        primaryMeasure={totalProfit}
                        secondaryMeasure={totalProfitPrevious}
                        filters={dateFilter ? [dateFilter] : []}
                    />
                </div>
                <div className={styles.KPI}>
                    <span className={styles.Title}>{timePeriodLabel} Returns</span>
                    <Headline
                        primaryMeasure={totalReturns}
                        secondaryMeasure={totalReturnsPrevious}
                        filters={dateFilter ? [dateFilter] : []}
                    />
                </div>
                <div className={styles.KPI}>
                    <span className={styles.Title}>{timePeriodLabel} Transactions</span>
                    <Headline
                        primaryMeasure={totalTransactions}
                        secondaryMeasure={totalTransactionsPrevious}
                        filters={dateFilter ? [dateFilter] : []}
                    />
                </div>
            </div>
            <div className={styles.Chart}>
                 <InsightView insight={Ldm.Insights.RevenueTrendByProductCategory} filters={dateFilter ? [dateFilter] : []}/>
            </div>
            <div className={styles.Table}>
                <InsightView insight={Ldm.Insights.MeasuresByProductCategoruy} filters={dateFilter ? [dateFilter] : []}/>
            </div>
        </div>
    );
};

export default DashboardMain;
