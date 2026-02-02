import SignInPage from "@/src/components/auth/SignInPage";
import ModalLayout from "@/src/components/layouts/ModalLayout";
import { ModalContext } from "@/src/context/ModalContext";
import { useContext, useEffect } from "react";

export default function SignIn() {
    const { setModalState } = useContext(ModalContext);

    useEffect(() => {
        setModalState(true);
    }, []);

    return (
        <ModalLayout>
            <SignInPage />
        </ModalLayout>
    );
}
