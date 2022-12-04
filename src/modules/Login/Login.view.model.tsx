import { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const useLoginViewModal = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (key: string, value: string) => {
    setForm((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const isDisabledSignInButton = useMemo(() => {
    return form.email === "" || form.password === "";
  }, [form]);

  return {
    form,
    handleChangeForm,
    isDisabledSignInButton,
    navigation,
  };
};

export default useLoginViewModal;
