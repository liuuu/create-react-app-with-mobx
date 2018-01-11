# how to use decorator

* yarn eject
* npm install --save-dev babel-plugin-transform-decorators-legacy
* touch `jsconfig.json` to let vscode-lint support `decorator`
  ```json
  {
    "compilerOptions": {
      "experimentalDecorators": true
    }
  }
  ```
* touch `.babelrc` to apply the babel-config (or modify `package.json`)
  ```js
   {
      "presets": ["react-app"],
      "plugins": ["transform-decorators-legacy"]
    }
  ```

## knowledge

> Note that even if you edit your `.eslintrc` file further, these changes will **only affect the editor integration**. They won’t affect the terminal and in-browser lint output. This is because Create React App intentionally provides a minimal set of rules that find common mistakes.

`package.json` eslint_rule

```js
"eslintConfig": {
    "extends": "react-app"
  }
```

`.eslintrc`
not yet apply the airbnb rules, the default rules come with `create-react-app` as above in `package.json` seems all good;
