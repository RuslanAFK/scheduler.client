import AuthStateInterface from "./auth-state.interface";
import SubjectStateInterface from "./subject-state.interface";

export default interface AppStateInterface {
  auth: AuthStateInterface;
  subject: SubjectStateInterface;
}
