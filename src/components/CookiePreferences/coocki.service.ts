'use client';
enum ECookieConsent {
  ad_storage = 'ad_storage',
  ad_user_data = 'ad_user_data',
  ad_personalization = 'ad_personalization',
  analytics_storage = 'analytics_storage',
};

type TConsentValue = 'granted' | 'denied';

type TCookieConsent = {
  [key in ECookieConsent]: TConsentValue;
}

export default class CookieConsent {
  private data: TCookieConsent;

  constructor(v: TCookieConsent) {
    this.data = {...v};
  }

  static __single: CookieConsent | undefined = undefined;

  static init () {
    if (this.__single) return this.__single;
    else if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag () {
        window.dataLayer.push(arguments);
      };

      const item = new this(this.readSvedConsent());
      item.applyDefault();
      
      this.__single = item;
      return item;
    } else return undefined;
  }

  applyDefault () {
    window.gtag('consent', 'default', {...this.data});
  }

  acceptAll () {
    this.data.ad_storage = 'granted';
    this.data.ad_user_data = 'granted';
    this.data.ad_personalization = 'granted';
    this.data.analytics_storage = 'granted';
  }

  rejectAll () {
    this.data.ad_storage = 'denied';
    this.data.ad_user_data = 'denied';
    this.data.ad_personalization = 'denied';
    this.data.analytics_storage = 'denied';
  }

  applyUpdate () {
    window.gtag('consent', 'update', {...this.data});
    CookieConsent.saveConsent(this.data);
  }

  static saveConsent (data:TCookieConsent) {
    localStorage.setItem(ECookieConsent.ad_storage, data.ad_storage);
    localStorage.setItem(ECookieConsent.ad_user_data, data.ad_user_data);
    localStorage.setItem(ECookieConsent.ad_personalization, data.ad_personalization);
    localStorage.setItem(ECookieConsent.analytics_storage, data.analytics_storage);
  }

  static readSvedConsent(): TCookieConsent {
    return {
      ad_storage: (localStorage.getItem(ECookieConsent.ad_storage) as TConsentValue | null) || 'denied',
      ad_user_data: (localStorage.getItem(ECookieConsent.ad_user_data) as TConsentValue | null) || 'denied',
      ad_personalization: (localStorage.getItem(ECookieConsent.ad_personalization) as TConsentValue | null) || 'denied',
      analytics_storage: (localStorage.getItem(ECookieConsent.analytics_storage) as TConsentValue | null) || 'denied',
    };
  }

  static userConsentExist() {
    return Boolean(
      localStorage.getItem(ECookieConsent.ad_storage)
      || localStorage.getItem(ECookieConsent.ad_user_data)
      || localStorage.getItem(ECookieConsent.ad_personalization)
      || localStorage.getItem(ECookieConsent.analytics_storage)
    )
  }
}