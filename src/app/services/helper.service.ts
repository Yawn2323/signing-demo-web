import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public static base64toUtf8(base64: string) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

public static utf8toBase64(str: string) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
          return String.fromCharCode(('0x' + p1) as any);
      }));
  }

      /**
     * Convert base64 string to hex string
     * @param base64
     */
    public static base64toHex(base64: string) {
      let raw = atob(base64);
      let hex = '';
      for (let i = 0; i < raw.length; i++) {
          let _hex = raw.charCodeAt(i).toString(16)
          hex += (_hex.length == 2 ? _hex : '0' + _hex);
      }
      return hex;
  }



}
