"use client";

import React from "react";
import { motion } from "framer-motion";
import Grid from "@/components/grid";

// assets

const Login = () => {
  return (
    <main className="">
      <Grid>
        <motion.div>
          <motion.form>
            <motion.div>
              <motion.div className="flex flex-col items-center justify-center">
                <motion.h1 className="text-2xl">Bem vindo de volta</motion.h1>
                <motion.h4 className="text-lg">
                  Por favor, digite seus dados para entrar.
                </motion.h4>
              </motion.div>
            </motion.div>
          </motion.form>
        </motion.div>
      </Grid>
    </main>
  );
};

export default Login;
