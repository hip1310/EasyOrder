import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

interface InputProps {
    control: any;
    formState: {
        errors: Record<string, any>;
    };
    name: string;
    label: string;
    type?: string;
    rules?: {}
    style?:any
}

const Input: React.FC<InputProps> = ({ control, formState, name, label, type = 'text', rules = {}, style = {}}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={rules}
            render={({ field }) => (
                <TextField
                    style={style}
                    label={label}
                    type={type}
                    fullWidth
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    error={!!formState.errors[name]}
                    helperText={formState.errors[name] ? formState.errors[name].message : null}
                />
            )}
        />
    );
};

export default Input;