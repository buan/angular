import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[passwordmatchValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordMatchValidatorDirective,
            multi: true
        }]
})
export class PasswordMatchValidatorDirective implements Validator {
    @Input()
    passwordmatchValidator: string;
    
    validate(control: AbstractControl): { [key: string]: any } | null {
    const passwdvalue = control.parent.get(this.passwordmatchValidator).value;
    if(passwdvalue && passwdvalue !== control.value)
    {
        return  {notequal:true};
    }    
   
    return null;
    }
}