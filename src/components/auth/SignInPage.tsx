import SignInModal from "../modals/SignInModal/SignInModal";

export default function SignInPage() {
    return <SignInModal handleClose={function (): void {
        throw new Error("Function not implemented.");
    } } />
}