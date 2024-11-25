import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,

      customer: "Jayther Jann Bua-ay",
      start_date: "1 March",
      end_date:"5 March",
      amount: 785,
      status: "Approved",
      hotel: "Hotel JHON'S",
      city: "batac"
    },
    {
      id: 2235235,
      customer: "Derick Castillo",
      start_date: "1 March",
      end_date:"5 March",
      amount: 785,
      status: "Approved",
      hotel: "Hotel Jayther's",
      city: "Laoag"
    },
    {
      id: 2342353,
      customer: "Shawn Abiang",
      start_date: "1 March",
      end_date:"5 March",
      amount: 785,
      status: "Approved",
      hotel: "Hotel Jayther's",
      city: "Laoag"
    },
    {
      id: 2357741,
      customer: "Daniel Calzada",
      start_date: "1 March",
      end_date:"5 March",
      amount: 785,
      status: "Approved",
      hotel: "Hotel Daniel's",
      city: "Batac"
    },
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">user ID</TableCell>
            <TableCell className="tableCell">Profile</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">City</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
             <TableCell className="tableCell">Start Date</TableCell>
             <TableCell className="tableCell">End Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.city}</TableCell>
              <TableCell className="tableCell">{row.hotel}</TableCell>
              <TableCell className="tableCell">{row.start_date}</TableCell>
              <TableCell className="tableCell">{row.end_date}</TableCell>
    
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
