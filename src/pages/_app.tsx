import { AuthContextProvider } from "@/src/context/AuthContextProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalContextProvider } from "@/src/context/ModalContextProvider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthContextProvider>
            <ModalContextProvider>
                <Component {...pageProps} />
            </ModalContextProvider>
        </AuthContextProvider>
    );
}
