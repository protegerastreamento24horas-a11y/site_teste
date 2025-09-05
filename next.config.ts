import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurar o diretório raiz para resolver problemas com variáveis de ambiente
  turbopack: {
    root: "./"
  }
};

export default nextConfig;