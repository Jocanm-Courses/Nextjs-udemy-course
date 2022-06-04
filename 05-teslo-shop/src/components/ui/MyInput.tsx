import { ErrorMessage } from '@hookform/error-message';
import { TextField } from '@mui/material';
import { useFormContext, useFormState } from 'react-hook-form';

interface IProps {
    name: string;
    label?: string;
    setValueAs?: (a: any) => any;

    placeholder?: string;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    spanStyle?: React.CSSProperties;
    [key: string]: any;

}

export const MyInput = ({

    name,
    label,
    labelStyle,
    titleStyle,
    inputStyle,
    spanStyle,
    setValueAs = (value: any) => typeof value === 'string' ? value.trim() : value,
    ...rest

}: IProps) => {

    const { register } = useFormContext()

    return (
        <label style={labelStyle}>
            {label && <h4 style={titleStyle}>{label}</h4>}
            <input
                style={inputStyle}
                autoComplete="off"
                {...register(name, {
                    setValueAs
                })}
                {...rest}
            />
            <ErrorMessage
                name={name}
                render={({ message }) => <span style={spanStyle} className="error-message">{message}</span>}
            />
        </label>
    )
}

interface Props {
    name: string;
    label?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    [key: string]: any;
}

export const MyTextField = ({ name, label, variant = "filled", ...rest }: Props) => {

    const { register } = useFormContext()
    const { errors } = useFormState()

    return (
        <TextField
            {...register(name)}
            label={label}
            variant={variant}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            {...rest}
        />
    )
}