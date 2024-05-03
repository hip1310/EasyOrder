import React, { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

interface PasswordInputProps {
    name: string;
    label: string;
    type?: string;
    rules?: {};
    control: any;
    formState: {
        errors: Record<string, any>;
    };
}

const PasswordInput = ({ control, formState, name, label, type = 'text', rules = {} }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleTogglePasswordVisibility = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      handleClickShowPassword();
    };

    return (

        <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={rules}
            render={({ field }) => (
                <TextField
                    label={label}
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    error={!!formState.errors[name]}
                    helperText={formState.errors[name] ? formState.errors[name].message : null}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleTogglePasswordVisibility}
                                    onMouseDown={handleTogglePasswordVisibility}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            )}
        />
    );
};

PasswordInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    rules: PropTypes.object,
    control: PropTypes.object.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object.isRequired,
    }).isRequired,
  };

export default PasswordInput;