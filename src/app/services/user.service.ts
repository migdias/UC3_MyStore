import { Injectable } from '@angular/core'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetails: User = new User()

  newUser (u: User): void {
    this.userDetails = u
  }

  getUser (): User {
    return this.userDetails
  }
}
