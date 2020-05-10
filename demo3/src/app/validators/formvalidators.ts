import { Validators, AbstractControl, ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';
import { isEmpty } from 'rxjs/operators';

export class Formvalidators extends Validators {
    // static pincodeValidator(control : AbstractControl) : {[key : string]:boolean} | null{
    //     var patt= new RegExp('[0-9]');
    //     const isValid = patt.test(control.value);
    //     return isValid?{pincodeValidator :true} :null;
    //     // return null;
    // }
    static ageValidator(control: AbstractControl): { [key: string]: boolean } | null {

        if (control.value == undefined || control.value === '' || control.value == null) {
            return { 'required': true }
        }
        if (isNaN(control.value)) {
            return { 'pattern': true }
        }
        if (control.value < 18)
            return { 'min': true }
        if (control.value > 30)
            return { 'max': true }
        return null;
    }

    static ageValidator_builder(input1: number, input2: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            if (control.value == undefined || control.value === '' || control.value == null) {
                return { 'required': true }
            }
            if (isNaN(control.value)) {
                return { 'pattern': true }
            }
            if (control.value < input1)
                return { 'min': true }
            if (control.value > input2)
                return { 'max': true }
            return null;
        }
    }
    static passwordMatchValidator(fGroup: FormGroup): ValidationErrors | null {
        const passwordConrol = fGroup.controls['password'];
        const cnfpasswordConrol = fGroup.controls['confirmPassword'];
        // if (passwordConrol.value == null || passwordConrol.value === '' || cnfpasswordConrol.value == null || cnfpasswordConrol.value === ''){
        //     return null;
        // }

        if (passwordConrol.value !== cnfpasswordConrol.value) {
                return { mismatch: true }
            }
        return null;
    }
}
