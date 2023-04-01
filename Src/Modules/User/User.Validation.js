import Joi from "joi"
export const signUpValidatinon = {
    body: Joi.object().required().keys({
        name: Joi.string().required().messages({
            "string.min": "Username must contain at least 5 charachters",
        }),
        password: Joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)).required().messages({
            "string.min": "password must contain at least 5 charachters",
            "string.pattern.base": "Password must match the regex",
        }),
        confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
            "any.only": "confirmation password must match password",
        }),
        email: Joi.string().required().email().allow({ tlds: { allow: ["com", "net"] }, minDomainSegments: 2 }).messages({
            "string.email": "Email format in-valid",
            "any.required": "please enter your email",
        }),
    })
}
export const loginValidation = {
    body: Joi.object().required().keys({
        password: Joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)).required().messages({
            "string.min": "password must contain at least 5 charachters",
            "string.pattern.base": "Password must match the regex",
        }),
        email: Joi.string().required().email().allow({ tlds: { allow: ["com", "net"] }, minDomainSegments: 2 }).messages({
            "string.email": "Email format in-valid",
            "any.required": "please enter your email",
        }),
    })
}
export const updateValidation = {
    body: Joi.object().required().keys({
        password: Joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)).required().messages({
            "string.min": "password must contain at least 5 charachters",
            "string.pattern.base": "Password must match the regex",
        }),
        confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
            "any.only": "confirmation password must match password",
        }),
    })
}
export const forgetPasswordValidation = {
    body: Joi.object().required().keys({
        email: Joi.string().required().email().allow({ tlds: { allow: ["com", "net"] }, minDomainSegments: 2 }).messages({
            "string.email": "Email format in-valid",
            "any.required": "please enter your email",
        }),
    })
}
export const resetPasswordValidation = {
    body: Joi.object().required().keys({
        resetCode: Joi.string().max(6),
        password: Joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)).required().messages({
            "string.min": "password must contain at least 5 charachters",
            "string.pattern.base": "Password must match the regex",
        }),
        confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
            "any.only": "confirmation password must match password",
        }),
    })
}
