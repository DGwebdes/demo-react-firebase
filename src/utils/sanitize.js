export function sanitizeMessage(text) {
    return text
        .replace(/<[^>]*>/g, '')
        .replace(/[\u200B-\u200D\uFEFF\u00AD]/g, '')  // zero-width chars
        .replace(/\n{2,}/g, '\n')             // collapse multiple newlines
        .replace(/\s{2,}/g, ' ')
        .trim()
}