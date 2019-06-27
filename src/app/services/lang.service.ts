import { Injectable } from '@angular/core';
import CONFIG from "src/assets/language/spanish.json";

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() { }

  getNabvarObject(): any{
    return CONFIG.navbar;
  }

  getMainObject(): any{
    return CONFIG.main;
  }

  getMainAboutUs(): any{
    return CONFIG.aboutUs;
  }
}
