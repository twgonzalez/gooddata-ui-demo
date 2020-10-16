/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2020-11-13T21:58:08.906Z; */
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Order ID
 * Display Form ID: attr.order.orderid
 */

export const OrderID = newAttribute("label.order.orderid");
/**
 * Attribute Title: Product Brand
 * Display Form ID: attr.product.productbrand
 */

export const ProductBrand = newAttribute("label.product.productbrand");
/**
 * Attribute Title: Product Category
 * Display Form ID: attr.product.productcategory
 */

export const ProductCategory = newAttribute("label.product.productcategory");
export const ProductID = {
  /**
   * Display Form Title: Product Name
   * Display Form ID: label.product.productid.productname
   */
  ProductName: newAttribute("label.product.productid.productname")
  /**
   * Display Form Title: Product ID
   * Display Form ID: label.product.productid
   */
  ,
  Default: newAttribute("label.product.productid")
  /**
   * Display Form Title: Product Image Web
   * Display Form ID: label.product.productid.productimageweb
   */
  ,
  ProductImageWeb: newAttribute("label.product.productid.productimageweb")
};
export const ProductImage = {
  /**
   * Display Form Title: Product Image
   * Display Form ID: label.product.productimage
   */
  Default: newAttribute("label.product.productimage")
  /**
   * Display Form Title: Product Image Web
   * Display Form ID: label.product.productimage.productimageweb
   */
  ,
  Web: newAttribute("label.product.productimage.productimageweb")
};
export const UserCity = {
  /**
   * Display Form Title: User City
   * Display Form ID: label.user.usercity
   */
  Default: newAttribute("label.user.usercity")
  /**
   * Display Form Title: City Pushpin
   * Display Form ID: label.user.usercity.citypushpin
   */
  ,
  CityPushpin: newAttribute("label.user.usercity.citypushpin")
};
/**
 * Attribute Title: User Country
 * Display Form ID: attr.user.usercountry
 */

export const UserCountry = newAttribute("label.user.usercountry");
/**
 * Attribute Title: User Email
 * Display Form ID: attr.user.useremail
 */

export const UserEmail = newAttribute("label.user.useremail");
export const UserID = {
  /**
   * Display Form Title: User ID
   * Display Form ID: label.user.userid
   */
  Default: newAttribute("label.user.userid")
  /**
   * Display Form Title: User Name
   * Display Form ID: label.user.userid.username
   */
  ,
  UserName: newAttribute("label.user.userid.username")
};
/**
 * Attribute Title: User State
 * Display Form ID: attr.user.userstate
 */

export const UserState = newAttribute("label.user.userstate");
/**
 * Metric Title: % Avg Price from Previous Month
 * Metric ID: aaUPyQwUgKFZ
 * Metric Type: MAQL Metric
 */

export const PercentAvgPriceFromPreviousMonth = newMeasure(idRef("aaUPyQwUgKFZ", "measure"));
/**
 * Metric Title: % Change in % of Total Sales
 * Metric ID: abOUb05gdIUh
 * Metric Type: MAQL Metric
 */

export const PercentChangeInPercentOfTotalSales = newMeasure(idRef("abOUb05gdIUh", "measure"));
/**
 * Metric Title: % of Total Sales
 * Metric ID: aaZUbXJqhyZm
 * Metric Type: MAQL Metric
 */

export const PercentOfTotalSales = newMeasure(idRef("aaZUbXJqhyZm", "measure"));
/**
 * Metric Title: % Sell Through
 * Metric ID: aa7PGzxgaxC0
 * Metric Type: MAQL Metric
 */

export const PercentSellThrough = newMeasure(idRef("aa7PGzxgaxC0", "measure"));
/**
 * Metric Title: % Sell Through Month Diff
 * Metric ID: aaQPKWDlg9dO
 * Metric Type: MAQL Metric
 */

export const PercentSellThroughMonthDiff = newMeasure(idRef("aaQPKWDlg9dO", "measure"));
/**
 * Metric Title: % Total Listings from Previous Month
 * Metric ID: abwPweOfcrIu
 * Metric Type: MAQL Metric
 */

export const PercentTotalListingsFromPreviousMonth = newMeasure(idRef("abwPweOfcrIu", "measure"));
/**
 * Metric Title: % Total Sales from Previous Month
 * Metric ID: aaoPOljQfRt1
 * Metric Type: MAQL Metric
 */

export const PercentTotalSalesFromPreviousMonth = newMeasure(idRef("aaoPOljQfRt1", "measure"));
/**
 * Metric Title: Average Page Views
 * Metric ID: aaSdqzqHdNL8
 * Metric Type: MAQL Metric
 */

export const AveragePageViews = newMeasure(idRef("aaSdqzqHdNL8", "measure"));
/**
 * Metric Title: Average Price of Products
 * Metric ID: aaNPryEKcKLb
 * Metric Type: MAQL Metric
 */

export const AveragePriceOfProducts = newMeasure(idRef("aaNPryEKcKLb", "measure"));
/**
 * Metric Title: Average Price of Products Previous Period
 * Metric ID: aaiPyXeOawRK
 * Metric Type: MAQL Metric
 */

export const AveragePriceOfProductsPreviousPeriod = newMeasure(idRef("aaiPyXeOawRK", "measure"));
/**
 * Metric Title: Average Sales
 * Metric ID: acCpoTR6dN1J
 * Metric Type: MAQL Metric
 */

export const AverageSales = newMeasure(idRef("acCpoTR6dN1J", "measure"));
/**
 * Metric Title: Average Total Sales
 * Metric ID: aavQbUM0dxrm
 * Metric Type: MAQL Metric
 */

export const AverageTotalSales = newMeasure(idRef("aavQbUM0dxrm", "measure"));
/**
 * Metric Title: Avg Monthly Number of Returns
 * Metric ID: aa2ptW2Qc47e
 * Metric Type: MAQL Metric
 */

export const AvgMonthlyNumberOfReturns = newMeasure(idRef("aa2ptW2Qc47e", "measure"));
/**
 * Metric Title: Avg Monthly Number of Sales
 * Metric ID: abGpmw9TgxRI
 * Metric Type: MAQL Metric
 */

export const AvgMonthlyNumberOfSales = newMeasure(idRef("abGpmw9TgxRI", "measure"));
/**
 * Metric Title: Avg Product Price
 * Metric ID: ab3T7Y3bbwTk
 * Metric Type: MAQL Metric
 */

export const AvgProductPrice = newMeasure(idRef("ab3T7Y3bbwTk", "measure"));
/**
 * Metric Title: Bottom 5 Total Profit
 * Metric ID: acnP0soefj8Y
 * Metric Type: MAQL Metric
 */

export const Bottom5TotalProfit = newMeasure(idRef("acnP0soefj8Y", "measure"));
/**
 * Metric Title: Count of Returns
 * Metric ID: aa6MSIgDfUni
 * Metric Type: MAQL Metric
 */

export const CountOfReturns = newMeasure(idRef("aa6MSIgDfUni", "measure"));
/**
 * Metric Title: Count of Transactions
 * Metric ID: acYMJ2AhinNS
 * Metric Type: MAQL Metric
 */

export const CountOfTransactions = newMeasure(idRef("acYMJ2AhinNS", "measure"));
/**
 * Metric Title: Max Page Views
 * Metric ID: adcdjeiyii9R
 * Metric Type: MAQL Metric
 */

export const MaxPageViews = newMeasure(idRef("adcdjeiyii9R", "measure"));
/**
 * Metric Title: Median Page Views
 * Metric ID: acwdlnwEfO9V
 * Metric Type: MAQL Metric
 */

export const MedianPageViews = newMeasure(idRef("acwdlnwEfO9V", "measure"));
/**
 * Metric Title: Monthly Avg Profit Margin
 * Metric ID: abwomkbyhbkl
 * Metric Type: MAQL Metric
 */

export const MonthlyAvgProfitMargin = newMeasure(idRef("abwomkbyhbkl", "measure"));
/**
 * Metric Title: Number of Reviews [Sum]
 * Metric ID: ablK1TkPfaL2
 * Metric Type: MAQL Metric
 */

export const NumberOfReviewsSum = newMeasure(idRef("ablK1TkPfaL2", "measure"));
/**
 * Metric Title: Page Views
 * Metric ID: aaOK3ZBZfZWn
 * Metric Type: MAQL Metric
 */

export const PageViews = newMeasure(idRef("aaOK3ZBZfZWn", "measure"));
/**
 * Metric Title: Previous Count of Total Sales
 * Metric ID: adkdb5Grb0oS
 * Metric Type: MAQL Metric
 */

export const PreviousCountOfTotalSales = newMeasure(idRef("adkdb5Grb0oS", "measure"));
/**
 * Metric Title: Previous Total Sales
 * Metric ID: aaJdarAugXXz
 * Metric Type: MAQL Metric
 */

export const PreviousTotalSales = newMeasure(idRef("aaJdarAugXXz", "measure"));
/**
 * Metric Title: Product Cost [Sum]
 * Metric ID: abvKZ0MsdG1e
 * Metric Type: MAQL Metric
 */

export const ProductCostSum = newMeasure(idRef("abvKZ0MsdG1e", "measure"));
/**
 * Metric Title: Product List Price [Sum]
 * Metric ID: aaDK3HhOhGFm
 * Metric Type: MAQL Metric
 */

export const ProductListPriceSum = newMeasure(idRef("aaDK3HhOhGFm", "measure"));
/**
 * Metric Title: Profit Margin
 * Metric ID: aaLt2D6rcZ0a
 * Metric Type: MAQL Metric
 */

export const ProfitMargin = newMeasure(idRef("aaLt2D6rcZ0a", "measure"));
/**
 * Metric Title: Rating [Sum]
 * Metric ID: aaLK3IBUfJ07
 * Metric Type: MAQL Metric
 */

export const RatingSum = newMeasure(idRef("aaLK3IBUfJ07", "measure"));
/**
 * Metric Title: Top 15 Sales
 * Metric ID: ab8qayPThvKU
 * Metric Type: MAQL Metric
 */

export const Top15Sales = newMeasure(idRef("ab8qayPThvKU", "measure"));
/**
 * Metric Title: Top 5 Total Profit
 * Metric ID: abpP45KneRMq
 * Metric Type: MAQL Metric
 */

export const Top5TotalProfit = newMeasure(idRef("abpP45KneRMq", "measure"));
/**
 * Metric Title: Total Expenses
 * Metric ID: abhuo5I1iaWD
 * Metric Type: MAQL Metric
 */

export const TotalExpenses = newMeasure(idRef("abhuo5I1iaWD", "measure"));
/**
 * Metric Title: Total Listings
 * Metric ID: abfPAwptdA3s
 * Metric Type: MAQL Metric
 */

export const TotalListings = newMeasure(idRef("abfPAwptdA3s", "measure"));
/**
 * Metric Title: Total Listings Previous Month
 * Metric ID: aaTPBd05fp3Y
 * Metric Type: MAQL Metric
 */

export const TotalListingsPreviousMonth = newMeasure(idRef("aaTPBd05fp3Y", "measure"));
/**
 * Metric Title: Total Order Amount
 * Metric ID: aawMUtsmhYul
 * Metric Type: MAQL Metric
 */

export const TotalOrderAmount = newMeasure(idRef("aawMUtsmhYul", "measure"));
/**
 * Metric Title: Total Order Cost
 * Metric ID: aaqP7AtPfmRM
 * Metric Type: MAQL Metric
 */

export const TotalOrderCost = newMeasure(idRef("aaqP7AtPfmRM", "measure"));
/**
 * Metric Title: Total Order Savings
 * Metric ID: acCMNnv0amdA
 * Metric Type: MAQL Metric
 */

export const TotalOrderSavings = newMeasure(idRef("acCMNnv0amdA", "measure"));
/**
 * Metric Title: Total Profit
 * Metric ID: aaWP28vUgl64
 * Metric Type: MAQL Metric
 */

export const TotalProfit = newMeasure(idRef("aaWP28vUgl64", "measure"));
/**
 * Metric Title: Total Profit Previous Month
 * Metric ID: abR94YhLd4KR
 * Metric Type: MAQL Metric
 */

export const TotalProfitPreviousMonth = newMeasure(idRef("abR94YhLd4KR", "measure"));
/**
 * Metric Title: Total Profit Return
 * Metric ID: aa6GfC3ThMRs
 * Metric Type: MAQL Metric
 */

export const TotalProfitReturn = newMeasure(idRef("aa6GfC3ThMRs", "measure"));
/**
 * Metric Title: Total Profit Sale
 * Metric ID: aazGitv6aEPX
 * Metric Type: MAQL Metric
 */

export const TotalProfitSale = newMeasure(idRef("aazGitv6aEPX", "measure"));
/**
 * Metric Title: Total Return Amount
 * Metric ID: acgMPhyEgo3S
 * Metric Type: MAQL Metric
 */

export const TotalReturnAmount = newMeasure(idRef("acgMPhyEgo3S", "measure"));
/**
 * Metric Title: Total Revenue
 * Metric ID: acmumKP2fM24
 * Metric Type: MAQL Metric
 */

export const TotalRevenue = newMeasure(idRef("acmumKP2fM24", "measure"));
/**
 * Metric Title: Total Sales
 * Metric ID: acLML1wlaBzT
 * Metric Type: MAQL Metric
 */

export const TotalSales = newMeasure(idRef("acLML1wlaBzT", "measure"));
/**
 * Metric Title: Total Sales Previous Month
 * Metric ID: aaHPNQHndWzw
 * Metric Type: MAQL Metric
 */

export const TotalSalesPreviousMonth = newMeasure(idRef("aaHPNQHndWzw", "measure"));
/**
 * Fact Title: Monthly Inventory Quantity
 * Fact ID: fact.monthlyinventory.monthlyquantity
 */

export const MonthlyInventoryQuantity = {
  /**
   * Fact Title: Monthly Inventory Quantity
   * Fact ID: fact.monthlyinventory.monthlyquantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Monthly Inventory Quantity
   * Fact ID: fact.monthlyinventory.monthlyquantity
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Monthly Inventory Quantity
   * Fact ID: fact.monthlyinventory.monthlyquantity
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Monthly Inventory Quantity
   * Fact ID: fact.monthlyinventory.monthlyquantity
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Monthly Inventory Quantity
   * Fact ID: fact.monthlyinventory.monthlyquantity
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Monthly Inventory Quantity
   * Fact ID: fact.monthlyinventory.monthlyquantity
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Monthly Inventory Quantity
   * Fact ID: fact.monthlyinventory.monthlyquantity
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Number of Page Views
 * Fact ID: fact.product.numberofpageviews
 */

export const NumberOfPageViews = {
  /**
   * Fact Title: Number of Page Views
   * Fact ID: fact.product.numberofpageviews
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.product.numberofpageviews", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Number of Page Views
   * Fact ID: fact.product.numberofpageviews
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.product.numberofpageviews", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Number of Page Views
   * Fact ID: fact.product.numberofpageviews
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.product.numberofpageviews", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Number of Page Views
   * Fact ID: fact.product.numberofpageviews
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.product.numberofpageviews", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Number of Page Views
   * Fact ID: fact.product.numberofpageviews
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.product.numberofpageviews", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Number of Page Views
   * Fact ID: fact.product.numberofpageviews
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.product.numberofpageviews", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Number of Page Views
   * Fact ID: fact.product.numberofpageviews
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.product.numberofpageviews", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Number of Reviews
 * Fact ID: fact.product.numberofreviews
 */

export const NumberOfReviews = {
  /**
   * Fact Title: Number of Reviews
   * Fact ID: fact.product.numberofreviews
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.product.numberofreviews", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Number of Reviews
   * Fact ID: fact.product.numberofreviews
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.product.numberofreviews", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Number of Reviews
   * Fact ID: fact.product.numberofreviews
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.product.numberofreviews", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Number of Reviews
   * Fact ID: fact.product.numberofreviews
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.product.numberofreviews", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Number of Reviews
   * Fact ID: fact.product.numberofreviews
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.product.numberofreviews", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Number of Reviews
   * Fact ID: fact.product.numberofreviews
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.product.numberofreviews", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Number of Reviews
   * Fact ID: fact.product.numberofreviews
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.product.numberofreviews", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Order Unit Price
 * Fact ID: fact.transactions.orderunitprice
 */

export const OrderUnitPrice = {
  /**
   * Fact Title: Order Unit Price
   * Fact ID: fact.transactions.orderunitprice
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Order Unit Price
   * Fact ID: fact.transactions.orderunitprice
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Order Unit Price
   * Fact ID: fact.transactions.orderunitprice
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Order Unit Price
   * Fact ID: fact.transactions.orderunitprice
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Order Unit Price
   * Fact ID: fact.transactions.orderunitprice
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Order Unit Price
   * Fact ID: fact.transactions.orderunitprice
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Order Unit Price
   * Fact ID: fact.transactions.orderunitprice
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Order Unit Quantity
 * Fact ID: fact.transactions.orderunitquantity
 */

export const OrderUnitQuantity = {
  /**
   * Fact Title: Order Unit Quantity
   * Fact ID: fact.transactions.orderunitquantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Order Unit Quantity
   * Fact ID: fact.transactions.orderunitquantity
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Order Unit Quantity
   * Fact ID: fact.transactions.orderunitquantity
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Order Unit Quantity
   * Fact ID: fact.transactions.orderunitquantity
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Order Unit Quantity
   * Fact ID: fact.transactions.orderunitquantity
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Order Unit Quantity
   * Fact ID: fact.transactions.orderunitquantity
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Order Unit Quantity
   * Fact ID: fact.transactions.orderunitquantity
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Product Cost
 * Fact ID: fact.product.productcost
 */

export const ProductCost = {
  /**
   * Fact Title: Product Cost
   * Fact ID: fact.product.productcost
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.product.productcost", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Product Cost
   * Fact ID: fact.product.productcost
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.product.productcost", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Product Cost
   * Fact ID: fact.product.productcost
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.product.productcost", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Product Cost
   * Fact ID: fact.product.productcost
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.product.productcost", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Product Cost
   * Fact ID: fact.product.productcost
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.product.productcost", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Product Cost
   * Fact ID: fact.product.productcost
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.product.productcost", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Product Cost
   * Fact ID: fact.product.productcost
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.product.productcost", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Product List Price
 * Fact ID: fact.product.productlistprice
 */

export const ProductListPrice = {
  /**
   * Fact Title: Product List Price
   * Fact ID: fact.product.productlistprice
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.product.productlistprice", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Product List Price
   * Fact ID: fact.product.productlistprice
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.product.productlistprice", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Product List Price
   * Fact ID: fact.product.productlistprice
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.product.productlistprice", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Product List Price
   * Fact ID: fact.product.productlistprice
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.product.productlistprice", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Product List Price
   * Fact ID: fact.product.productlistprice
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.product.productlistprice", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Product List Price
   * Fact ID: fact.product.productlistprice
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.product.productlistprice", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Product List Price
   * Fact ID: fact.product.productlistprice
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.product.productlistprice", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Rating
 * Fact ID: fact.product.rating
 */

export const Rating = {
  /**
   * Fact Title: Rating
   * Fact ID: fact.product.rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.product.rating", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Rating
   * Fact ID: fact.product.rating
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.product.rating", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Rating
   * Fact ID: fact.product.rating
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.product.rating", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Rating
   * Fact ID: fact.product.rating
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.product.rating", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Rating
   * Fact ID: fact.product.rating
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.product.rating", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Rating
   * Fact ID: fact.product.rating
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.product.rating", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Rating
   * Fact ID: fact.product.rating
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.product.rating", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Return Unit Price
 * Fact ID: fact.returns.returnunitprice
 */

export const ReturnUnitPrice = {
  /**
   * Fact Title: Return Unit Price
   * Fact ID: fact.returns.returnunitprice
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.returns.returnunitprice", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Return Unit Price
   * Fact ID: fact.returns.returnunitprice
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.returns.returnunitprice", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Return Unit Price
   * Fact ID: fact.returns.returnunitprice
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.returns.returnunitprice", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Return Unit Price
   * Fact ID: fact.returns.returnunitprice
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.returns.returnunitprice", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Return Unit Price
   * Fact ID: fact.returns.returnunitprice
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.returns.returnunitprice", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Return Unit Price
   * Fact ID: fact.returns.returnunitprice
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.returns.returnunitprice", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Return Unit Price
   * Fact ID: fact.returns.returnunitprice
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.returns.returnunitprice", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Return Unit Quantity
 * Fact ID: fact.returns.returnunitquantity
 */

export const ReturnUnitQuantity = {
  /**
   * Fact Title: Return Unit Quantity
   * Fact ID: fact.returns.returnunitquantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Return Unit Quantity
   * Fact ID: fact.returns.returnunitquantity
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Return Unit Quantity
   * Fact ID: fact.returns.returnunitquantity
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Return Unit Quantity
   * Fact ID: fact.returns.returnunitquantity
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Return Unit Quantity
   * Fact ID: fact.returns.returnunitquantity
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Return Unit Quantity
   * Fact ID: fact.returns.returnunitquantity
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Return Unit Quantity
   * Fact ID: fact.returns.returnunitquantity
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), m => m.aggregation("runsum"))
};
/**
 * Attribute Title: Year (Order Date)
 * Display Form ID: orderdate.year
 */

export const OrderDateYear = newAttribute("orderdate.year.default");
/**
 * Attribute Title: Quarter (Order Date)
 * Display Form ID: orderdate.quarter.in.year
 */

export const OrderDateQuarter = newAttribute("orderdate.quarter.in.year.default");
export const OrderDateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Order Date)
   * Display Form ID: orderdate.week.wk_year
   */
  WeekNrYear: newAttribute("orderdate.week.wk_year")
  /**
   * Display Form Title: Week Starting (Order Date)
   * Display Form ID: orderdate.week.starting
   */
  ,
  WeekStarting: newAttribute("orderdate.week.starting")
  /**
   * Display Form Title: From - To (Order Date)
   * Display Form ID: orderdate.week.from_to
   */
  ,
  FromTo: newAttribute("orderdate.week.from_to")
  /**
   * Display Form Title: Week #/Year (Cont.) (Order Date)
   * Display Form ID: orderdate.week.wk_year_cont
   */
  ,
  WeekNrYear_1: newAttribute("orderdate.week.wk_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Order Date)
   * Display Form ID: orderdate.week.wk_qtr_year_cont
   */
  ,
  WkQtrYear: newAttribute("orderdate.week.wk_qtr_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Order Date)
   * Display Form ID: orderdate.week.wk_qtr_year
   */
  ,
  WkQtrYear_1: newAttribute("orderdate.week.wk_qtr_year")
};
/**
 * Attribute Title: Week (Sun-Sat) (Order Date)
 * Display Form ID: orderdate.week.in.year
 */

export const OrderDateWeekSunSat = newAttribute("orderdate.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Order Date)
 * Display Form ID: orderdate.week.in.quarter
 */

export const OrderDateWeekSunSatOfQtr = newAttribute("orderdate.week.in.quarter.number_us");
export const OrderDateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Order Date)
   * Display Form ID: orderdate.euweek.wk_year
   */
  WeekNrYear: newAttribute("orderdate.euweek.wk_year")
  /**
   * Display Form Title: Week Starting (Order Date)
   * Display Form ID: orderdate.euweek.starting
   */
  ,
  WeekStarting: newAttribute("orderdate.euweek.starting")
  /**
   * Display Form Title: From - To (Order Date)
   * Display Form ID: orderdate.euweek.from_to
   */
  ,
  FromTo: newAttribute("orderdate.euweek.from_to")
};
/**
 * Attribute Title: Week (Mon-Sun) (Order Date)
 * Display Form ID: orderdate.euweek.in.year
 */

export const OrderDateWeekMonSun = newAttribute("orderdate.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Order Date)
 * Display Form ID: orderdate.euweek.in.quarter
 */

export const OrderDateWeekMonSunOfQtr = newAttribute("orderdate.euweek.in.quarter.number_eu");
export const OrderDateMonth = {
  /**
   * Display Form Title: Short (Jan) (Order Date)
   * Display Form ID: orderdate.month.in.year.short
   */
  Short: newAttribute("orderdate.month.in.year.short")
  /**
   * Display Form Title: Long (January) (Order Date)
   * Display Form ID: orderdate.month.in.year.long
   */
  ,
  Long: newAttribute("orderdate.month.in.year.long")
  /**
   * Display Form Title: Number (M1) (Order Date)
   * Display Form ID: orderdate.month.in.year.number
   */
  ,
  Number: newAttribute("orderdate.month.in.year.number")
  /**
   * Display Form Title: M/Q (M1/Q1) (Order Date)
   * Display Form ID: orderdate.month.in.year.m_q
   */
  ,
  MQ: newAttribute("orderdate.month.in.year.m_q")
};
/**
 * Attribute Title: Month of Quarter (Order Date)
 * Display Form ID: orderdate.month.in.quarter
 */

export const OrderDateMonthOfQuarter = newAttribute("orderdate.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Order Date)
 * Display Form ID: orderdate.day.in.year
 */

export const OrderDateDayOfYear = newAttribute("orderdate.day.in.year.default");
export const OrderDateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Order Date)
   * Display Form ID: orderdate.day.in.week.short
   */
  Short: newAttribute("orderdate.day.in.week.short")
  /**
   * Display Form Title: Long (Sunday) (Order Date)
   * Display Form ID: orderdate.day.in.week.long
   */
  ,
  Long: newAttribute("orderdate.day.in.week.long")
  /**
   * Display Form Title: Number (1=Sunday) (Order Date)
   * Display Form ID: orderdate.day.in.week.number
   */
  ,
  Number: newAttribute("orderdate.day.in.week.number")
};
export const OrderDateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Order Date)
   * Display Form ID: orderdate.day.in.euweek.short
   */
  Short: newAttribute("orderdate.day.in.euweek.short")
  /**
   * Display Form Title: Long (Monday) (Order Date)
   * Display Form ID: orderdate.day.in.euweek.long
   */
  ,
  Long: newAttribute("orderdate.day.in.euweek.long")
  /**
   * Display Form Title: Number (1=Monday) (Order Date)
   * Display Form ID: orderdate.day.in.euweek.number
   */
  ,
  Number: newAttribute("orderdate.day.in.euweek.number")
};
/**
 * Attribute Title: Day of Quarter (Order Date)
 * Display Form ID: orderdate.day.in.quarter
 */

export const OrderDateDayOfQuarter = newAttribute("orderdate.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Order Date)
 * Display Form ID: orderdate.day.in.month
 */

export const OrderDateDayOfMonth = newAttribute("orderdate.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Order Date)
 * Display Form ID: orderdate.quarter
 */

export const OrderDateQuarterYear = newAttribute("orderdate.quarter.short_us");
export const OrderDateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Order Date)
   * Display Form ID: orderdate.month.short
   */
  Short: newAttribute("orderdate.month.short")
  /**
   * Display Form Title: Long (January 2010) (Order Date)
   * Display Form ID: orderdate.month.long
   */
  ,
  Long: newAttribute("orderdate.month.long")
  /**
   * Display Form Title: Number (1/2010) (Order Date)
   * Display Form ID: orderdate.month.number
   */
  ,
  Number: newAttribute("orderdate.month.number")
};
export const OrderDateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Order Date)
   * Display Form ID: orderdate.date.day.us.mm_dd_yyyy
   */
  MmDdYyyy: newAttribute("orderdate.date.day.us.mm_dd_yyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Order Date)
   * Display Form ID: orderdate.date.day.yyyy_mm_dd
   */
  ,
  YyyyMmDd: newAttribute("orderdate.date.day.yyyy_mm_dd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Order Date)
   * Display Form ID: orderdate.date.day.us.m_d_yy
   */
  ,
  MDYy: newAttribute("orderdate.date.day.us.m_d_yy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Order Date)
   * Display Form ID: orderdate.date.day.us.long
   */
  ,
  Long: newAttribute("orderdate.date.day.us.long")
  /**
   * Display Form Title: dd/mm/yyyy (Order Date)
   * Display Form ID: orderdate.date.day.uk.dd_mm_yyyy
   */
  ,
  DdMmYyyy: newAttribute("orderdate.date.day.uk.dd_mm_yyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Order Date)
   * Display Form ID: orderdate.date.day.eu.dd_mm_yyyy
   */
  ,
  DdMmYyyy_1: newAttribute("orderdate.date.day.eu.dd_mm_yyyy")
};
/**
 * Attribute Title: Year (Return Date)
 * Display Form ID: returndate.year
 */

export const ReturnDateYear = newAttribute("returndate.year.default");
/**
 * Attribute Title: Quarter (Return Date)
 * Display Form ID: returndate.quarter.in.year
 */

export const ReturnDateQuarter = newAttribute("returndate.quarter.in.year.default");
export const ReturnDateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Return Date)
   * Display Form ID: returndate.week.wk_year
   */
  WeekNrYear: newAttribute("returndate.week.wk_year")
  /**
   * Display Form Title: Week Starting (Return Date)
   * Display Form ID: returndate.week.starting
   */
  ,
  WeekStarting: newAttribute("returndate.week.starting")
  /**
   * Display Form Title: From - To (Return Date)
   * Display Form ID: returndate.week.from_to
   */
  ,
  FromTo: newAttribute("returndate.week.from_to")
  /**
   * Display Form Title: Week #/Year (Cont.) (Return Date)
   * Display Form ID: returndate.week.wk_year_cont
   */
  ,
  WeekNrYear_1: newAttribute("returndate.week.wk_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Return Date)
   * Display Form ID: returndate.week.wk_qtr_year_cont
   */
  ,
  WkQtrYear: newAttribute("returndate.week.wk_qtr_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Return Date)
   * Display Form ID: returndate.week.wk_qtr_year
   */
  ,
  WkQtrYear_1: newAttribute("returndate.week.wk_qtr_year")
};
/**
 * Attribute Title: Week (Sun-Sat) (Return Date)
 * Display Form ID: returndate.week.in.year
 */

export const ReturnDateWeekSunSat = newAttribute("returndate.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Return Date)
 * Display Form ID: returndate.week.in.quarter
 */

export const ReturnDateWeekSunSatOfQtr = newAttribute("returndate.week.in.quarter.number_us");
export const ReturnDateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Return Date)
   * Display Form ID: returndate.euweek.wk_year
   */
  WeekNrYear: newAttribute("returndate.euweek.wk_year")
  /**
   * Display Form Title: Week Starting (Return Date)
   * Display Form ID: returndate.euweek.starting
   */
  ,
  WeekStarting: newAttribute("returndate.euweek.starting")
  /**
   * Display Form Title: From - To (Return Date)
   * Display Form ID: returndate.euweek.from_to
   */
  ,
  FromTo: newAttribute("returndate.euweek.from_to")
};
/**
 * Attribute Title: Week (Mon-Sun) (Return Date)
 * Display Form ID: returndate.euweek.in.year
 */

export const ReturnDateWeekMonSun = newAttribute("returndate.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Return Date)
 * Display Form ID: returndate.euweek.in.quarter
 */

export const ReturnDateWeekMonSunOfQtr = newAttribute("returndate.euweek.in.quarter.number_eu");
export const ReturnDateMonth = {
  /**
   * Display Form Title: Short (Jan) (Return Date)
   * Display Form ID: returndate.month.in.year.short
   */
  Short: newAttribute("returndate.month.in.year.short")
  /**
   * Display Form Title: Long (January) (Return Date)
   * Display Form ID: returndate.month.in.year.long
   */
  ,
  Long: newAttribute("returndate.month.in.year.long")
  /**
   * Display Form Title: Number (M1) (Return Date)
   * Display Form ID: returndate.month.in.year.number
   */
  ,
  Number: newAttribute("returndate.month.in.year.number")
  /**
   * Display Form Title: M/Q (M1/Q1) (Return Date)
   * Display Form ID: returndate.month.in.year.m_q
   */
  ,
  MQ: newAttribute("returndate.month.in.year.m_q")
};
/**
 * Attribute Title: Month of Quarter (Return Date)
 * Display Form ID: returndate.month.in.quarter
 */

export const ReturnDateMonthOfQuarter = newAttribute("returndate.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Return Date)
 * Display Form ID: returndate.day.in.year
 */

export const ReturnDateDayOfYear = newAttribute("returndate.day.in.year.default");
export const ReturnDateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Return Date)
   * Display Form ID: returndate.day.in.week.short
   */
  Short: newAttribute("returndate.day.in.week.short")
  /**
   * Display Form Title: Long (Sunday) (Return Date)
   * Display Form ID: returndate.day.in.week.long
   */
  ,
  Long: newAttribute("returndate.day.in.week.long")
  /**
   * Display Form Title: Number (1=Sunday) (Return Date)
   * Display Form ID: returndate.day.in.week.number
   */
  ,
  Number: newAttribute("returndate.day.in.week.number")
};
export const ReturnDateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Return Date)
   * Display Form ID: returndate.day.in.euweek.short
   */
  Short: newAttribute("returndate.day.in.euweek.short")
  /**
   * Display Form Title: Long (Monday) (Return Date)
   * Display Form ID: returndate.day.in.euweek.long
   */
  ,
  Long: newAttribute("returndate.day.in.euweek.long")
  /**
   * Display Form Title: Number (1=Monday) (Return Date)
   * Display Form ID: returndate.day.in.euweek.number
   */
  ,
  Number: newAttribute("returndate.day.in.euweek.number")
};
/**
 * Attribute Title: Day of Quarter (Return Date)
 * Display Form ID: returndate.day.in.quarter
 */

export const ReturnDateDayOfQuarter = newAttribute("returndate.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Return Date)
 * Display Form ID: returndate.day.in.month
 */

export const ReturnDateDayOfMonth = newAttribute("returndate.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Return Date)
 * Display Form ID: returndate.quarter
 */

export const ReturnDateQuarterYear = newAttribute("returndate.quarter.short_us");
export const ReturnDateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Return Date)
   * Display Form ID: returndate.month.short
   */
  Short: newAttribute("returndate.month.short")
  /**
   * Display Form Title: Long (January 2010) (Return Date)
   * Display Form ID: returndate.month.long
   */
  ,
  Long: newAttribute("returndate.month.long")
  /**
   * Display Form Title: Number (1/2010) (Return Date)
   * Display Form ID: returndate.month.number
   */
  ,
  Number: newAttribute("returndate.month.number")
};
export const ReturnDateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Return Date)
   * Display Form ID: returndate.date.day.us.mm_dd_yyyy
   */
  MmDdYyyy: newAttribute("returndate.date.day.us.mm_dd_yyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Return Date)
   * Display Form ID: returndate.date.day.yyyy_mm_dd
   */
  ,
  YyyyMmDd: newAttribute("returndate.date.day.yyyy_mm_dd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Return Date)
   * Display Form ID: returndate.date.day.us.m_d_yy
   */
  ,
  MDYy: newAttribute("returndate.date.day.us.m_d_yy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Return Date)
   * Display Form ID: returndate.date.day.us.long
   */
  ,
  Long: newAttribute("returndate.date.day.us.long")
  /**
   * Display Form Title: dd/mm/yyyy (Return Date)
   * Display Form ID: returndate.date.day.uk.dd_mm_yyyy
   */
  ,
  DdMmYyyy: newAttribute("returndate.date.day.uk.dd_mm_yyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Return Date)
   * Display Form ID: returndate.date.day.eu.dd_mm_yyyy
   */
  ,
  DdMmYyyy_1: newAttribute("returndate.date.day.eu.dd_mm_yyyy")
};
/**
 * Attribute Title: Year (Product Added Date)
 * Display Form ID: productaddeddate.year
 */

export const ProductAddedDateYear = newAttribute("productaddeddate.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Product Added Date)
 * Display Form ID: productaddeddate.quarter.in.year
 */

export const ProductAddedDateQuarter = newAttribute("productaddeddate.aam81lMifn6q");
export const ProductAddedDateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Product Added Date)
   * Display Form ID: productaddeddate.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("productaddeddate.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Product Added Date)
   * Display Form ID: productaddeddate.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("productaddeddate.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Product Added Date)
   * Display Form ID: productaddeddate.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("productaddeddate.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Product Added Date)
   * Display Form ID: productaddeddate.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("productaddeddate.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Product Added Date)
   * Display Form ID: productaddeddate.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("productaddeddate.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Product Added Date)
   * Display Form ID: productaddeddate.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("productaddeddate.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Product Added Date)
 * Display Form ID: productaddeddate.week.in.year
 */

export const ProductAddedDateWeekSunSat = newAttribute("productaddeddate.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Product Added Date)
 * Display Form ID: productaddeddate.week.in.quarter
 */

export const ProductAddedDateWeekSunSatOfQtr = newAttribute("productaddeddate.aaO81lMifn6q");
export const ProductAddedDateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Product Added Date)
   * Display Form ID: productaddeddate.aa281lMifn6q
   */
  WeekNrYear: newAttribute("productaddeddate.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Product Added Date)
   * Display Form ID: productaddeddate.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("productaddeddate.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Product Added Date)
   * Display Form ID: productaddeddate.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("productaddeddate.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Product Added Date)
 * Display Form ID: productaddeddate.euweek.in.year
 */

export const ProductAddedDateWeekMonSun = newAttribute("productaddeddate.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Product Added Date)
 * Display Form ID: productaddeddate.euweek.in.quarter
 */

export const ProductAddedDateWeekMonSunOfQtr = newAttribute("productaddeddate.abg81lMifn6q");
export const ProductAddedDateMonth = {
  /**
   * Display Form Title: Short (Jan) (Product Added Date)
   * Display Form ID: productaddeddate.abm81lMifn6q
   */
  Short: newAttribute("productaddeddate.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Product Added Date)
   * Display Form ID: productaddeddate.abs81lMifn6q
   */
  ,
  Long: newAttribute("productaddeddate.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Product Added Date)
   * Display Form ID: productaddeddate.abq81lMifn6q
   */
  ,
  Number: newAttribute("productaddeddate.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Product Added Date)
   * Display Form ID: productaddeddate.abo81lMifn6q
   */
  ,
  MQ: newAttribute("productaddeddate.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Product Added Date)
 * Display Form ID: productaddeddate.month.in.quarter
 */

export const ProductAddedDateMonthOfQuarter = newAttribute("productaddeddate.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Product Added Date)
 * Display Form ID: productaddeddate.day.in.year
 */

export const ProductAddedDateDayOfYear = newAttribute("productaddeddate.abE81lMifn6q");
export const ProductAddedDateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Product Added Date)
   * Display Form ID: productaddeddate.abK81lMifn6q
   */
  Short: newAttribute("productaddeddate.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Product Added Date)
   * Display Form ID: productaddeddate.abO81lMifn6q
   */
  ,
  Long: newAttribute("productaddeddate.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Product Added Date)
   * Display Form ID: productaddeddate.abM81lMifn6q
   */
  ,
  Number: newAttribute("productaddeddate.abM81lMifn6q")
};
export const ProductAddedDateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Product Added Date)
   * Display Form ID: productaddeddate.abU81lMifn6q
   */
  Short: newAttribute("productaddeddate.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Product Added Date)
   * Display Form ID: productaddeddate.abY81lMifn6q
   */
  ,
  Long: newAttribute("productaddeddate.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Product Added Date)
   * Display Form ID: productaddeddate.abW81lMifn6q
   */
  ,
  Number: newAttribute("productaddeddate.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Product Added Date)
 * Display Form ID: productaddeddate.day.in.quarter
 */

export const ProductAddedDateDayOfQuarter = newAttribute("productaddeddate.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Product Added Date)
 * Display Form ID: productaddeddate.day.in.month
 */

export const ProductAddedDateDayOfMonth = newAttribute("productaddeddate.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Product Added Date)
 * Display Form ID: productaddeddate.quarter
 */

export const ProductAddedDateQuarterYear = newAttribute("productaddeddate.aci81lMifn6q");
export const ProductAddedDateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Product Added Date)
   * Display Form ID: productaddeddate.act81lMifn6q
   */
  Short: newAttribute("productaddeddate.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Product Added Date)
   * Display Form ID: productaddeddate.acx81lMifn6q
   */
  ,
  Long: newAttribute("productaddeddate.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Product Added Date)
   * Display Form ID: productaddeddate.acv81lMifn6q
   */
  ,
  Number: newAttribute("productaddeddate.acv81lMifn6q")
};
export const ProductAddedDateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Product Added Date)
   * Display Form ID: productaddeddate.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("productaddeddate.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Product Added Date)
   * Display Form ID: productaddeddate.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("productaddeddate.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Product Added Date)
   * Display Form ID: productaddeddate.date.mdyy
   */
  ,
  MDYy: newAttribute("productaddeddate.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Product Added Date)
   * Display Form ID: productaddeddate.date.long
   */
  ,
  Long: newAttribute("productaddeddate.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Product Added Date)
   * Display Form ID: productaddeddate.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("productaddeddate.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Product Added Date)
   * Display Form ID: productaddeddate.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("productaddeddate.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (User Created Date)
 * Display Form ID: usercreateddate.year
 */

export const UserCreatedDateYear = newAttribute("usercreateddate.aag81lMifn6q");
/**
 * Attribute Title: Quarter (User Created Date)
 * Display Form ID: usercreateddate.quarter.in.year
 */

export const UserCreatedDateQuarter = newAttribute("usercreateddate.aam81lMifn6q");
export const UserCreatedDateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (User Created Date)
   * Display Form ID: usercreateddate.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("usercreateddate.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (User Created Date)
   * Display Form ID: usercreateddate.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("usercreateddate.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (User Created Date)
   * Display Form ID: usercreateddate.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("usercreateddate.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (User Created Date)
   * Display Form ID: usercreateddate.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("usercreateddate.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (User Created Date)
   * Display Form ID: usercreateddate.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("usercreateddate.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (User Created Date)
   * Display Form ID: usercreateddate.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("usercreateddate.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (User Created Date)
 * Display Form ID: usercreateddate.week.in.year
 */

export const UserCreatedDateWeekSunSat = newAttribute("usercreateddate.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (User Created Date)
 * Display Form ID: usercreateddate.week.in.quarter
 */

export const UserCreatedDateWeekSunSatOfQtr = newAttribute("usercreateddate.aaO81lMifn6q");
export const UserCreatedDateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (User Created Date)
   * Display Form ID: usercreateddate.aa281lMifn6q
   */
  WeekNrYear: newAttribute("usercreateddate.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (User Created Date)
   * Display Form ID: usercreateddate.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("usercreateddate.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (User Created Date)
   * Display Form ID: usercreateddate.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("usercreateddate.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (User Created Date)
 * Display Form ID: usercreateddate.euweek.in.year
 */

export const UserCreatedDateWeekMonSun = newAttribute("usercreateddate.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (User Created Date)
 * Display Form ID: usercreateddate.euweek.in.quarter
 */

export const UserCreatedDateWeekMonSunOfQtr = newAttribute("usercreateddate.abg81lMifn6q");
export const UserCreatedDateMonth = {
  /**
   * Display Form Title: Short (Jan) (User Created Date)
   * Display Form ID: usercreateddate.abm81lMifn6q
   */
  Short: newAttribute("usercreateddate.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (User Created Date)
   * Display Form ID: usercreateddate.abs81lMifn6q
   */
  ,
  Long: newAttribute("usercreateddate.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (User Created Date)
   * Display Form ID: usercreateddate.abq81lMifn6q
   */
  ,
  Number: newAttribute("usercreateddate.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (User Created Date)
   * Display Form ID: usercreateddate.abo81lMifn6q
   */
  ,
  MQ: newAttribute("usercreateddate.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (User Created Date)
 * Display Form ID: usercreateddate.month.in.quarter
 */

export const UserCreatedDateMonthOfQuarter = newAttribute("usercreateddate.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (User Created Date)
 * Display Form ID: usercreateddate.day.in.year
 */

export const UserCreatedDateDayOfYear = newAttribute("usercreateddate.abE81lMifn6q");
export const UserCreatedDateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (User Created Date)
   * Display Form ID: usercreateddate.abK81lMifn6q
   */
  Short: newAttribute("usercreateddate.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (User Created Date)
   * Display Form ID: usercreateddate.abO81lMifn6q
   */
  ,
  Long: newAttribute("usercreateddate.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (User Created Date)
   * Display Form ID: usercreateddate.abM81lMifn6q
   */
  ,
  Number: newAttribute("usercreateddate.abM81lMifn6q")
};
export const UserCreatedDateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (User Created Date)
   * Display Form ID: usercreateddate.abU81lMifn6q
   */
  Short: newAttribute("usercreateddate.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (User Created Date)
   * Display Form ID: usercreateddate.abY81lMifn6q
   */
  ,
  Long: newAttribute("usercreateddate.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (User Created Date)
   * Display Form ID: usercreateddate.abW81lMifn6q
   */
  ,
  Number: newAttribute("usercreateddate.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (User Created Date)
 * Display Form ID: usercreateddate.day.in.quarter
 */

export const UserCreatedDateDayOfQuarter = newAttribute("usercreateddate.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (User Created Date)
 * Display Form ID: usercreateddate.day.in.month
 */

export const UserCreatedDateDayOfMonth = newAttribute("usercreateddate.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (User Created Date)
 * Display Form ID: usercreateddate.quarter
 */

export const UserCreatedDateQuarterYear = newAttribute("usercreateddate.aci81lMifn6q");
export const UserCreatedDateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (User Created Date)
   * Display Form ID: usercreateddate.act81lMifn6q
   */
  Short: newAttribute("usercreateddate.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (User Created Date)
   * Display Form ID: usercreateddate.acx81lMifn6q
   */
  ,
  Long: newAttribute("usercreateddate.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (User Created Date)
   * Display Form ID: usercreateddate.acv81lMifn6q
   */
  ,
  Number: newAttribute("usercreateddate.acv81lMifn6q")
};
export const UserCreatedDateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (User Created Date)
   * Display Form ID: usercreateddate.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("usercreateddate.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (User Created Date)
   * Display Form ID: usercreateddate.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("usercreateddate.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (User Created Date)
   * Display Form ID: usercreateddate.date.mdyy
   */
  ,
  MDYy: newAttribute("usercreateddate.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (User Created Date)
   * Display Form ID: usercreateddate.date.long
   */
  ,
  Long: newAttribute("usercreateddate.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (User Created Date)
   * Display Form ID: usercreateddate.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("usercreateddate.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (User Created Date)
   * Display Form ID: usercreateddate.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("usercreateddate.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Inventory Month)
 * Display Form ID: inventorymonth.year
 */

export const InventoryMonthYear = newAttribute("inventorymonth.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Inventory Month)
 * Display Form ID: inventorymonth.quarter.in.year
 */

export const InventoryMonthQuarter = newAttribute("inventorymonth.aam81lMifn6q");
export const InventoryMonthWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Inventory Month)
   * Display Form ID: inventorymonth.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("inventorymonth.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Inventory Month)
   * Display Form ID: inventorymonth.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("inventorymonth.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Inventory Month)
   * Display Form ID: inventorymonth.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("inventorymonth.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Inventory Month)
   * Display Form ID: inventorymonth.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("inventorymonth.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Inventory Month)
   * Display Form ID: inventorymonth.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("inventorymonth.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Inventory Month)
   * Display Form ID: inventorymonth.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("inventorymonth.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Inventory Month)
 * Display Form ID: inventorymonth.week.in.year
 */

export const InventoryMonthWeekSunSat = newAttribute("inventorymonth.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Inventory Month)
 * Display Form ID: inventorymonth.week.in.quarter
 */

export const InventoryMonthWeekSunSatOfQtr = newAttribute("inventorymonth.aaO81lMifn6q");
export const InventoryMonthWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Inventory Month)
   * Display Form ID: inventorymonth.aa281lMifn6q
   */
  WeekNrYear: newAttribute("inventorymonth.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Inventory Month)
   * Display Form ID: inventorymonth.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("inventorymonth.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Inventory Month)
   * Display Form ID: inventorymonth.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("inventorymonth.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Inventory Month)
 * Display Form ID: inventorymonth.euweek.in.year
 */

export const InventoryMonthWeekMonSun = newAttribute("inventorymonth.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Inventory Month)
 * Display Form ID: inventorymonth.euweek.in.quarter
 */

export const InventoryMonthWeekMonSunOfQtr = newAttribute("inventorymonth.abg81lMifn6q");
export const InventoryMonthMonth = {
  /**
   * Display Form Title: Short (Jan) (Inventory Month)
   * Display Form ID: inventorymonth.abm81lMifn6q
   */
  Short: newAttribute("inventorymonth.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Inventory Month)
   * Display Form ID: inventorymonth.abs81lMifn6q
   */
  ,
  Long: newAttribute("inventorymonth.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Inventory Month)
   * Display Form ID: inventorymonth.abq81lMifn6q
   */
  ,
  Number: newAttribute("inventorymonth.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Inventory Month)
   * Display Form ID: inventorymonth.abo81lMifn6q
   */
  ,
  MQ: newAttribute("inventorymonth.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Inventory Month)
 * Display Form ID: inventorymonth.month.in.quarter
 */

export const InventoryMonthMonthOfQuarter = newAttribute("inventorymonth.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Inventory Month)
 * Display Form ID: inventorymonth.day.in.year
 */

export const InventoryMonthDayOfYear = newAttribute("inventorymonth.abE81lMifn6q");
export const InventoryMonthDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Inventory Month)
   * Display Form ID: inventorymonth.abK81lMifn6q
   */
  Short: newAttribute("inventorymonth.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Inventory Month)
   * Display Form ID: inventorymonth.abO81lMifn6q
   */
  ,
  Long: newAttribute("inventorymonth.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Inventory Month)
   * Display Form ID: inventorymonth.abM81lMifn6q
   */
  ,
  Number: newAttribute("inventorymonth.abM81lMifn6q")
};
export const InventoryMonthDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Inventory Month)
   * Display Form ID: inventorymonth.abU81lMifn6q
   */
  Short: newAttribute("inventorymonth.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Inventory Month)
   * Display Form ID: inventorymonth.abY81lMifn6q
   */
  ,
  Long: newAttribute("inventorymonth.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Inventory Month)
   * Display Form ID: inventorymonth.abW81lMifn6q
   */
  ,
  Number: newAttribute("inventorymonth.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Inventory Month)
 * Display Form ID: inventorymonth.day.in.quarter
 */

export const InventoryMonthDayOfQuarter = newAttribute("inventorymonth.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Inventory Month)
 * Display Form ID: inventorymonth.day.in.month
 */

export const InventoryMonthDayOfMonth = newAttribute("inventorymonth.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Inventory Month)
 * Display Form ID: inventorymonth.quarter
 */

export const InventoryMonthQuarterYear = newAttribute("inventorymonth.aci81lMifn6q");
export const InventoryMonthMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Inventory Month)
   * Display Form ID: inventorymonth.act81lMifn6q
   */
  Short: newAttribute("inventorymonth.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Inventory Month)
   * Display Form ID: inventorymonth.acx81lMifn6q
   */
  ,
  Long: newAttribute("inventorymonth.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Inventory Month)
   * Display Form ID: inventorymonth.acv81lMifn6q
   */
  ,
  Number: newAttribute("inventorymonth.acv81lMifn6q")
};
export const InventoryMonthDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Inventory Month)
   * Display Form ID: inventorymonth.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("inventorymonth.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Inventory Month)
   * Display Form ID: inventorymonth.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("inventorymonth.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Inventory Month)
   * Display Form ID: inventorymonth.date.mdyy
   */
  ,
  MDYy: newAttribute("inventorymonth.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Inventory Month)
   * Display Form ID: inventorymonth.date.long
   */
  ,
  Long: newAttribute("inventorymonth.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Inventory Month)
   * Display Form ID: inventorymonth.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("inventorymonth.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Inventory Month)
   * Display Form ID: inventorymonth.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("inventorymonth.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Date)
 * Display Form ID: date.year
 */

export const DateYear = newAttribute("date.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date)
 * Display Form ID: date.quarter.in.year
 */

export const DateQuarter = newAttribute("date.aam81lMifn6q");
export const DateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("date.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("date.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date)
   * Display Form ID: date.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("date.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
   * Display Form ID: date.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("date.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Date)
   * Display Form ID: date.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("date.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Display Form ID: date.week.in.year
 */

export const DateWeekSunSat = newAttribute("date.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Display Form ID: date.week.in.quarter
 */

export const DateWeekSunSatOfQtr = newAttribute("date.aaO81lMifn6q");
export const DateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.aa281lMifn6q
   */
  WeekNrYear: newAttribute("date.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("date.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Display Form ID: date.euweek.in.year
 */

export const DateWeekMonSun = newAttribute("date.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Display Form ID: date.euweek.in.quarter
 */

export const DateWeekMonSunOfQtr = newAttribute("date.abg81lMifn6q");
export const DateMonth = {
  /**
   * Display Form Title: Short (Jan) (Date)
   * Display Form ID: date.abm81lMifn6q
   */
  Short: newAttribute("date.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Date)
   * Display Form ID: date.abs81lMifn6q
   */
  ,
  Long: newAttribute("date.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Date)
   * Display Form ID: date.abq81lMifn6q
   */
  ,
  Number: newAttribute("date.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date)
   * Display Form ID: date.abo81lMifn6q
   */
  ,
  MQ: newAttribute("date.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Display Form ID: date.month.in.quarter
 */

export const DateMonthOfQuarter = newAttribute("date.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date)
 * Display Form ID: date.day.in.year
 */

export const DateDayOfYear = newAttribute("date.abE81lMifn6q");
export const DateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date)
   * Display Form ID: date.abK81lMifn6q
   */
  Short: newAttribute("date.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Date)
   * Display Form ID: date.abO81lMifn6q
   */
  ,
  Long: newAttribute("date.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Date)
   * Display Form ID: date.abM81lMifn6q
   */
  ,
  Number: newAttribute("date.abM81lMifn6q")
};
export const DateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date)
   * Display Form ID: date.abU81lMifn6q
   */
  Short: newAttribute("date.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Date)
   * Display Form ID: date.abY81lMifn6q
   */
  ,
  Long: newAttribute("date.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Date)
   * Display Form ID: date.abW81lMifn6q
   */
  ,
  Number: newAttribute("date.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Display Form ID: date.day.in.quarter
 */

export const DateDayOfQuarter = newAttribute("date.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date)
 * Display Form ID: date.day.in.month
 */

export const DateDayOfMonth = newAttribute("date.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date)
 * Display Form ID: date.quarter
 */

export const DateQuarterYear = newAttribute("date.aci81lMifn6q");
export const DateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date)
   * Display Form ID: date.act81lMifn6q
   */
  Short: newAttribute("date.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Date)
   * Display Form ID: date.acx81lMifn6q
   */
  ,
  Long: newAttribute("date.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Date)
   * Display Form ID: date.acv81lMifn6q
   */
  ,
  Number: newAttribute("date.acv81lMifn6q")
};
export const DateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Date)
   * Display Form ID: date.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("date.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date)
   * Display Form ID: date.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("date.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date)
   * Display Form ID: date.date.mdyy
   */
  ,
  MDYy: newAttribute("date.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
   * Display Form ID: date.date.long
   */
  ,
  Long: newAttribute("date.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date)
   * Display Form ID: date.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("date.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date)
   * Display Form ID: date.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("date.date.eddmmyyyy")
};
export const Insights = {
  /**
   * Insight Title: Top 5 Products
   * Insight ID: acbP3cn6bxBT
   */
  Top5Products: "acbP3cn6bxBT"
  /**
   * Insight Title: Bottom 5 Products
   * Insight ID: abnP69PqeOVc
   */
  ,
  Bottom5Products: "abnP69PqeOVc"
  /**
   * Insight Title: Monthly Total Sales
   * Insight ID: aauQcyP3fgrj
   */
  ,
  MonthlyTotalSales: "aauQcyP3fgrj"
  /**
   * Insight Title: Product Validation
   * Insight ID: aa3SXVYXfp33
   */
  ,
  ProductValidation: "aa3SXVYXfp33"
  /**
   * Insight Title: Product Sales Validations
   * Insight ID: acnST4ozfqWc
   */
  ,
  ProductSalesValidations: "acnST4ozfqWc"
  /**
   * Insight Title: Profit Reducing Products
   * Insight ID: acWSYoZUeh3K
   */
  ,
  ProfitReducingProducts: "acWSYoZUeh3K"
  /**
   * Insight Title: Products with < 4 Star Rating
   * Insight ID: aakS7n88hr73
   */
  ,
  ProductsWith4StarRating: "aakS7n88hr73"
  /**
   * Insight Title: Monthly User Activity
   * Insight ID: abWTV1AMakDT
   */
  ,
  MonthlyUserActivity: "abWTV1AMakDT"
  /**
   * Insight Title: Monthly New Users
   * Insight ID: aaLT3WybdWgq
   */
  ,
  MonthlyNewUsers: "aaLT3WybdWgq"
  /**
   * Insight Title: % Total Profit by Product
   * Insight ID: acvnbMcDgtWZ
   */
  ,
  PercentTotalProfitByProduct: "acvnbMcDgtWZ"
  /**
   * Insight Title: Price Validation
   * Insight ID: aauRPXS7f7ys
   */
  ,
  PriceValidation: "aauRPXS7f7ys"
  /**
   * Insight Title: Most Returned Products
   * Insight ID: abERRRq5dx61
   */
  ,
  MostReturnedProducts: "abERRRq5dx61"
  /**
   * Insight Title: Sales GeoChart
   * Insight ID: abBR9mMkgMfI
   */
  ,
  SalesGeoChart: "abBR9mMkgMfI"
  /**
   * Insight Title: % of Total Sales
   * Insight ID: aa8Srpo5fKz1
   */
  ,
  PercentOfTotalSales_1: "aa8Srpo5fKz1"
  /**
   * Insight Title: Sell Through Rate by Month
   * Insight ID: aaHSw8l0c5U9
   */
  ,
  SellThroughRateByMonth: "aaHSw8l0c5U9"
  /**
   * Insight Title: Profit Margin Geochart
   * Insight ID: aaZWPvSLeU6Q
   */
  ,
  ProfitMarginGeochart: "aaZWPvSLeU6Q"
  /**
   * Insight Title: Sales per city
   * Insight ID: abiWQgJgfML0
   */
  ,
  SalesPerCity: "abiWQgJgfML0"
  /**
   * Insight Title: Chart Example
   * Insight ID: aapJC900f3kB
   */
  ,
  ChartExample: "aapJC900f3kB"
  /**
   * Insight Title: Page views
   * Insight ID: abWIzDZbf0dl
   */
  ,
  PageViews_1: "abWIzDZbf0dl"
  /**
   * Insight Title: Average Star Rating
   * Insight ID: ac3IwXHLitoG
   */
  ,
  AverageStarRating: "ac3IwXHLitoG"
  /**
   * Insight Title: Product Reviews
   * Insight ID: abmIA7opdwdq
   */
  ,
  ProductReviews: "abmIA7opdwdq"
  /**
   * Insight Title: Inventory vs Orders
   * Insight ID: aaYOMzntcqo3
   */
  ,
  InventoryVsOrders: "aaYOMzntcqo3"
  /**
   * Insight Title: Returns
   * Insight ID: aaSOQF3AcU7l
   */
  ,
  Returns: "aaSOQF3AcU7l"
  /**
   * Insight Title: Potential TOP 10
   * Insight ID: adwOJIMIfmpQ
   */
  ,
  PotentialTOP10: "adwOJIMIfmpQ"
  /**
   * Insight Title: Potential Bottom 10
   * Insight ID: aaeOUBIpe1Os
   */
  ,
  PotentialBottom10: "aaeOUBIpe1Os"
  /**
   * Insight Title: Sales distribution
   * Insight ID: ackOOBi2efLb
   */
  ,
  SalesDistribution: "ackOOBi2efLb"
  /**
   * Insight Title: Monthly Sales Comparison
   * Insight ID: abBdbUoKcJof
   */
  ,
  MonthlySalesComparison: "abBdbUoKcJof"
  /**
   * Insight Title: Monthly Transaction Count Comparison
   * Insight ID: adkdagSLfA8r
   */
  ,
  MonthlyTransactionCountComparison: "adkdagSLfA8r"
  /**
   * Insight Title: Monthly Profit Margin
   * Insight ID: aaRoqDdZgLld
   */
  ,
  MonthlyProfitMargin: "aaRoqDdZgLld"
  /**
   * Insight Title: Inventory Breakdown
   * Insight ID: aavo2J6GaTc4
   */
  ,
  InventoryBreakdown: "aavo2J6GaTc4"
  /**
   * Insight Title: Product Engagement Breakdown
   * Insight ID: abDo2eszcJgq
   */
  ,
  ProductEngagementBreakdown: "abDo2eszcJgq"
  /**
   * Insight Title: Profit Breakdown
   * Insight ID: acbphtXTfjr9
   */
  ,
  ProfitBreakdown: "acbphtXTfjr9"
  /**
   * Insight Title: _Validation
   * Insight ID: abncZhZsf8rj
   */
  ,
  Validation: "abncZhZsf8rj"
  /**
   * Insight Title: KpiComparison
   * Insight ID: abDqWhBGfNpF
   */
  ,
  KpiComparison: "abDqWhBGfNpF"
  /**
   * Insight Title: Sales / Profit Top Categories
   * Insight ID: adfJjT8OeDme
   */
  ,
  SalesProfitTopCategories: "adfJjT8OeDme"
  /**
   * Insight Title: Measures overview
   * Insight ID: ac8VO8ppfo2W
   */
  ,
  MeasuresOverview: "ac8VO8ppfo2W"
  /**
   * Insight Title: Orders and Revenue by Day
   * Insight ID: acFMnwFqhENf
   */
  ,
  OrdersAndRevenueByDay: "acFMnwFqhENf"
  /**
   * Insight Title: Revenue Trend by Product Category
   * Insight ID: acbMrXAYcqGN
   */
  ,
  RevenueTrendByProductCategory: "acbMrXAYcqGN"
  /**
   * Insight Title: Measures by Product Categoruy
   * Insight ID: aciMsOIjhlRK
   */
  ,
  MeasuresByProductCategoruy: "aciMsOIjhlRK"
  /**
   * Insight Title: test
   * Insight ID: abR78adZcxWn
   */
  ,
  Test: "abR78adZcxWn"
  /**
   * Insight Title: KPI - Total Sales
   * Insight ID: acc9Xd2SdyPe
   */
  ,
  KPITotalSales: "acc9Xd2SdyPe"
  /**
   * Insight Title: KPI Total Profit
   * Insight ID: aaGlL1OHdNHz
   */
  ,
  KPITotalProfit: "aaGlL1OHdNHz"
  /**
   * Insight Title: KPI Total Returns
   * Insight ID: aa6lIkPthdUE
   */
  ,
  KPITotalReturns: "aa6lIkPthdUE"
  /**
   * Insight Title: KPI Total Transactions
   * Insight ID: aa0lKkSCcZmQ
   */
  ,
  KPITotalTransactions: "aa0lKkSCcZmQ"
  /**
   * Insight Title: Heatmap of returns
   * Insight ID: ada43KeNa0xM
   */
  ,
  HeatmapOfReturns: "ada43KeNa0xM"
  /**
   * Insight Title: Product ID / Returns
   * Insight ID: acn45FQRipfO
   */
  ,
  ProductIDReturns: "acn45FQRipfO"
  /**
   * Insight Title: test demo
   * Insight ID: acul9E3JgOSm
   */
  ,
  TestDemo: "acul9E3JgOSm"
  /**
   * Insight Title: Sales
   * Insight ID: abgxb95gg1XG
   */
  ,
  Sales: "abgxb95gg1XG"
  /**
   * Insight Title: % Total Profit by Category
   * Insight ID: aamxnJoOa7Dz
   */
  ,
  PercentTotalProfitByCategory: "aamxnJoOa7Dz"
  /**
   * Insight Title: Sales by Brand
   * Insight ID: aczx5d4yaWYF
   */
  ,
  SalesByBrand: "aczx5d4yaWYF"
  /**
   * Insight Title: Sales by Category
   * Insight ID: ad0yC5wyaHIL
   */
  ,
  SalesByCategory: "ad0yC5wyaHIL"
  /**
   * Insight Title: skouska
   * Insight ID: ac96yRbkfWOF
   */
  ,
  Skouska: "ac96yRbkfWOF"
};