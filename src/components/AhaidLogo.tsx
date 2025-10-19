import React from "react";

const AhaidLogo = ({ size = 48, showFullName = false }: { size?: number; showFullName?: boolean }) => (
  <div className="flex items-center gap-3">
    <img
      src="/lovable-uploads/9c132ccb-fa9f-49f2-bfab-ae2436d4cf65.png"
      alt="NURSAERAHEALTH Logo"
      width={size}
      height={size}
      className="object-contain"
      style={{ maxHeight: size, maxWidth: size }}
      loading="lazy"
    />
    {showFullName && (
      <div className="hidden lg:block">
        <div className="text-sm font-bold text-green-800 tracking-wide">
          NURSAERA HEALTH
        </div>
        <div className="text-xs text-green-600 italic">
          Where care meets code
        </div>
      </div>
    )}
  </div>
);

export default AhaidLogo;