import { useDispatch } from "react-redux";
import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../redux/actionTypes";
import { useState } from "react";
import { Button, Input, VStack } from "@chakra-ui/react";

export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch = useDispatch();

  const handleLogin = () => {
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILURE, payload: "Login failed" });
      });
  };

  return (
    <VStack>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
    </VStack>
  );
};
