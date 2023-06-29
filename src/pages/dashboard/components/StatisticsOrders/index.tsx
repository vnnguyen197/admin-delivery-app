import React, { useEffect, useRef } from "react";
import { Chart, ChartOptions, ChartData } from "chart.js/auto";
import orderTotal from "assets/images/orderTotal.png";
import orderConfirm from "assets/images/orderConfirm.png";
import cargoOrder from "assets/images/cargoOrder.png";
import orderTracking from "assets/images/order-tracking.png";
import cancelOrder from "assets/images/cancelOrder.png";
import { StyleCanvas, StyleContainer, StyleItem, StyleList, StyleStatistics, StyleTotalAccount, StyleTotalItem } from "./style";

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  colors: any[];
  countOrder: any;
  filltedShipping: any[];
  filltedDone: any[];
  filltedWaiting: any[];
  filltedCancel: any[];
  filltedNew: any[];
}

const StatisticsOrders: React.FC<DoughnutChartProps> = ({
  data,
  labels,
  colors,
  countOrder,
  filltedShipping,
  filltedDone,
  filltedWaiting,
  filltedCancel,
  filltedNew
}) => {
  const chartRef = useRef<any>();

  useEffect(() => {
    if (chartRef.current) {
      const canvas = chartRef.current;
      const ctx = canvas.getContext("2d");

      // Destroy existing chart, if any
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // Define the data for the chart
      const chartData: ChartData = {
        datasets: [
          {
            data: data,
            backgroundColor: colors,
          },
        ],
        labels: labels,
      };

      // Define the options for the chart
      const options: ChartOptions = {
        plugins: {
          legend: {
            position: "bottom", // Đặt vị trí hộp chú thích ở trên
          },
        },
        layout: {
          padding: {
            bottom: 20, // Khoảng cách từ biểu đồ đến đáy (để làm chỗ cho nhãn)
          },
        },
      };

      // Create the doughnut chart
      chartRef.current.chart = new Chart(ctx, {
        type: "doughnut", 
        data: chartData,
        options: options,
      });
    }
  }, [data, labels, colors]);

  return (
    <StyleContainer>
      <StyleStatistics>
        <StyleTotalAccount>
          <StyleList>
            <StyleItem>Tổng đơn hàng</StyleItem>
            <StyleTotalItem>{countOrder}</StyleTotalItem>
          </StyleList>
          <img src={orderTotal} alt="img total" width={50} height={50} />
        </StyleTotalAccount>
        <StyleTotalAccount>
          <StyleList>
            <StyleItem>Tổng đơn chờ phê duyệt</StyleItem>
            <StyleTotalItem>{filltedWaiting?.length}</StyleTotalItem>
          </StyleList>
          <img src={orderConfirm} alt="img total" width={50} height={50} />
        </StyleTotalAccount>
        <StyleTotalAccount>
          <StyleList>
            <StyleItem>Tổng đơn đã phê duyệt</StyleItem>
            <StyleTotalItem>{filltedNew?.length}</StyleTotalItem>
          </StyleList>
          <img src={orderConfirm} alt="img total" width={50} height={50} />
        </StyleTotalAccount>
        <StyleTotalAccount>
          <StyleList>
            <StyleItem>Tổng đơn đang giao</StyleItem>
            <StyleTotalItem>{filltedShipping?.length}</StyleTotalItem>
          </StyleList>
          <img src={orderTracking} alt="img total" width={50} height={50} />
        </StyleTotalAccount>
        <StyleTotalAccount>
          <StyleList>
            <StyleItem>Tổng đơn đã giao</StyleItem>
            <StyleTotalItem>{filltedDone?.length}</StyleTotalItem>
          </StyleList>
          <img src={cargoOrder} alt="img total" width={50} height={50} />
        </StyleTotalAccount>
        <StyleTotalAccount>
          <StyleList>
            <StyleItem>Tổng đơn đã hủy</StyleItem>
            <StyleTotalItem>{filltedCancel?.length}</StyleTotalItem>
          </StyleList>
          <img src={cancelOrder} alt="img total" width={50} height={50} />
        </StyleTotalAccount>
      </StyleStatistics>
      <StyleCanvas>
        <canvas ref={chartRef}></canvas>
      </StyleCanvas>
    </StyleContainer>
  );
};

export default StatisticsOrders;
