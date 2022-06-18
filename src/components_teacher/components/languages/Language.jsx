import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import './Language.css'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Languages = [
  'Javascript',
  'Java',
  'Python',
  'HTML5',
  'CSS3',
];

function getStyles(name, language, theme) {
    return {
      fontWeight:
        language.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const Language = () => {
    const theme = useTheme();
    const [language, setLanguage] = useState([]);
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setLanguage(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    return (
      <div className="Lang">
        <Select
          id="LangChoice"
          multiple
          value={language}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {Languages.map((name) => (
            
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, language, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
    )
}

export default Language