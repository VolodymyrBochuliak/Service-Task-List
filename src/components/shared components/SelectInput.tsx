
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface IProps {
  arrayOfValues: { value: string; label: string; }[],
  label: string,
  onChange: (event: any) => void;
  defaultValue ? : string,
  helperText ? : string,

}

const SelectInput = (props: IProps) => {

  const {
    arrayOfValues,
    label,
    defaultValue,
    helperText,
    onChange,

  } = props

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
            label={label}
            defaultValue={defaultValue}
            helperText={helperText}
            onChange={onChange}
            >
            {arrayOfValues.map((option) => (
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