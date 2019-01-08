```
babel -V
```
If it is not verion 7 or higher

```
npm uninstall babel-cli -g
npm uninstall babel-core -g
```
And
```
npm install @babel/cli -g
npm install @babel/core -g
```
If you are using Jest run
```
npm install babel-core@7.0.0-bridge.0 --save-dev
```

```
package.json中babel-开头的都改成@babel/
babel-core     @babel/core
```