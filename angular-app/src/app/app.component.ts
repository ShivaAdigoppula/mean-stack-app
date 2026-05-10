import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MEAN Stack Demo';
  message = '';
  newMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMessage();
  }

  loadMessage(): void {
    this.http.get<any>('http://52.90.242.211:3000/api/message').subscribe({
      next: (res) => {
        this.message = res.text;
      },
      error: (err) => {
        console.error('Error loading message:', err);
      }
    });
  }

  saveMessage(): void {
    if (!this.newMessage.trim()) return;

    this.http.post<any>('http://52.90.242.211:3000/api/message', {
      text: this.newMessage
    }).subscribe({
      next: (res) => {
        this.message = res.text;
        this.newMessage = '';
      },
      error: (err) => {
        console.error('Error saving message:', err);
      }
    });
  }
}