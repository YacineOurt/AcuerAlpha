import ReactDOM from "react-dom";
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";
import { Spin } from "antd";
import "antd/dist/antd.css";
import React from "react";
import {
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line
} from "recharts";
import { Row, Col, Statistic, Table } from "antd";
import { useDeepCompareMemo } from "use-deep-compare";
import { Card, CardBody, Form, FormInput } from "shards-react";

const CartesianChart = ({ resultSet, children, ChartComponent }) => (
  <ResponsiveContainer width="100%" height={350}>
    <ChartComponent data={resultSet.chartPivot()}>
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid />
      {children}
      <Legend />
      <Tooltip />
    </ChartComponent>
  </ResponsiveContainer>
);

const colors = ["#FF6492", "#141446", "#7A77FF"];

const stackedChartData = resultSet => {
  const data = resultSet
    .pivot()
    .map(({ xValues, yValuesArray }) =>
      yValuesArray.map(([yValues, m]) => ({
        x: resultSet.axisValuesString(xValues, ", "),
        color: resultSet.axisValuesString(yValues, ", "),
        measure: m && Number.parseFloat(m)
      }))
    )
    .reduce((a, b) => a.concat(b), []);
  return data;
};

const formatTableData = (columns, data) => {
  function flatten(columns = []) {
    return columns.reduce((memo, column) => {
      if (column.children) {
        return [...memo, ...flatten(column.children)];
      }

      return [...memo, column];
    }, []);
  }

  const typeByIndex = flatten(columns).reduce((memo, column) => {
    return { ...memo, [column.dataIndex]: column };
  }, {});

  function formatValue(value, { type, format } = {}) {
    if (value == undefined) {
      return value;
    }

    if (type === "boolean") {
      if (typeof value === "boolean") {
        return value.toString();
      } else if (typeof value === "number") {
        return Boolean(value).toString();
      }

      return value;
    }

    if (type === "number" && format === "percent") {
      return [parseFloat(value).toFixed(2), "%"].join("");
    }

    return value.toString();
  }

  function format(row) {
    return Object.fromEntries(
      Object.entries(row).map(([dataIndex, value]) => {
        return [dataIndex, formatValue(value, typeByIndex[dataIndex])];
      })
    );
  }

  return data.map(format);
};

const TableRenderer = ({ resultSet, pivotConfig }) => {
  const [tableColumns, dataSource] = useDeepCompareMemo(() => {
    const columns = resultSet.tableColumns(pivotConfig);
    return [
      columns,
      formatTableData(columns, resultSet.tablePivot(pivotConfig))
    ];
  }, [resultSet, pivotConfig]);
  return (
    <Table pagination={false} columns={tableColumns} dataSource={dataSource} />
  );
};

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjAwODAxNDUsImV4cCI6MTY2MDE2NjU0NX0.8DzNlZxaj-E1Vh5wMP10_-KmM9GfgLAFgPf-9eIAug0",
  { apiUrl: "https://e83scc9sam.eu-west-1.awsapprunner.com/cubejs-api/v1" }
);

const renderNumber = ({
  resultSet,
  error,
  pivotConfig,
  onDrilldownRequested
}) => {
  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return <Spin />;
  }

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{
        height: "100%"
      }}
    >
      <Col>
        {resultSet.seriesNames().map(s => (
          <Statistic value={resultSet.totalRow()[s.key]} />
        ))}
      </Col>
    </Row>
  );
};

const renderChart = ({
  resultSet,
  error,
  pivotConfig,
  onDrilldownRequested
}) => {
  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return <Spin />;
  }

  return (
    <CartesianChart resultSet={resultSet} ChartComponent={LineChart}>
      {resultSet.seriesNames().map((series, i) => (
        <Line
          key={series.key}
          stackId="a"
          dataKey={series.key}
          name={series.title}
          stroke={colors[i]}
        />
      ))}
    </CartesianChart>
  );
};

const renderBar = ({ resultSet, error, pivotConfig, onDrilldownRequested }) => {
  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return <Spin />;
  }

  return (
    <CartesianChart resultSet={resultSet} ChartComponent={BarChart}>
      {resultSet.seriesNames().map((series, i) => (
        <Bar
          key={series.key}
          stackId="a"
          dataKey={series.key}
          name={series.title}
          fill={colors[i]}
        />
      ))}
    </CartesianChart>
  );
};

const ChartRenderer = () => {
  return (
    <div>
      <Card small>
        <QueryRenderer
          query={{
            measures: ["LineItems.quantity"],
            order: {
              "LineItems.quantity": "desc"
            },
            dimensions: ["LineItems.createdAt"]
          }}
          cubejsApi={cubejsApi}
          resetResultSetOnChange={false}
          render={props =>
            renderChart({
              ...props,
              chartType: "line",
              pivotConfig: {
                x: ["LineItems.createdAt"],
                y: ["measures"],
                fillMissingDates: true,
                joinDateRange: false
              }
            })
          }
        />
      </Card>
      <QueryRenderer
        query={{
          measures: ["LineItems.quantity"],
          order: {
            "LineItems.quantity": "desc"
          },
          dimensions: ["LineItems.createdAt"]
        }}
        cubejsApi={cubejsApi}
        resetResultSetOnChange={false}
        render={props =>
          renderNumber({
            ...props,
            chartType: "number",
            pivotConfig: {
              x: ["LineItems.createdAt"],
              y: ["measures"],
              fillMissingDates: true,
              joinDateRange: false
            }
          })
        }
      />
      <QueryRenderer
        query={{
          measures: ["LineItems.count"],
          order: {
            "LineItems.count": "desc"
          },
          dimensions: ["LineItems.createdAt"],
          timeDimensions: [
            {
              dimension: "LineItems.createdAt"
            }
          ]
        }}
        cubejsApi={cubejsApi}
        resetResultSetOnChange={false}
        render={props =>
          renderBar({
            ...props,
            chartType: "bar",
            pivotConfig: {
              x: ["LineItems.createdAt"],
              y: ["measures"],
              fillMissingDates: true,
              joinDateRange: false
            }
          })
        }
      />
    </div>
  );
};

export default ChartRenderer;
