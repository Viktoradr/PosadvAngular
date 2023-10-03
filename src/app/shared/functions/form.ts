// import { AbstractControl, FormControl, FormArray, FormGroup } from "@angular/forms";

// export const countControls = (control: AbstractControl): number => {
//   if (control instanceof FormControl) {
//     return control.value.length > 0 ? 1 : 0;
//   }

//   if (control instanceof FormArray) {
//     return 0; //control.controls.reduce((acc, curr) => acc + countControls(curr), 1)
//   }

//   if (control instanceof FormGroup) {
//     return Object.keys(control.controls)
//       .map(key => control.get(key).value?.length)
//       .filter(x => x > 0)
//       .length;
//   }
// }