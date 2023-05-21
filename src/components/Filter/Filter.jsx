import { useDispatch, useSelector } from 'react-redux';
//SLICES
import { setFilter, getFilter } from 'redux/filterSlice';
//ICONS
import { TfiMarkerAlt } from 'react-icons/tfi';
//STYLES
import { Box, Label, Input } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Box>
      <Label>
        Хочу знайти...
        <Input
          type="text"
          name="filter"
          placeholder="   ім'я"
          required
          value={filter}
          onChange={e => {
            dispatch(setFilter(e.target.value));
          }}
        />
      </Label>
      <TfiMarkerAlt size="20px" color="black" />
    </Box>
  );
}
