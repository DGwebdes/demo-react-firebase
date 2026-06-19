export function sanitizeMessage(text) {
    return text
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, '')
        .trim()
}