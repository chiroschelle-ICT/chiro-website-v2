import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  key = environment.ENCRYPTION_KEY

  private getKey(): CryptoJS.lib.WordArray {
    return CryptoJS.enc.Utf8.parse(this.key);
  }  

  public encrypt(txt: string): string {
    const key = CryptoJS.enc.Utf8.parse(this.key); // Ensure key is in correct format
    const encrypted = CryptoJS.AES.encrypt(txt, key, {
      mode: CryptoJS.mode.ECB, // Optional: specify mode
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  }
  
  public decrypt(txtToDecrypt: string): string {
    const key = CryptoJS.enc.Utf8.parse(this.key); // Ensure key is in correct format
    const decrypted = CryptoJS.AES.decrypt(txtToDecrypt, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  public old_encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  public old_decrypt(txtToDecrypt: string) {
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
