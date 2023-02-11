import AuthStateInerface from "./auth-state.inerface";
import SubjectStateInterface from "./subject-state.interface";

export default interface AppStateInterface {
  auth: AuthStateInerface;
  subject: SubjectStateInterface;
}
