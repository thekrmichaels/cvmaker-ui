export default function fillField(field, setValues, value) {
    setValues((values) => ({
        ...values,
        [field]: Array.isArray(values[field]) ? [...values[field], value] : value,
    }));
}