import React, { useState, useEffect } from "react";
import cx from "classnames";
import {
  newPreviousPeriodMeasure,
  newPositiveAttributeFilter,
  attributeIdentifier,
} from "@gooddata/sdk-model";
import {
  DateFilter,
  DateFilterHelpers,
  defaultDateFilterOptions,
} from "@gooddata/sdk-ui-filters";
import { Headline } from "@gooddata/sdk-ui-charts";
import DashboardAreaChart from "./DashboardAreaChart";
import DashboardDataTable from "./DashboardDataTable";
import DateRangeIcon from "@material-ui/icons/DateRange";

import DashboardBreadcrumbs from "./DashboardBreadcrumbs";
import * as Ldm from "../../ldm/full";
import styles from "./DashboardMain.module.scss";

const DashboardMain = ({ dimensionItem }) => {
  // This is used to identifiy the data set we will use for all date filtering - better explanatoin ??
  const DATASET = Ldm.DateDatasets.Date.identifier;
  const GRAIN_DAY = "GDC.time.date";
  const GRAIN_MONTH = "GDC.time.month";
  const GRAIN_QUARTER = "GDC.time.quarter";

  // We use this object to hold state on our filters for dimension selection and drill down.
  // We keep both of these in the same object so we don't trigger mutliple state updates to our child components
  // if they were kept in separate objects.
  const [attributeFilter, setAttributeFilter] = useState(null);
  const [dimension, setDimension] = useState(dimensionItem.attribute);
  const [breadCrumbItems, setBreadCrumbItems] = useState([dimensionItem]);
  const [chartDateGrain, setChartDateGrain] = useState(
    Ldm.DateDatasets.Date.Month.Short
  );

  useEffect(() => {
    setBreadCrumbItems([dimensionItem]);
    setAttributeFilter(null);
    setDimension(dimensionItem.attribute);
  }, [dimensionItem]);

  // We enumerate all of the measures we want to display in our headline components, as well as their corresponding previous
  // period measures.
  const revenue = Ldm.Revenue;
  const revenuePrevious = newPreviousPeriodMeasure(
    revenue,
    [{ dataSet: DATASET, periodsAgo: 1 }],
    (m) => m.alias("Previous Period")
  );

  const orders = Ldm.NrOfValidOrders;
  const ordersPrevious = newPreviousPeriodMeasure(
    orders,
    [{ dataSet: DATASET, periodsAgo: 1 }],
    (m) => m.alias("Previous Period")
  );

  const returnRevenue = Ldm.RevenueReturns;
  const returnRevenuePrevious = newPreviousPeriodMeasure(
    returnRevenue,
    [{ dataSet: DATASET, periodsAgo: 1 }],
    (m) => m.alias("Previous Period")
  );

  const returns = Ldm.NrOrdersReturns;
  const returnsPrevious = newPreviousPeriodMeasure(
    returns,
    [{ dataSet: DATASET, periodsAgo: 1 }],
    (m) => m.alias("Previous Period")
  );
  const [selectedMeasure, setSelectedMeasure] = useState(revenue);

  // We use these constants to set up our date filter
  //   const availableGranularities = ["GDC.time.date", "GDC.time.month", "GDC.time.quarter", "GDC.time.year"];
  const [dateFilterOption, setDateFilterOption] = useState(
    defaultDateFilterOptions.allTime
  );
  const [excludeCurrentPeriod, setExcludeCurrentPeriod] = useState(false);

  // When the user clicks on the date filter "apply" button we execute the following:
  const onApplyDateFilter = (newDateFilterOption, newExcludeCurrentPeriod) => {
    let newChartDateGrain = Ldm.DateDatasets.Date.Month.Short;
    if (
      (newDateFilterOption.granularity === GRAIN_DAY &&
        newDateFilterOption.from > -32) ||
      (newDateFilterOption.granularity === GRAIN_MONTH &&
        newDateFilterOption.from > -2)
    ) {
      newChartDateGrain = Ldm.DateDatasets.Date.Date.MmDdYyyy;
    } else if (
      (newDateFilterOption.granularity === GRAIN_DAY &&
        newDateFilterOption.from > -180) ||
      (newDateFilterOption.granularity === GRAIN_MONTH &&
        newDateFilterOption.from > -7) ||
      (newDateFilterOption.granularity === GRAIN_QUARTER &&
        newDateFilterOption.from > -3)
    ) {
      newChartDateGrain = Ldm.DateDatasets.Date.WeekSunSatYear.WkQtrYear_1;
    }

    setChartDateGrain(newChartDateGrain);
    setDateFilterOption(newDateFilterOption);
    setExcludeCurrentPeriod(newExcludeCurrentPeriod);
  };

  // Our date filter that will be referenced by our headline components and charts.
  // Each time this filter is reset the UI will automatically refresh.
  const dateFilter = DateFilterHelpers.mapOptionToAfm(
    dateFilterOption,
    {
      identifier: DATASET,
    },
    excludeCurrentPeriod
  );

  const handleDrillDown = (drillDimensionName) => {
    // Create a new dimension grain based on current active dimension
    // (Product Category -> Product Id)
    // (Customer Region -> Customer State)
    const newDimension =
      dimensionItem.attribute === Ldm.ProductCategory
        ? Ldm.Product.Default
        : Ldm.CustomerState;

    // Create filter based on drill dimension name
    const newFilter = newPositiveAttributeFilter(dimension, [
      drillDimensionName,
    ]);

    setAttributeFilter(newFilter);
    setDimension(newDimension);
    setBreadCrumbItems([
      dimensionItem,
      { label: drillDimensionName, dimension: null, icon: null },
    ]);
  };

  const isDrillable = () => {
    // Only one level deep is drillable here, this returns false
    // if drill is curently already applied

    return (
      attributeIdentifier(dimension) ===
        attributeIdentifier(Ldm.ProductCategory) ||
      attributeIdentifier(dimension) === attributeIdentifier(Ldm.CustomerRegion)
    );
  };

  const removeBreadCrumbChildren = (parentIndex) => {
    if (parentIndex === breadCrumbItems.length - 1) return;

    breadCrumbItems.splice(
      parentIndex + 1,
      breadCrumbItems.length - parentIndex
    );

    setAttributeFilter(null);
    setDimension(breadCrumbItems[parentIndex].attribute);
    setBreadCrumbItems(breadCrumbItems);
  };

  const handleRowClick = (row, index) => {
    console.log(row, index);
    if (isDrillable() === true) {
      handleDrillDown(row[0]);
    }
  };

  return (
    <div className={styles.DashboardMain}>
      <div className={styles.Filters}>
        <div className={styles.BreadcrumbGroup}>
          <DashboardBreadcrumbs
            breadCrumbItems={breadCrumbItems}
            onClick={(index) => {
              removeBreadCrumbChildren(index);
            }}
            onDelete={(index) => {
              removeBreadCrumbChildren(index - 1);
            }}
          />
        </div>
        <div className={styles.DateFilterGroup}>
          <div className={styles.DateIcon}>
            <DateRangeIcon fontSize="large" />
          </div>
          <div>
            <DateFilter
              excludeCurrentPeriod={excludeCurrentPeriod}
              selectedFilterOption={dateFilterOption}
              filterOptions={defaultDateFilterOptions}
              customFilterName="Select a Date Range"
              dateFilterMode="active"
              onApply={onApplyDateFilter}
            />
          </div>
        </div>
      </div>

      <div className={styles.KPIs}>
        <div
          className={cx(styles.KPI, {
            [styles.Active]: selectedMeasure === revenue,
          })}
          onClick={() => setSelectedMeasure(revenue)}
        >
          <span className={styles.Title}>Revenue</span>
          <Headline
            primaryMeasure={revenue}
            secondaryMeasure={revenuePrevious}
            filters={dateFilter ? [dateFilter] : []}
          />
        </div>
        <div
          className={cx(styles.KPI, {
            [styles.Active]: selectedMeasure === orders,
          })}
          onClick={() => setSelectedMeasure(orders)}
        >
          <span className={styles.Title}>Orders</span>
          <Headline
            primaryMeasure={orders}
            secondaryMeasure={ordersPrevious}
            filters={dateFilter ? [dateFilter] : []}
          />
        </div>
        <div
          className={cx(styles.KPI, {
            [styles.Active]: selectedMeasure === returnRevenue,
          })}
          onClick={() => setSelectedMeasure(returnRevenue)}
        >
          <span className={styles.Title}>Return Amount</span>
          <Headline
            primaryMeasure={returnRevenue}
            secondaryMeasure={returnRevenuePrevious}
            filters={dateFilter ? [dateFilter] : []}
          />
        </div>
        <div
          className={cx(styles.KPI, {
            [styles.Active]: selectedMeasure === returns,
          })}
          onClick={() => setSelectedMeasure(returns)}
        >
          <span className={styles.Title}>Returns</span>
          <Headline
            primaryMeasure={returns}
            secondaryMeasure={returnsPrevious}
            filters={dateFilter ? [dateFilter] : []}
          />
        </div>
      </div>
      <div className={styles.Chart}>
        <DashboardAreaChart
          measure={selectedMeasure}
          viewBy={chartDateGrain}
          stackBy={
            dimension === Ldm.Product.Default
              ? Ldm.ProductCategory
              : dimension === Ldm.CustomerState
              ? Ldm.CustomerRegion
              : dimension
          }
          filters={[dateFilter, attributeFilter]}
        />
      </div>
      <div className={styles.Table}>
        <DashboardDataTable
          measures={[
            Ldm.Revenue,
            Ldm.NrOfValidOrders,
            Ldm.RevenueReturns,
            Ldm.NrOrdersReturns,
          ]}
          filters={[dateFilter, attributeFilter]}
          dimensions={
            dimension === Ldm.Product.Default
              ? [Ldm.ProductCategory, Ldm.Product.Default]
              : dimension === Ldm.CustomerState
              ? [Ldm.CustomerRegion, Ldm.CustomerState]
              : [dimension]
          }
          handleRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default DashboardMain;
