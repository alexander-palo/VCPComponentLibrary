import { Injectable } from '@angular/core';

declare let toastr:any;

toastr.options =  {
        "positionClass" : "toast-bottom-right",
        "preventDuplicates": true,
        "timeOut": "3000"
    }

@Injectable()
export class ToastrService {

    clear(){
        toastr.clear();
    }
    success(title: string, message?: string ){
        toastr.success(title,message);
    }
    info(title: string, message?: string ){
        toastr.info(title,message);
    }
    warning(title: string, message?: string ){
        toastr.warning(title,message);
    }
    error(title: string, message?: string ){
        toastr.error(title,message);
    }
}