// CUSTOM FORM VALIDATORS
import type { ValidationErrors } from "svelte-use-form";
import { nameRegEx, msgRegEx, emailRegEx } from "./regex";

// Lastname & Firstname
export const invalidName = (value: string): null | ValidationErrors => {
  return nameRegEx.test(value)
    ? null
    : { invalidName: "*caractère invalide / non supporté" };
}

// Message
export const invalidMessage = (value: string): null | ValidationErrors => {
  return msgRegEx.test(value)
    ? null
    : { invalidMessage: "*caractère invalide / non supporté" };
}

// Email
export const invalidEmail = (value: string): null | ValidationErrors => { 
  return emailRegEx.test(value)
  ? null
  : { invalidEmail: "*format invalide / non supporté" };
}
