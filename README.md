# concat-class-names
Concatinates multiple classnames into one class string.

## Usage
May take multiple strings or an array of strings
```
concatClassNames('class1', 'class2'); // 'class1 class2'
concatClassNames(['class1', 'class2']); // 'class1 class2'
concatClassNames('class1', 'class2', ['class3', 'class4']); // 'class1 class2 class3 class4'
```
If argument has a falsy value, it is ommited
```
concatClassNames('class1', '', 'class2'); // 'class1 class2'
concatClassNames('class1', isCondition && 'class2'); // 'class1 class2' or 'class1'
concatClassNames('class1', ['class2', false]); // 'class1 class2'
```
