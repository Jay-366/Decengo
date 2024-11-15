"use client";

import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { base } from "wagmi/chains";
import { ReactNode, useState } from "react";
import { WagmiProvider, createClient } from "wagmi"; // You can use the WagmiProvider here

export function Providers(props: { children: ReactNode; initialState?: State }) {
  // Create the client manually
  const [client] = useState(() =>
    createClient({
      autoConnect: true, // Automatically connect to the wallet if available
      provider: base, // Use base chain or add other RPC provider configurations
    })
  );

  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider client={client}> {/* Updated for version 2.x */}
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={base} // Add baseSepolia for testing
        >
          {props.children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
