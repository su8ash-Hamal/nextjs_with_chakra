import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { chakra, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button } from "@chakra-ui/react";


// Don't keep unnecessary data schema which might lead to unexpected example.
const schema = yup.object({
    // firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
}).required();


type FormData = yup.InferType<typeof schema>;

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });


    const handleFormSubmit = (data: any) => {
        console.log("handles");
        console.log(data);
    }

    return (
        <chakra.form onSubmit={handleSubmit(handleFormSubmit)}>
            <FormControl isInvalid={!!register("age")}>
                <FormLabel>Age</FormLabel>
                <Input type='text' {...register("age")} />
                {errors.age &&
                    <FormErrorMessage>{errors.age.message}</FormErrorMessage>
                }
            </FormControl>

            <Button type="submit">Check</Button>
        </chakra.form>
    );
}
