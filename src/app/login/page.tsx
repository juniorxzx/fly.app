"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Grid from "@/components/grid";
import Image from "next/image";

// assets
import { IoEyeOffOutline, IoEyeOutline, IoLogoApple } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [viewPass, setViewPass] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const router = useRouter();
  const handleForm = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <main className="">
      <Grid>
        <motion.div className="overflow-hidden flex md:py-4">
          <motion.div className="hidden md:flex"></motion.div>
          <motion.form className="mt-2">
            <motion.div className="flex flex-col justify-center items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.7 }}
              >
                <Image src={Logo} alt="" width={200} className="" priority />
              </motion.div>
              <motion.div className="flex flex-col items-center justify-center">
                <motion.h1
                  className="text-2xl"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7 }}
                >
                  Bem vindo de volta
                </motion.h1>
                <motion.h4
                  className="text-lg"
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.7 }}
                >
                  Por favor, digite seus dados para entrar.
                </motion.h4>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className="mt-6 flex flex-col gap-6"
            >
              <motion.fieldset className="flex flex-col">
                <motion.label>Email</motion.label>
                <motion.input
                  type="email"
                  className="text-dark-gray rounded-lg px-1 h-8 bg-off-white "
                  placeholder="usuario@fly.com"
                />
              </motion.fieldset>
              <motion.fieldset className="flex flex-col">
                <motion.div className="flex justify-between">
                  <motion.label>Senha</motion.label>
                  <motion.a>Esqueceu a senha?</motion.a>
                </motion.div>

                <motion.div className="flex w-full bg-off-white justify-between items-center gap-2 rounded-lg px-1 h-8">
                  <motion.input
                    type={`${viewPass ? "text" : "password"}`}
                    className="text-dark-gray w-full h-full bg-transparent"
                    placeholder="Digite sua senha"
                  />
                  {viewPass ? (
                    <IoEyeOutline
                      size={20}
                      className="text-dark-gray"
                      onClick={() => setViewPass(!viewPass)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      size={20}
                      className="text-dark-gray"
                      onClick={() => setViewPass(!viewPass)}
                    />
                  )}
                </motion.div>
              </motion.fieldset>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 600 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className="mt-2"
            >
              <motion.div className="" onClick={() => setCheck(!check)}>
                <motion.input
                  type="checkbox"
                  checked={check}
                  onChange={() => setCheck(!check)}
                />
                <motion.span className="ml-2">Manter Conectado</motion.span>
              </motion.div>
              <motion.div className="mt-2">
                <motion.button
                  className="w-full px-4 py-2  bg-off-white text-dark-gray rounded-lg "
                  onClick={handleForm}
                >
                  Entrar
                </motion.button>
                <motion.div className="flex w-full items-center gap-2 mt-4">
                  <div className="flex h-[1px] w-full bg-gradient-to-r from-dark-gray to-off-white"></div>
                  <span className="text-sm">OU</span>
                  <div className="flex h-[1px] w-full bg-gradient-to-r to-dark-gray from-off-white"></div>
                </motion.div>
                <motion.div className="flex w-full flex-col  gap-4 mt-4">
                  <motion.button
                    disabled
                    className="flex justify-center items-center w-full px-4 py-2  bg-off-white text-dark-gray rounded-lg "
                  >
                    <FcGoogle size={24} />
                  </motion.button>
                  <motion.button
                    disabled
                    className="flex justify-center items-center w-full px-4 py-2  bg-off-white text-dark-gray rounded-lg "
                  >
                    <IoLogoApple size={24} />
                  </motion.button>

                  <motion.div className="flex w-full items-center gap-2 mt-4">
                    <h1 className="text-sm">
                      Ainda não tem conta?{" "}
                      <Link href={"/"} className="text-light-salmon">
                        Crie agora
                      </Link>
                    </h1>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.form>
        </motion.div>
      </Grid>
    </main>
  );
};

export default Login;
