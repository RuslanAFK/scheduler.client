import AuthResponseInterface from "./auth-response.interface";

export default interface AuthStateInerface {
  isLoading: boolean;
  error?: string;
  user?: AuthResponseInterface;
}
