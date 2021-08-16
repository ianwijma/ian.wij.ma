import { ensureTextLength } from "src/libs/text";

export default function TTText({ children, width }) {
    return <>
    {ensureTextLength(children, width)}
    </>
}