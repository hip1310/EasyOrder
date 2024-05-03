'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@components/AuthContext";
import Input from "@components/Input";
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import { ErrorItem } from "@/interfaces";
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from "@components/PasswordInput";
import styles from "./styles.module.css";

type Credential = {
  email: string;
  password: string;
}

const IndexPage: React.FC = () => {
  const router = useRouter();
  const auth = useAuth()?.auth;
  const login = useAuth()?.login;
  const [errors, setErrors] = useState<ErrorItem[]>([])

  const { handleSubmit, control, formState } = useForm<Credential>();
  const onSubmit: SubmitHandler<Credential> = async (data) => {
    const response = await login(data);
    if (response?.error) {
      setErrors(response.errorMessage)
    }
  };

  useEffect(() => {
    if (auth?.token) {
      router.push('/home');
    }
  }, [auth?.token, router]);

  return (
    <>
      <div className={`vh-100 ${styles.login_page}`}>
        <div className={styles.login_left_container}>
          <img src='images/hot-air-balloon.jpg' className="img-fluid w-100 h-100" />
        </div>
        <div className={`d-flex flex-column justify-content-center align-items-center mx-auto ${styles.login_right_container}`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center">
              <p className={styles.credential_title}>Login</p>
            </div>
            {errors && (
              <div>
                {errors.map((e, index) => (
                  <Alert severity="error">{e}</Alert>
                ))}
              </div>
            )}
            <div className="mt-5 mb-4">
              <Input
                control={control}
                formState={formState}
                name="email" label="Email"
                type="text"
                rules={{
                  required: `email is required`,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: `Invalid email format`,
                  },
                  maxLength: {
                    value: 320,
                    message: `Invalid email length`,
                  }
                }} />
            </div>
            <div className="mb-4">
              <PasswordInput
                control={control}
                formState={formState} name="password"
                label="Password"
                type="password"
                rules={{
                  required: `Password is required`,
                  minLength: {
                    value: 8,
                    message: `Password must be at least 8 characters long`,
                  }
                }} />
            </div>
            <div>
              <Button
                fullWidth
                variant="contained"
                color='primary'
                type="submit">
                Submit
              </Button>
            </div>
          </form>
          <div  className={`${styles.link} mt-2 `} onClick={() => router.push("/forgot-password")}>
            <p>Forgot password?</p>
          </div>
          <div className={styles.link} onClick={() => router.push("/create-company")}>
            <p>Don’t have company? <span>Create</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
