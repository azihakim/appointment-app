import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
}
