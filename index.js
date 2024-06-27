import { childHello } from './child.js';
import i18n from './i18n.js';

i18n.setLang('en');
childHello(); // hello en
i18n.setLang('vn');
childHello(); // hello vn
