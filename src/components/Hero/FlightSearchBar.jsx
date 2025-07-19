import React, { useState } from 'react'
import "./Hero.css";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CheckIcon from '@mui/icons-material/Check';

const SearchBarPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 992,
  margin: '0 auto',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 2,
}));

const options = [
  { value: '', label: 'Round trip' },
  { value: 10, label: 'One way' },
  { value: 20, label: 'Multi-city' },
];

function FlightSearchBar() {
  const [tripType, setTripType] = useState('');

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} className="flight-search-bar-stack">
      <SearchBarPaper elevation={3}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={tripType}
            onChange={e => setTripType(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '& .MuiInputBase-root': { border: 'none' },
              '& fieldset': { border: 'none' }
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  '& .Mui-selected': {
                    backgroundColor: 'transparent !important',
                  },
                  '& .Mui-selected:before': {
                    display: 'none',
                  },
                  '& .MuiListItemIcon-root': {
                    display: 'none',
                  }
                }
              }
            }}
          >
            {options.map(opt => (
              <MenuItem key={opt.value} value={opt.value} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {tripType === opt.value && <CheckIcon fontSize="small" sx={{ mr: 1 }} />}
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SearchBarPaper>
    </Stack>
  )
}

export default FlightSearchBar