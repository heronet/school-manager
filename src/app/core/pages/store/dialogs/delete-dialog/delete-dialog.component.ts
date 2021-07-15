import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  isLoading = false;
  deleteSuccessful = false;
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, productId: string },
    private storeService: StoreService
  ) { }

  onNoClick(): void {
    this.isLoading = false;
    this.dialogRef.close(this.deleteSuccessful);
    this.deleteSuccessful = false;
  }
  onDeleteClick() {
    this.isLoading = true;
    this.storeService.deleteProduct(this.data.productId).subscribe(() => {
      this.isLoading = false;
      this.deleteSuccessful = true;
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.deleteSuccessful = false;
    })
  }

}
