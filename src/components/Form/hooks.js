import { createElement } from "react"
import * as yup from "yup"

export const sendEmail = async (data) => {
    const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data['user-name'],
            message: data['user-message'],
        })
    })
    return res
}
export const createFormElement = ({ input, classes, idx = null, register }) => {

    const element = createElement(input.tag, {
        name: input.name,
        type: input.type ? input.type : 'text',
        ...(input.placeholder ? { placeholder: input.placeholder } : null),
        ...(input.value ? { value: input.value } : null),
        className: classes ? classes : null,
        ...(idx ? { key: idx } : null),
        ...(register ? { ...register } : null),
    })
    return element
}

export const validationForm = (inputs) => {
    const validation = inputs.reduce((acc, input) => {
        if (input.validation) {
            acc[input.name] = {
                ...input.validation
            }
        }
        return acc
    }, {})

    return yup.object({
        'user-name': yup.string().min(2, validation['user-name'].min).required(validation['user-name'].require),
        'user-email': yup.string().email(validation['user-email'].email).required(validation['user-email'].require),
    }).required()
} 
