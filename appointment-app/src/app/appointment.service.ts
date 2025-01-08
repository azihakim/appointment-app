import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  addAppointment(appointment: any) {
    return this.http.post(
      'http://localhost:5000/endpoint/add-appointment',
      appointment
    );
  }
  showAppointment() {
    return this.http.get('http://localhost:5000/endpoint/');
  }
  // Update item status
  updateItemStatus(id: string, data: any): Observable<any> {
    return this.http.put(
      'http://localhost:5000/endpoint/update-appointment/' + id,
      data
    );
  }

  // Hapus item
  deleteItem(id: string) {
    return this.http.delete(
      'http://localhost:5000/endpoint/delete-appointment/' + id
    );
  }
}
