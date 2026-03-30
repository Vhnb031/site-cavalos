import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Imagens locais da pasta public não precisam de domínios externos
    // Mas precisamos forçar unoptimized para imagens estáticas locais em dev
    unoptimized: true,
  },
};

export default nextConfig;
