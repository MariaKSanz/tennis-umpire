import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";

function EncountersList({ encounters }) {
  return (
    <section className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Tournament</TableCell>
              <TableCell align="center">Player 1</TableCell>
              <TableCell align="center">Player 2</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">Winner</TableCell>
              <TableCell align="center">Actions</TableCell>

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
                <TableCell align="center">{(new Date(encounter.playedAt).toLocaleString())}</TableCell>
                <TableCell align="center">{encounter.tournament}</TableCell>
                <TableCell align="center">
                  {encounter.p1Firstname} {encounter.p1Lastname}
                </TableCell>
                <TableCell align="center">
                  {encounter.p2Firstname} {encounter.p2Lastname}
                </TableCell>
                <TableCell align="center">{encounter.score}</TableCell>
                <TableCell align="center">
                  {encounter.wFirstname} {encounter.wLastname}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" aria-label="edit button"> <ModeEditIcon /> </IconButton>
                  <IconButton color="error" aria-label="delete button"> <DeleteForeverIcon /> </IconButton>
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
    }),
  ).isRequired,
};
export default EncountersList;
