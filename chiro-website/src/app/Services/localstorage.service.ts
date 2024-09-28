import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  key = environment.ENCRYPTION_KEY

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value))
  }

  public getData(key : string) {
    let data = localStorage.getItem(key) || ""
    return this.decrypt(data)
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear()
  }

}
