# jquery-prevent
Simple toggle element to change the normal state of a button to a push state and vice versa

## Usage

To change to a push state
```javascript
$('#element').prevent('store').prevent('block')
```

To change to a push normal
```javascript
$('#element').prevent('restore')
```

To change to a push normal and set an attribute
```javascript
$('#element').prevent('restore', e => e.val(someValue))
```

## Test