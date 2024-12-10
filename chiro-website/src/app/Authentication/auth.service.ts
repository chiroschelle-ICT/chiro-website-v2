import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../Model/Users';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LocalstorageService } from '../Services/localstorage.service';
import { FormGroup } from '@angular/forms';
import { Info } from '../Model/Info';
import { AdminService } from '../Admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private http : HttpClient, private localstorageservice : LocalstorageService, private as : AdminService) { }


  public isAuth = new BehaviorSubject<boolean>(false);

  private baseUsersRoute = 'http://localhost:3000/api/users';
  private baseUInfoRoute = 'http://localhost:3000/api/info';

  // API call to retrieve data
  getUserByName(un:string) : Observable<Users> {
    return this.http.get<Users>(this.baseUsersRoute+"/searchName/"+`${un}`);
  }

  // --  User Login --
  login(username: string, password: string, user: Users): { success: boolean, message: string } {
    const encryptedPw = this.localstorageservice.encrypt(password);
  
    // Check if the username matches
    if (username !== user.username) {
      return { success: false, message: 'Invalid username' };
    }
  
    // Check if the password matches
    if (encryptedPw !== user.password) {
      return { success: false, message: 'Invalid password' };
    }
  
    // Save user session and set auth status
    this.localstorageservice.saveData('usr', username);
    this.isAuth.next(true);
    return { success: true, message: 'Login successful' };
  }
  

  encryptAllDbPasswords() {
    this.as.getUsers().subscribe((data:Users[]) => {
      data.forEach(usr => {
        const newPw = usr.username +"123!";
        const encryptedPw = this.localstorageservice.encrypt(newPw)
        this.as.putUserPassword(usr.id, encryptedPw).subscribe()
      });
    })
  }

  // -- User Creation
  addUser(usr:any) {
    console.log(usr)
    return this.http.post(this.baseUsersRoute+"/add",usr);
  }
  addInfo(info:any) {
    console.log(info)
    return this.http.post(this.baseUInfoRoute+"/postInfo",info)
  }
}
