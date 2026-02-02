import {Component} from '@angular/core';
import {PageTitleComponent} from "../../../components/page-title.component";
import Swal, {type SweetAlertOptions} from 'sweetalert2';
import {UiCardComponent} from "../../../components/ui-card.component";

@Component({
    selector: 'app-sweet-alerts',
    imports: [PageTitleComponent, UiCardComponent],
    templateUrl: './sweet-alerts.component.html',
    styles: ``
})
export class SweetAlertsComponent {
    thumbDown = `  <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-thumb-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 21.008a3 3 0 0 0 2.995 -2.823l.005 -.177v-4h2a3 3 0 0 0 2.98 -2.65l.015 -.173l.005 -.177l-.02 -.196l-1.006 -5.032c-.381 -1.625 -1.502 -2.796 -2.81 -2.78l-.164 .008h-8a1 1 0 0 0 -.993 .884l-.007 .116l.001 9.536a1 1 0 0 0 .5 .866a2.998 2.998 0 0 1 1.492 2.396l.007 .202v1a3 3 0 0 0 3 3z" /><path d="M5 14.008a1 1 0 0 0 .993 -.883l.007 -.117v-9a1 1 0 0 0 -.883 -.993l-.117 -.007h-1a2 2 0 0 0 -1.995 1.852l-.005 .15v7a2 2 0 0 0 1.85 1.994l.15 .005h1z" /></svg>`
    thumbUp = `<svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" /><path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" /></svg>`

    defaultButtonClasses = {
        confirmButton: 'btn btn-primary mt-2',
        cancelButton: 'btn btn-danger mt-2'
    };

    successToastConfig = {
        icon: 'success',
        text: 'Saved successfully!',
        showConfirmButton: false,
        timer: 1500,
        buttonsStyling: false,
        customClass: {confirmButton: this.defaultButtonClasses.confirmButton}
    };

    showAlert(options: any) {
        Swal.fire({
            buttonsStyling: false,
            customClass: {confirmButton: this.defaultButtonClasses.confirmButton},
            ...options
        });
    }

    bindPositionalAlert(position: SweetAlertOptions['position']) {
        const config: SweetAlertOptions = {
            icon: 'success',
            text: 'Saved successfully!',
            showConfirmButton: false,
            timer: 1500,
            buttonsStyling: false,
            position,
            customClass: {
                confirmButton: 'btn btn-primary mt-2'
            }
        };

        Swal.fire(config);
    }


    onConfirmAlert() {
        Swal.fire({
            title: 'Confirm Deletion',
            text: 'Are you sure you want to delete this item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            showCloseButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: 'btn btn-primary me-2 mt-2',
                cancelButton: 'btn btn-danger mt-2'
            }
        }).then(result => {
            if (result.isConfirmed) {
                this.showAlert({
                    title: 'Deleted!',
                    text: 'Your item has been successfully removed.',
                    icon: 'success'
                });
            }
        });
    }

    onCancelAlert() {
        Swal.fire({
            title: 'Delete File?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            showCloseButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: this.defaultButtonClasses.confirmButton + ' me-2',
                cancelButton: this.defaultButtonClasses.cancelButton
            }
        }).then(result => {
            if (result.isConfirmed) {
                this.showAlert({title: 'Deleted!', text: 'The file has been deleted.', icon: 'success'});
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                this.showAlert({title: 'Action Cancelled', text: 'Your file is safe.', icon: 'error'});
            }
        });
    }

    onImageAlert() {
        this.showAlert({
            title: 'Custom Branding',
            text: 'This alert includes a logo.',
            imageUrl: 'assets/images/logo-sm.png',
            imageHeight: 40,
            showCloseButton: true
        });
    }

    onAutoCloseAlert() {
        let timerInterval: any;
        Swal.fire({
            title: 'Auto Dismiss',
            html: 'Closing in <b></b> seconds...',
            timer: 2000,
            timerProgressBar: true,
            showCloseButton: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const b = Swal.getHtmlContainer()?.querySelector('b');
                    if (b) b.textContent = Math.ceil((Swal.getTimerLeft() ?? 0) / 1000).toString();
                }, 100);
            },
            willClose: () => clearInterval(timerInterval)
        });
    }

    onAjaxAlert() {
        Swal.fire({
            title: '<h4>Enter Your Email</h4>',
            input: 'email',
            inputPlaceholder: 'Enter your email address',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            showCloseButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: 'btn btn-primary me-2',
                cancelButton: 'btn btn-danger'
            },
            preConfirm: email =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (email === 'taken@example.com') reject('This email is already registered.');
                        else resolve(email);
                    }, 1500);
                }),
            allowOutsideClick: () => !Swal.isLoading()
        }).then(result => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Submitted!',
                    html: `Your email: ${result.value}`,
                    buttonsStyling: false,
                    customClass: {confirmButton: 'btn btn-primary'}
                });
            }
        })
    }
}
