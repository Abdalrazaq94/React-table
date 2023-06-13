import * as React from "react";
import './App.css';
import fakeData from "./FakeData.json";
import { useTable } from "react-table";

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() =>  [
    {
      Header: "ID",
      accessor: "id"
    },
    {
      Header: "First Name",
      accessor: "first_name"
    },
    {
      Header: "Last Name",
      accessor: "last_name"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Gender",
      accessor: "gender"
    },
    {
      Header: "University",
      accessor: "university"
    }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} key={cell.column.id}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
