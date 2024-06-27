remember type="module"

```html
<script type="module" src="index.js"></script>
```

```js
// child.js
// remember ".js" when work with raw html
import i18n from './i18n.js';

export const childHello = () => {
  console.log('child hello', i18n.getLang());
};
```

```js
// index.js
import { childHello } from './child.js';
import i18n from './i18n.js';

i18n.setLang('en');
childHello(); // hello en
i18n.setLang('vn');
childHello(); // hello vn
```
