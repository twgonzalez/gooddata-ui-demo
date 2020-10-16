import React, { useState, useEffect } from "react";
import "./DashboardMain.css";
import styles from "./DashboardMain.module.scss";
import cx from "classnames";
import * as Ldm from "../../ldm/full";
import { newPreviousPeriodMeasure, newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { DateFilter, DateFilterHelpers, defaultDateFilterOptions } from "@gooddata/sdk-ui-filters";
import { Headline, AreaChart } from "@gooddata/sdk-ui-charts";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import DateRangeIcon from "@material-ui/icons/DateRange";
import DashboardBreadcrumbs from "./DashboardBreadcrumbs";
import "@gooddata/sdk-ui-filters/styles/css/main.css";

const DashboardMain = ({ dimensionItem }) => {
    // This is used to identifiy the data set we will use for all date filtering - better explanatoin ??
    const DATASET = "date.dataset.dt";
    const GRAIN_DAY = "GDC.time.date";
    const GRAIN_MONTH = "GDC.time.month";
    const GRAIN_QUARTER = "GDC.time.quarter";

    // We use this object to hold state on our filters for dimension selection and drill down.
    // We keep both of these in the same object so we don't trigger mutliple state updates to our child components
    // if they were kept in separate objects.
    const [filter, setFilter] = useState({ attributeFilter: null, dimension: dimensionItem.dimension });
    const [breadCrumbItems, setBreadCrumbItems] = useState([dimensionItem]);
    const [chartDateGrain, setChartDateGrain] = useState([Ldm.DateMonth.Short]);

    useEffect(() => {
        console.log("resetting dimension  to " + dimensionItem.dimension.attribute.displayForm.identifier);
        setBreadCrumbItems([dimensionItem]);
        setFilter({ attributeFilter: null, dimension: dimensionItem.dimension });
    }, [dimensionItem]);

    // We enumerate all of the measures we want to display in our headline components, as well as their corresponding previous
    // period measures.
    const totalSales = Ldm.TotalSales;
    const totalSalesPrevious = newPreviousPeriodMeasure(
        totalSales,
        [{ dataSet: DATASET, periodsAgo: 1 }],
        m => m.alias("Previous Period"),
    );

    const totalProfit = Ldm.TotalProfit;
    const totalProfitPrevious = newPreviousPeriodMeasure(
        totalProfit,
        [{ dataSet: DATASET, periodsAgo: 1 }],
        m => m.alias("Previous Period"),
    );

    const totalReturns = Ldm.TotalReturnAmount;
    const totalReturnsPrevious = newPreviousPeriodMeasure(
        totalReturns,
        [{ dataSet: DATASET, periodsAgo: 1 }],
        m => m.alias("Previous Period"),
    );

    const totalTransactions = Ldm.CountOfTransactions;
    const totalTransactionsPrevious = newPreviousPeriodMeasure(
        totalTransactions,
        [{ dataSet: DATASET, periodsAgo: 1 }],
        m => m.alias("Previous Period"),
    );

    const [selectedMeasure, setSelectedMeasure] = useState(totalSales);

    // We use these constants to set up our date filter
    const availableGranularities = ["GDC.time.date", "GDC.time.month", "GDC.time.quarter", "GDC.time.year"];
    const [dateFilterOptions, setDateFilterOptions] = useState(defaultDateFilterOptions.allTime);
    const [excludeCurrentPeriod, setExcludeCurrentPeriod] = useState(false);

    // When the user clicks on the date filter "apply" button we execute the following:
    const onApplyDateFilter = (dateFilterOption, excludeCurrentPeriod) => {
        let grain = Ldm.DateMonth.Short;
        if (
            (dateFilterOption.granularity === GRAIN_DAY && dateFilterOption.from > -32) ||
            (dateFilterOption.granularity === GRAIN_MONTH && dateFilterOption.from > -2)
        ) {
            grain = Ldm.DateDate.MmDdYyyy;
        } else if (
            (dateFilterOption.granularity === GRAIN_DAY && dateFilterOption.from > -180) ||
            (dateFilterOption.granularity === GRAIN_MONTH && dateFilterOption.from > -7) ||
            (dateFilterOption.granularity === GRAIN_QUARTER && dateFilterOption.from > -3)
        ) {
            grain = Ldm.DateWeekSunSatYear.WkQtrYear_1;
        }
        setChartDateGrain(grain);
        setDateFilterOptions(dateFilterOption);
        setExcludeCurrentPeriod(excludeCurrentPeriod);
    };

    // Our date filter that will be refernced by our headline components and charts.
    // Each time this filter is reset the UI will automatically refresh.
    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        dateFilterOptions,
        {
            identifier: DATASET,
        },
        excludeCurrentPeriod,
    );

    const changeMeasure = measure => {
        setSelectedMeasure(measure);
    };

    const handleChartDrill = drillEvent => {
        //Only allow drill down for product category or brand
        console.log("trying to drill");
        const drillDimension = drillEvent.drillContext.intersection[2].header;
        const newFilter = newPositiveAttributeFilter(filter.dimension, [
            drillDimension.attributeHeaderItem.name,
        ]);
        setFilter({ attributeFilter: newFilter, dimension: Ldm.ProductID.ProductName });
        setBreadCrumbItems([
            dimensionItem,
            { label: drillDimension.attributeHeaderItem.name, dimension: null, icon: null },
        ]);
    };

    const handleTableDrill = drillEvent => {
        //Only allow drill down for product category or brand
        const drillDimension = drillEvent.drillContext.intersection[1].header;
        const newFilter = newPositiveAttributeFilter(filter.dimension, [
            drillDimension.attributeHeaderItem.name,
        ]);
        setFilter({ attributeFilter: newFilter, dimension: Ldm.ProductID.ProductName });
        setBreadCrumbItems([
            dimensionItem,
            { label: drillDimension.attributeHeaderItem.name, dimension: null, icon: null },
        ]);
    };

    const isDrillable = () => {
        console.log("checking to see if we can drill");
        return (
            filter.dimension.attribute.localIdentifier === Ldm.ProductBrand.attribute.localIdentifier ||
            filter.dimension.attribute.localIdentifier === Ldm.ProductCategory.attribute.localIdentifier
        );
    };

    return (
        <div className={styles.DashboardMain}>
            <div className={styles.Filters}>
                <div className={styles.BreadcrumbGroup}>
                    <DashboardBreadcrumbs
                        breadCrumbItems={breadCrumbItems}
                        onClick={(item, index) => {
                            if (item.dimension) {
                                setBreadCrumbItems([item]);
                                setFilter({ attributeFilter: null, dimension: item.dimension });
                            }
                        }}
                        onDelete={(item, index) => {
                            setBreadCrumbItems([breadCrumbItems[0]]);
                            setFilter({ attributeFilter: null, dimension: breadCrumbItems[0].dimension });
                        }}
                    />
                </div>
                <div className={styles.DateFilterGroup}>
                    <div>
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
                    <div className={styles.DateIcon}>
                        <DateRangeIcon fontSize="large" />
                    </div>
                </div>
            </div>
            <div className={styles.KPIs}>
                <div
                    className={cx(styles.KPI, selectedMeasure === totalSales ? styles.Active : null)}
                    onClick={e => changeMeasure(totalSales)}
                >
                    <span className={styles.Title}>Total Sales</span>
                    <Headline
                        primaryMeasure={totalSales}
                        secondaryMeasure={totalSalesPrevious}
                        filters={[dateFilter, filter.attributeFilter]}
                    />
                </div>
                <div
                    className={cx(styles.KPI, selectedMeasure === totalProfit ? styles.Active : null)}
                    onClick={e => changeMeasure(totalProfit)}
                >
                    <span className={styles.Title}>Total Profit</span>
                    <Headline
                        primaryMeasure={totalProfit}
                        secondaryMeasure={totalProfitPrevious}
                        filters={[dateFilter, filter.attributeFilter]}
                    />
                </div>
                <div
                    className={cx(styles.KPI, selectedMeasure === totalReturns ? styles.Active : null)}
                    onClick={e => changeMeasure(totalReturns)}
                >
                    <span className={styles.Title}>Total Returns</span>
                    <Headline
                        primaryMeasure={totalReturns}
                        secondaryMeasure={totalReturnsPrevious}
                        filters={[dateFilter, filter.attributeFilter]}
                    />
                </div>
                <div
                    className={cx(styles.KPI, selectedMeasure === totalTransactions ? styles.Active : null)}
                    onClick={e => changeMeasure(totalTransactions)}
                >
                    <span className={styles.Title}>Total Transactions</span>
                    <Headline
                        primaryMeasure={totalTransactions}
                        secondaryMeasure={totalTransactionsPrevious}
                        filters={[dateFilter, filter.attributeFilter]}
                    />
                </div>
            </div>
            <div className={styles.Chart}>
                <AreaChart
                    measures={[selectedMeasure]}
                    viewBy={chartDateGrain}
                    stackBy={filter.dimension}
                    filters={[dateFilter, filter.attributeFilter]}
                    drillableItems={
                        isDrillable()
                            ? [HeaderPredicates.localIdentifierMatch(selectedMeasure.measure.localIdentifier)]
                            : []
                    }
                    onDrill={handleChartDrill}
                />
            </div>

            <div className={styles.Table}>
                <PivotTable
                    measures={[
                        Ldm.TotalSales,
                        Ldm.TotalProfit,
                        Ldm.TotalReturnAmount,
                        Ldm.CountOfTransactions,
                    ]}
                    rows={
                        filter.dimension === Ldm.UserCountry
                            ? [Ldm.UserCountry, Ldm.UserState]
                            : [filter.dimension]
                    }
                    config={{
                        columnSizing: {
                            defaultWidth: "viewport",
                            growToFit: true,
                        },
                    }}
                    filters={[dateFilter, filter.attributeFilter]}
                    drillableItems={
                        isDrillable()
                            ? [
                                  HeaderPredicates.localIdentifierMatch(totalSales.measure.localIdentifier),
                                  HeaderPredicates.localIdentifierMatch(totalProfit.measure.localIdentifier),
                                  HeaderPredicates.localIdentifierMatch(totalReturns.measure.localIdentifier),
                                  HeaderPredicates.localIdentifierMatch(
                                      totalTransactions.measure.localIdentifier,
                                  ),
                              ]
                            : []
                    }
                    onDrill={handleTableDrill}
                />
            </div>
        </div>
    );
};

export default DashboardMain;
