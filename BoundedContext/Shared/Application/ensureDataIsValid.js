export default function ensureDataIsValid(data, schema) {
  const result = schema.safeParse(data)
  const errors = {}

  if (!result.success) {
    result.error.issues.forEach(error => {
      errors[error.path[0]] = error.message
    });
  }

  return errors
}
