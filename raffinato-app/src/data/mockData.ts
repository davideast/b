import type { Product, Category, NavItem } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'featured', label: 'Featured', isActive: true },
  { id: 'classics', label: 'Classics', isActive: false },
  { id: 'milk-alt', label: 'Milk & Alt', isActive: false },
  { id: 'seasonal', label: 'Seasonal', isActive: false },
];

export const FEATURED_PRODUCT: Product = {
  id: 'cortado',
  name: 'Cortado',
  description: 'Equal parts espresso and warm milk. Smooth, balanced, and perfect for sipping.',
  price: 4.5,
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Msut8lonDlU9UF2LxfzhNGog8AhHQ52lmSGkWsTWt18ozGIzTGCD667MfVmDTa-gONIL6MfxrBlrKsDGfSFIDog1tEOcaVXoQw807Rb_qQ44zK5amBbIKki2j_WeWV3W_eeVq_JNKCXXP0JmL1uwaqEekeACr1b5nN-Al3RIpdGuZx33SrkVtjQgijmizO6VyRlOkZbIO57a5gGrUtJQPUXDreRpG60XkpiQx8tyAAuB_lxxpsaPV5_wUv-eZh9EkbD9nJqsAxk',
  altText: 'Close up of a cortado in a clear glass on a wooden table',
  isFeatured: true,
  tag: "Barista's Choice"
};

export const ESPRESSO_CLASSICS: Product[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Double Shot',
    price: 3.5,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSt7th_DHmRLS2d3ftyniRHocWIIVcS1Hdioj4z-Q0LnlZBUBQJprqpaVTh6up_gdfgcO5SvaHi-GDLpy56gms30uzoj4F6wUUQ99alWhRqdJ-9PxSi59zch1tEtjNBLsoOV9l13mH0Off79CZjPpnB0rUaAp8seNxW6GZ3qTzJgaubEogMzL7Xt0fzrUCOurKaA8ZfGABrR-2vaHvshKeUmOMIy1tX2-Gh1l7q11rwhGZA8hltSHogwFSRIXNuZEhHUyYLsMrb0A',
    altText: 'Double shot espresso in a small white cup'
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Water & Espresso',
    price: 4.0,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKkiJgtPjMIZB4TX7MfGyGU0g6rm7Dc7BxFhGTBN8QXNqu0KR4_gH3dPd0wFgBsPjasjum_MusXZLNB5vnBmuCdbrY-ortskOXxyU3w9fa_Gjq4FUzElEk3aeEPMj1iLrlaZdOhBjHYdYGo6fKUIiyfdE5IpXVtbExL_k7iFjv-97nWr_Ya6xX3s0JZQpqBYTH036ruZ5T9N63XXVRo68E546N6JQ-Ve1wxqkV2ZaEjWoR3umXLusICM9J7L6iqOKYfgNlkD3ncKc',
    altText: 'Americano coffee in a black cup'
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Marked with foam',
    price: 4.2,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfym-ZclZFV8EzxClPa8E5CVRntrOt0vL9NQSpEa-La3-ZpPvP3D8KiD2ZppyPMOKWTBxdsLwUNOR8HIQT2oy3ddlM3lXr3fZiZGvdMHARvCZLtvJWcD0vtt3pAxtyX9uDWB3E_dZ59hrS30Hfk2CfqFWpFdZHkUgLPTonD3PRGvxSRvvrQtaPXNT__paYZ_kYA3vstev_rvRwFPo226kdpAcsK2xHDeDVaZJ07hi-vVgmvtKVyp1CoJWswjlpnW8oYAxhUs_XFdc',
    altText: 'Traditional Macchiato with foam dollop'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Rich foam',
    price: 4.5,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNgJCrpbCD7nIbw-VMJ7B0EzHaYd5OBfGPTZOimIP1MNKhvc5-iRio4vQkf5LlcNPIUg47vAd1HU3OAvdEn0o3Xi3Lk7eYeLvgsBY_0RKTWF-vPtQZydZYoA_JWD85T274L8kkWdeZYd_mLinIhi8dF5rRM6d8gi040bxBeNxZMkLoeO7Rja1C9lxvZS-D0JkbTMVZUMEWgtU-WeRUvTEuFHoeJaoRLpmmv5JCW0KNsq3erKkM4SDqAKM6WNznvnSeBy3oLa4HV2U',
    altText: 'Cappuccino with latte art in white cup'
  }
];

export const MILK_AND_ALT: Product[] = [
  {
    id: 'latte',
    name: 'Latte',
    description: 'Silky steamed milk',
    price: 5.0,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnqjigKJKi9c4vBuBHHIZmCDOOTYG2z_GpqQyjrPF6LJdGU3ovNKVv6OFPDNHIqv4YU8R-A8icyk5H2bzMnok10TGFT33MyoKevJplhg_17Y9-Ga35cMvU-PADLSH84eji_VkqBanssEWL6iXgTRorEtajGZKAYFinqbw-Pxv4QcBKULQ8eTMAh_x22_3eORBdiB6V-TbSjhP7JIhQmVEiwPWq84BbW0_DVvhjyObYtoUWUs9aDbxehjoWgPZz0q2EsoY7Nvx2UaI',
    altText: 'Latte art heart in ceramic cup'
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Thin microfoam',
    price: 4.8,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4JA_8I7LKAtT8Uo64SmQY4WqV-Ma23YhqtUuqYRO2g6AB_13-wB5Lh4PTNMnn_7ELrk_2Qua8vt2zoOFLVQqCZn7CVYDgO9PFxOHF9cjV0tRWjqC2mFnVfBT63atbb-O8CvoFztiLN_2pN7RZQwJPMlTVSQgnZwtn1NBIm10SIgqKKDcSuwpNxGaarcFmvU4SuBBauSLwVrLGnDl1KJAN0R8AAQ0mv0iO6jsgwS-mdxBj493VmJN7XKU6LnMNCWIasBknYCcnPu8',
    altText: 'Flat white coffee top down view'
  },
  {
    id: 'oat-latte',
    name: 'Oat Latte',
    description: 'Creamy & Dairy-free',
    price: 6.0,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUdohw2LcjPSF3Dd2tSUdArTI9KKlzI7EY6Fh74_-QKPHqj2ctxVY4GacOurBSwIxaE0T7grE8aLfeEZpc1V0p-1gUD_KSAC6R0ltN_BurpnNudACD0aEEzrkiVBoruLnviItrHHG3TkyDToFThSPH76QvtxTpre1o1azgeGzDOSTmpgYAU2E2rOG2jZjzn39RZAZqfSSvosfYDaYKlJTbdHrhI9DWYWSnAPhJeuJJLAFBo5j9C-gpw2SMQuCceswmLyv1HGEi71U',
    altText: 'Iced Oat Latte in glass'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Espresso & Cocoa',
    price: 5.5,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBplzXZLVf8zsw2hXOzsEYVexsSEaUHN7rY7Rw6Urdtpop2FNeM8RUuuzPMsV51j8v9eb5imrjiRDL-T-IKcKLY7_KVM9egRHZJ3jwYGb8yW6VaQSL3uptI5iyvlL7flzlzs3SnLUp7elDdBeKjfYlRytD5XWQAd0m5Ut-Xwq_gXcnfsAY58RqdrRJjgNDQ6xxutzFDTx3Zu96i7s3rrIaIYiliIUp8hjEyJfKnppFguaP5ndSfoitt_Bun-NKSpA43c9ZrW_R2IWw',
    altText: 'Dark chocolate mocha with whipped cream'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'menu', label: 'Menu', icon: 'local_cafe', isActive: true },
  { id: 'rewards', label: 'Rewards', icon: 'star' },
  { id: 'account', label: 'Account', icon: 'person' },
];
