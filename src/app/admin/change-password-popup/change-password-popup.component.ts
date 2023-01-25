import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { ThreeDServiceService } from 'src/app/service/three-dservice.service';

@Component({
  selector: 'app-change-password-popup',
  templateUrl: './change-password-popup.component.html',
  styleUrls: ['./change-password-popup.component.scss']
})
export class ChangePasswordPopupComponent implements OnInit {

  changePasswordForm: any;

  constructor(public fb: FormBuilder,
    public router: Router,
    private threeDService: ThreeDServiceService,
    private authService: AuthService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<ChangePasswordPopupComponent>) {
    this.changePasswordForm = this.fb.group({
      old_password: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required],
    })

  }

  ngOnInit() { }

  closePopup(): void {
    this.dialogRef.close();
  }

  changePassword() {
    // if (this.changePasswordForm.valid) {
    //   this.threeDService.show();
    //   let adminId: any = sessionStorage.getItem("adminId");
    //   let reqData = {
    //     id: parseInt(JSON.parse(adminId)),
    //     newPassword: this.changePasswordForm.value.new_password,
    //     oldPassword: this.changePasswordForm.value.old_password,
    //   }
    //   this.authService.changePassword(reqData).subscribe(res => {
    //     this.threeDService.hide();
    //     if (res.response == 200 && res.status == 'SUCCESS') {
    //       this.toastr.success(res.message);
    //       this.dialogRef.close();
    //     } else {
    //       this.toastr.error(res.message)
    //     }
    //   }, error => {
    //     this.threeDService.hide();
    //     this.toastr.error('Technical Issue.')
    //     console.log(error);
    //   });
    // } else {
    //   this.changePasswordForm.markAllAsTouched();
    // }
  }

  addValidation() {
    var pattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
    if (this.changePasswordForm.value.new_password) {
      if (pattern.test(this.changePasswordForm.value.new_password)) {
        if (this.changePasswordForm.value.new_password != this.changePasswordForm.value.confirm_password) {
          this.changePasswordForm.controls['confirm_password'].setErrors({ notMatching: true });
        }
        else {
          this.changePasswordForm.controls['confirm_password'].setErrors(null);
        }
      } else {
        this.changePasswordForm.controls['new_password'].setErrors({ notMatching: true });
      }
    }
  }


}
