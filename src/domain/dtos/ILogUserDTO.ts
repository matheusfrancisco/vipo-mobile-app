type ILogUserDTO =
  | {
      email: string;
      password: string;
    }
  | {
      token: string;
    };

export default ILogUserDTO;
