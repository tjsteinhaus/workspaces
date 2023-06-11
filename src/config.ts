export const validateEnv = (field: string): string => {
    const value = process.env[field]
    if (
        value === undefined ||
        value === null ||
        value === '' ||
        value.length === 0
    ) {
        throw new TypeError(`value for ${field} must be defined`)
    } else {
        return value
    }
}

export const CLIENT_ID = validateEnv('CLIENT_ID')
