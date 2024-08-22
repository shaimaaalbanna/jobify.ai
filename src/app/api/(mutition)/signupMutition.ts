import { useMutation } from "@tanstack/react-query";
import { signinValidation } from "@/app/validation/signinValidation";

import axios from "axios";

type User = {
  username: string;
  password: string;
};

const signupMutition = (userData: User) => {
  const parsedUser = signinValidation.parse(userData);

  return useMutation<User[]>({
    mutationKey: ["user1"],
    mutationFn: () =>
      axios
        .post("http://localhost:3000/api/rotes/signup", parsedUser)
        .then((res) => res.data.data),
  });
};

export default signupMutition;
