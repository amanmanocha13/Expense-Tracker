import Chart from '../Chart/Chart';
const ExpensesChart = (props) => {
  const months = new Array(12).fill(0);
  for (let expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    months[expenseMonth] += expense.amount;
  }
  const dataPoints = months.map((amountSpent, index) => {
    const monthName = new Date(0, index).toLocaleString('en-US', {
      month: 'short',
    });
    return { value: amountSpent, label: monthName };
  });
  return <Chart dataPoints={dataPoints} />;
};
export default ExpensesChart;
