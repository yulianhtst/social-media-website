import SignUpPage from "@/src/components/auth/SignUpPage";
import ModalLayout from "@/src/components/layouts/ModalLayout";
import { ModalContext } from "@/src/context/ModalContext";
import { useContext, useEffect } from "react";

export default function SignUp() {
    const { setModalState } = useContext(ModalContext);

    useEffect(() => {
        setModalState(true);
    }, []);

    return (
        <ModalLayout>
            <SignUpPage />
        </ModalLayout>
    );
}
