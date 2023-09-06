import * as yup from 'yup';
export const searchAndSelectValidation = yup.object().shape({

    selectedOptions: yup.array().min(1, 'Select at least one option'),
});
