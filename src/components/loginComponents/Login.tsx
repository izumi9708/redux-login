import { Button, TextField } from "@mui/material";
import loginStyles from '../../styles/Login.module.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTopStatus } from '../../futures/status';

function Login() {
  const [inputStatus, setInputStatus] = useState(false);
  const dispatch = useDispatch();

  const loginClick = () => {
    const textField = document.getElementById('outlined-basic') as HTMLInputElement;

    if (textField.value.replace(/\s+/g, "") !== '') {
      console.log(textField.value);
      setInputStatus(false);
      dispatch(changeTopStatus())

    } else {
      alert('名前を入力してください');
      setInputStatus(true);
      textField.value = '';
    }

  }

  return (
    <div className={loginStyles.login}>
      <div className={loginStyles.loginWrap}>
        {inputStatus ?
          <TextField
            fullWidth
            id="outlined-basic"
            label="名前を入力してください"
            variant="outlined"
            color="secondary"
            InputLabelProps={{
              style: { fontSize: '16px' }
            }}
            size="medium"
            className={loginStyles.inputStyle}
            error
          />
          :
          <TextField
            fullWidth
            id="outlined-basic"
            label="名前を入力してください"
            variant="outlined"
            color="secondary"
            InputLabelProps={{
              style: { fontSize: '16px' }
            }}
            size="medium"
            className={loginStyles.inputStyle}
          />
        }
        <div>
          <div className={loginStyles.btnWrap}>
            <Button
              className={loginStyles.loginBtn}
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => loginClick()}
            >
              ログイン
            </Button>
          </div>
          <div className={loginStyles.btnWrap}>
            <Button
              className={loginStyles.loginBtn}
              variant="contained"
              size="large"
              color="success"
            >
              新規作成
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;