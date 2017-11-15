import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatTime]'
})
export class FormatTimeDirective {

    constructor(private el : ElementRef) { }

    private formatTime() {
        let oldValue : string = this.el.nativeElement.value.replace(/\D/, '');
        let newValue : string;

        if(oldValue.length > 2)
            newValue = oldValue.substr(0, 2) + ":" + oldValue.substr(2, 2);
        else
            newValue = oldValue;

        this.el.nativeElement.value = newValue;
    }

    @HostListener('keyup') onKeyup() {
        this.formatTime()
    }

}
