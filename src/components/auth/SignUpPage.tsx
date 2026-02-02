import SignUpModal from "../modals/SignUpModal/SignUpModal";

export default function SignUpPage() {
    return <SignUpModal handleClose={function (): void {
        throw new Error("Function not implemented.");
    } } />;
}
