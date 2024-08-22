import { signinschema } from "@/app/validation/signinSchema";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


type User = {
  username: string;
  password: string;
   confirmPassword: string;
};

const signupMutaion = (userData: User) => {
  
  const parsedUser = signinschema.parse(userData);

  return useMutation<User[]>({
    mutationKey: ["user1"],
    mutationFn: () =>
      axios
        .post("http://localhost:3000/api/signupRoute", parsedUser)
        .then((res) => res.data.data),
  });
};

export default signupMutaion;
