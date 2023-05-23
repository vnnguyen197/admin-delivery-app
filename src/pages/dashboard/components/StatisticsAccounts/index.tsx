import React, { useEffect, useRef } from "react";
import { Chart, ChartOptions, ChartData } from "chart.js/auto";
import {
  StyleCanvas,
  StyleContainer,
  StyleItem,
  StyleList,
  StyleStatistics,
  StyleTotalAccount,
  StyleTotalItem,
} from "./style";
import total from "assets/images/total.png";
import userAccount from "assets/images/userAccount.png";
import shipper from "assets/images/delivery-man.png";

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  colors: any[];
  count: any;
  filltedUser: any[];
  filltedShipper: any[];
}

const StatisticsAccounts: React.FC<DoughnutChartProps> = ({
  data,
  labels,
  colors,
  count,
  filltedUser,
  filltedShipper,
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
            <StyleItem>Tổng số tài khoản</StyleItem>
            <StyleTotalItem>{count}</StyleTotalItem>
          </StyleList>
          <img src={total} alt="img total" width={75} height={75} />
        </StyleTotalAccount>
        <StyleTotalAccount>
          <StyleList>
            <StyleItem>User</StyleItem>
            <StyleTotalItem>{filltedUser?.length}</StyleTotalItem>
          </StyleList>
          <img src={userAccount} alt="img total" width={75} height={75} />
        </StyleTotalAccount>
        <StyleTotalAccount>
          <StyleList>
            <StyleItem>Shipper</StyleItem>
            <StyleTotalItem>{filltedShipper?.length}</StyleTotalItem>
          </StyleList>
          <img src={shipper} alt="img total" width={75} height={75} />
        </StyleTotalAccount>
      </StyleStatistics>
      <StyleCanvas>
        <canvas ref={chartRef}></canvas>
      </StyleCanvas>
    </StyleContainer>
  );
};

export default StatisticsAccounts;
