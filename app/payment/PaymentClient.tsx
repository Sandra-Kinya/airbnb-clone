import React from 'react';
import { toast } from 'react-hot-toast'; // Import toast for notifications

// Mock PaymentClient class
class PaymentClient {
  static async processPayment(cardNumber: string, expirationDate: string, cvv: string): Promise<boolean> {
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds
    return true; // Payment success
  }
  
  static async downloadReceipt(): Promise<void> {
    // Simulate receipt download
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay of 1 second
    toast.success('Receipt downloaded!');
  }
}

export default PaymentClient;
