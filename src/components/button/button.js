import { jsx as _jsx } from "react/jsx-runtime";
import Button from '@mui/material/Button';
function CustomButton(props) {
    var bgcolor = props.bgcolor, text = props.text, txtcolor = props.txtcolor, disabled = props.disabled, onClick = props.onClick, size = props.size;
    return (
    _jsx(Button, { type: 'button', onClick: onClick, disabled: disabled, size: size, sx: { backgroundColor: bgcolor, color: txtcolor }, children: text }));
}
export default CustomButton;
