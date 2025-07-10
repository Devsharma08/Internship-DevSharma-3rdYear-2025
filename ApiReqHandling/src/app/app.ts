import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product-service';
import { Posts } from './interfaces/Posts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected title = 'ApiReqHandling';
  data: Posts[] = [];
  selectedData: Posts[] = [];
  updatingId: number | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.productService.getProduct().subscribe({
      next: (res: Posts[]) => {
        this.data = res;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  getSelectedData(id: number) {
    this.productService.selectedUser(id).subscribe({
      next: (res: Posts) => {
        this.updatingId = id;
        this.selectedData = [res];  // store as array for consistency
        console.log('Selected for update:', this.selectedData[0]);
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  submitData(formData: Posts) {
    if (this.updatingId !== undefined) {
      // 🔁 UPDATE FLOW
      this.updateUser(this.updatingId, formData);
    } else {
      // ➕ ADD FLOW
      this.productService.saveUser(formData).subscribe((data) => {
        if (data) this.getUsers();
      });
    }
  }

  updateUser(id: number, updatedData: Posts) {
    this.productService.updatePost(id, updatedData).subscribe({
      next: (res) => {
        console.log('Updated successfully:', res);
        this.updatingId = undefined;
        this.selectedData = [];
        this.getUsers();
      },
      error: (err) => {
        console.error('Update failed:', err);
      }
    });
  }

  deleteData(id: number) {
    this.productService.deletePost(id).subscribe({
      next: () => {
        console.log(`${id} deleted successfully`);
        this.getUsers();
      },
      error: (error) => console.error('Delete error:', error)
    });
  }
}
