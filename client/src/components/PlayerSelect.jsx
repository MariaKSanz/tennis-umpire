import { MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

function PlayerSelect({ players }) {
  return (
    <div>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="Player"
      >
        {players.map((player) => (
          <MenuItem key={player.id} value={player.firstname}>
            {player.firstname} {player.lastname}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

PlayerSelect.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PlayerSelect;
