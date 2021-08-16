import { EMPTY_CHARACTER } from "src/constants/characters"

export function ensureTextLength(text, length, filler = EMPTY_CHARACTER) {
    if(text.length > length) {
        return text.subStr(0, length-2) + repeatText('.')
    }
    if(text.length < length) {
        return text + repeatText(filler, length-text.length)
    }
    return text
}

export function repeatText(text, times) {
    return Array.from(new Array(times)).join(text)
}