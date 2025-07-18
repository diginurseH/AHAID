import React from "react";

const AhaidLogo = ({ size = 48 }: { size?: number }) => (
  <img
    src="/lovable-uploads/9c132ccb-fa9f-49f2-bfab-ae2436d4cf65.png"
    alt="AHAID Logo"
    width={size}
    height={size}
    className="object-contain"
    style={{ maxHeight: size, maxWidth: size }}
    loading="lazy"
  />
);

export default AhaidLogo;