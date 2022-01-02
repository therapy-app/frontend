import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  initialLoading = new BehaviorSubject<boolean>(true)
  initialLoading$ = this.initialLoading.asObservable()

  currentLoadingText = new BehaviorSubject<string>('')
  currentLoadingText$ = this.currentLoadingText.asObservable()

  constructor() { }

  setLoadingText(message: string): void {
    this.currentLoadingText.next(message)
  }

  setLoadingTextQueue(messages: string[], delay: number = 850): void {
    messages.forEach((message, index) => {
      setTimeout(() => {
        this.setLoadingText(message)
      }, index * delay)
    })
  }
}
