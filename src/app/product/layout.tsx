// src/app/product/layout.tsx
import React from "react";

import { ethers } from "ethers";
import "../globals.css";

// Define the supported chains to avoid conflicts with other declarations



// Create the Wagmi client

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-100">{children}</main>
      </div>
    
  );
}
