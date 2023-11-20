import { Button, TextField } from "@mui/material";
import loginStyles from '../../styles/Login.module.css';

function Login() {
  return (
    <div className={loginStyles.login}>
      <div className={loginStyles.loginWrap}>
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
        <div>
          <div className={loginStyles.btnWrap}>
            <Button
              className={loginStyles.loginBtn}
              variant="contained"
              size="large"
              color="secondary"
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