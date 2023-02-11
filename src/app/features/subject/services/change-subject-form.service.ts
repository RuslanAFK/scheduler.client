import {Injectable} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import SubjectInterface from "../../../interfaces/subject.interface";


@Injectable()
export class ChangeSubjectFormService {

  form = new FormGroup({
    name: new FormControl(''),
    weekDay: new FormControl(0),
    count: new FormControl(1),
    professor: new FormControl(''),
    url: new FormControl(''),
    address: new FormControl(''),
    hours: new FormControl(0),
    minutes: new FormControl(0),
    type: new FormControl(0),
    week: new FormControl(0)
  })

  constructor () {}

  populateForm(single: SubjectInterface) {
    this.form.setValue({
      address: single.address ?? "",
      professor: single.professor ?? "",
      url: single.url ?? "",
      name: single.name,
      count: single.count,
      hours: single.hours,
      minutes: single.minutes,
      type: single.type,
      week: single.week,
      weekDay: single.weekDay
    })
  }

  clearForm() {
    this.form.setValue({
      address: '',
      count: 1,
      hours: 0,
      minutes: 0,
      name: '',
      professor: '',
      type: 0,
      url: '',
      week: 0,
      weekDay: 0
    })
  }

  generateSubject(id?: number) {
    let {value} = this.form;
    return {
      address: value.address ?? "",
      count: value.count ?? 1,
      hours: value.hours ?? 0,
      minutes: value.minutes ?? 0,
      name: value.name ?? "",
      professor: value.professor ?? "",
      type: value.type ?? 0,
      url: value.url ?? "",
      week: value.week ?? 0,
      weekDay: value.weekDay ?? 0,
      id: id ?? 0
    };
  }

  isValid = () => this.form.valid;
}
