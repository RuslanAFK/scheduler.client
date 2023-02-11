import AuthResponseInterface from "./auth-response.interface";

export default interface AuthStateInterface {
  isLoading: boolean;
  error?: string;
  user?: AuthResponseInterface;
}
