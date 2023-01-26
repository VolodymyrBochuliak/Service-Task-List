
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const SelectInput = () => {

    const currencies = [
        {
          value: 'Body works',
          label: 'Body works',
        },
        {
          value: 'Engine works',
          label: 'Engine works',
        },
        {
          value: 'Suspention works',
          label: 'Suspention works',
        },
        {
          value: 'Interior works',
          label: 'Interior works',
        },
      ];

    return (
    <Box
        component="form"
        sx={{'& .MuiTextField-root': { width: '35ch' },}}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
            id="outlined-select-currency"
            select
            label="Group"
            defaultValue="Body works"
            helperText="Please select group of ..."
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
    </Box>
    )
}
export default SelectInput