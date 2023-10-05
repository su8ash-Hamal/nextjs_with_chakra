import * as Yup from 'yup';

export const OpeningHoursValidationSchema = Yup.object().shape({
    sunday: Yup.array().of(
        Yup.object().shape({
            startTime: Yup.date().required('Start time is required'),
            closeTime: Yup.date()
                .required('Close time is required')
                .test('is-greater', 'Start time must be greater than previous close time', function (
                    closeTime
                ) {
                    const { timeSelectors } = this.parent;
                    const index = timeSelectors.indexOf(this.parent);

                    if (index > 0) {
                        const previousCloseTime = timeSelectors[index - 1].closeTime;
                        return closeTime > previousCloseTime;
                    }

                    return true;
                }),
        })
    ),

    monday: Yup.array().of(
        Yup.object().shape({
            startTime: Yup.date().required('Start time is required'),
            closeTime: Yup.date()
                .required('Close time is required')
                .test('is-greater', 'Start time must be greater than previous close time', function (
                    closeTime
                ) {
                    const { timeSelectors } = this.parent;
                    const index = timeSelectors.indexOf(this.parent);

                    if (index > 0) {
                        const previousCloseTime = timeSelectors[index - 1].closeTime;
                        return closeTime > previousCloseTime;
                    }

                    return true;
                }),
        })
    ),


    tuesday: Yup.array().of(
        Yup.object().shape({
            startTime: Yup.date().required('Start time is required'),
            closeTime: Yup.date()
                .required('Close time is required')
                .test('is-greater', 'Start time must be greater than previous close time', function (
                    closeTime
                ) {
                    const { timeSelectors } = this.parent;
                    const index = timeSelectors.indexOf(this.parent);

                    if (index > 0) {
                        const previousCloseTime = timeSelectors[index - 1].closeTime;
                        return closeTime > previousCloseTime;
                    }

                    return true;
                }),
        })
    ),

    wednesday: Yup.array().of(
        Yup.object().shape({
            startTime: Yup.date().required('Start time is required'),
            closeTime: Yup.date()
                .required('Close time is required')
                .test('is-greater', 'Start time must be greater than previous close time', function (
                    closeTime
                ) {
                    const { timeSelectors } = this.parent;
                    const index = timeSelectors.indexOf(this.parent);

                    if (index > 0) {
                        const previousCloseTime = timeSelectors[index - 1].closeTime;
                        return closeTime > previousCloseTime;
                    }

                    return true;
                }),
        })
    ),




    thursday: Yup.array().of(
        Yup.object().shape({
            startTime: Yup.date().required('Start time is required'),
            closeTime: Yup.date()
                .required('Close time is required')
                .test('is-greater', 'Start time must be greater than previous close time', function (
                    closeTime
                ) {
                    const { timeSelectors } = this.parent;
                    const index = timeSelectors.indexOf(this.parent);

                    if (index > 0) {
                        const previousCloseTime = timeSelectors[index - 1].closeTime;
                        return closeTime > previousCloseTime;
                    }

                    return true;
                }),
        })
    ),


    friday: Yup.array().of(
        Yup.object().shape({
            startTime: Yup.date().required('Start time is required'),
            closeTime: Yup.date()
                .required('Close time is required')
                .test('is-greater', 'Start time must be greater than previous close time', function (
                    closeTime
                ) {
                    const { timeSelectors } = this.parent;
                    const index = timeSelectors.indexOf(this.parent);

                    if (index > 0) {
                        const previousCloseTime = timeSelectors[index - 1].closeTime;
                        return closeTime > previousCloseTime;
                    }

                    return true;
                }),
        })
    ),

    saturday: Yup.array().of(
        Yup.object().shape({
            startTime: Yup.date().required('Start time is required'),
            closeTime: Yup.date()
                .required('Close time is required')
                .test('is-greater', 'Start time must be greater than previous close time', function (
                    closeTime
                ) {
                    const { timeSelectors } = this.parent;
                    const index = timeSelectors.indexOf(this.parent);

                    if (index > 0) {
                        const previousCloseTime = timeSelectors[index - 1].closeTime;
                        return closeTime > previousCloseTime;
                    }

                    return true;
                }),
        })
    ),
});



export type openingHoursForm = Yup.InferType<typeof OpeningHoursValidationSchema>;