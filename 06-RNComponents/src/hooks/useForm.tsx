import { useState } from "react";

interface Form {
  nombre: string,
  email: string,
  telefono: string,
  isSubscribed: boolean
}

const useForm = <T extends Object>(initialState: T) => {

  const [state, setState] = useState<T>(initialState);

  const onChange = <K extends Object>(value: K, field: keyof T) => setState({ ...state, [field]: value });

  return {
    form: state,
    ...state,
    onChange,
  };
};

export { useForm };
