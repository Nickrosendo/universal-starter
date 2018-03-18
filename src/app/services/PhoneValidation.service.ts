import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PhoneValidationService {
  phoneNumber: Number = 0;
  accountId: String = 'ACdb5abbcd04c4b0b89b6f996fbc2cbeb2';
  authToken: String = '91b07584d381c20af6a63e1b62065193';
  response: Boolean = false;

  constructor(private http: Http) { }

  validateNumber(number: any) {

    const headers = new Headers();
    // base64Encoded String
    const options = new RequestOptions({ headers });
    const url = `https://lookups.twilio.com/v1/PhoneNumbers/55-${number}?Type=carrier`;
    const __this = this;
    return this.http.get(url, options);

  }
}
