import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valueLabelFormat(value: number) {
  const units = ['days', 'week', 'month'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 7 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 7;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value: number) {
  return Math.round(value);
}

const NonLinearSlider = () => {

  const [value, setValue] = useState<number>(1);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Time for execution: {valueLabelFormat(calculateValue(value))}
      </Typography>
      <Slider
        value={value}
        min={1}
        step={1}
        max={30}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
export default NonLinearSlider

