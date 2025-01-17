import { Injectable } from '@angular/core';
import * as navDataJSON from '../../assets/json/nav.json';
import * as loginInfoDataJSON from '../../assets/json/login-info.json';
import * as homeInfoDataJSON from '../../assets/json/home/home-about.json';
import * as fancyWordDataJSON from '../../assets/json/fancy-word.json';
import * as contactInfoDataJSON from '../../assets/json/contact-info.json'
import * as testimonialsDataJSON from '../../assets/json/home/testimonials.json';
import * as termsAndConditionJSON from '../../assets/json/terms-and-conditions.json';
import * as usefulInfoJSON from '../../assets/json/useful-info.json';


@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private contactInfoJSON = contactInfoDataJSON;

  constructor() {}

  get navItems() {
    return navDataJSON;
  }
  get loginInfo() {
    return loginInfoDataJSON;
  }
  get homeAboutInfo() {
    return homeInfoDataJSON;
  }
  get fancyWords() {
    return fancyWordDataJSON;
  }
  get contactInfo() {
    return this.contactInfoJSON.contactInfo;
  }
  get testimonials() {
    return testimonialsDataJSON;
  }
  get termsAndConditions() {
    return termsAndConditionJSON;
  }
  get usefulInformation() {
    return usefulInfoJSON;
  }
  
}