import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function EncountersList({ encounters }) {
  return (
    <section className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Tournament</TableCell>
              <TableCell align="right">Player 1</TableCell>
              <TableCell align="right">Player 2</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Winner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {encounters.map((encounter) => (
              <TableRow
                key={encounter.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {encounter.id}
                </TableCell>
                <TableCell align="right">{encounter.tournament}</TableCell>
                <TableCell align="right">
                  {encounter.p1Firstname} {encounter.p1Lastname}
                </TableCell>
                <TableCell align="right">
                  {encounter.p2Firstname} {encounter.p2Lastname}
                </TableCell>
                <TableCell align="right">{encounter.score}</TableCell>
                <TableCell align="right">
                  {encounter.wFirstname} {encounter.wLastname}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

EncountersList.propTypes = {
  encounters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      playedAt: PropTypes.string.isRequired,
      tournament: PropTypes.string.isRequired,
      p1Firstname: PropTypes.string.isRequired,
      p1Lastname: PropTypes.string.isRequired,
      p2Firstname: PropTypes.string.isRequired,
      p2Lastname: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
      wFirstname: PropTypes.string.isRequired,
      wLastname: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default EncountersList;
