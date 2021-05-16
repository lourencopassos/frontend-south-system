import React, { FormEvent, useState } from "react";
import { useForm } from "../../hooks/useForm";
import AppLayout from "../../layouts/AppLayout/app-layout.index";
import { ReactComponent as HidePassword } from "../../assets/hide.svg";
import { ReactComponent as ShowPassword } from "../../assets/show.svg";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();

  const [form, handleFormChange] = useForm({ email: "", password: "" });
  const [showṔasswordInput, setShowPasswordInput] =
    useState<string>("password");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    history.push("/main");
  };

  return (
    <>
      <AppLayout title={"Login"}>
        <div className="login-form__section">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-form__container">
              <div className="login-form__title">
                <p> Realize seu login</p>
              </div>
              <div className="login-form__fields">
                <div className="login-form__input-container">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleFormChange}
                      name="email"
                      required
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="login-form__input-container">
                  <div>
                    <label htmlFor="password">Senha</label>
                    <input
                      type={showṔasswordInput}
                      value={form.password}
                      onChange={handleFormChange}
                      name="password"
                      required
                      placeholder="Senha"
                    />
                    {showṔasswordInput === "" && (
                      <ShowPassword
                        onClick={() => setShowPasswordInput("password")}
                      />
                    )}
                    {showṔasswordInput === "password" && (
                      <HidePassword onClick={() => setShowPasswordInput("")} />
                    )}
                  </div>
                </div>
              </div>
              <div className="login-form__footer">
                <button> Acessar </button>
              </div>
            </div>
          </form>
        </div>
      </AppLayout>
    </>
  );
};

export default Login;
