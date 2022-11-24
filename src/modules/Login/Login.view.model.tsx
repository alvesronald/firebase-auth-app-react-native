import { useMemo, useState } from "react";




const useLoginViewModal = () => {
    const [form, setForm] = useState({
        email: "",
        password:"",
    });


    const handleChangeForm = (key: string, value:string) => {
        setForm((prevState) => ({
            ...prevState,
            [key]: value
        }));
    };


    const isDisabledSignInButton = useMemo(() => {
        return form.email === "" || form.password === "";
    },[form]);



    return {
        form,
        handleChangeForm,
        isDisabledSignInButton,
    };

};

export default useLoginViewModal;