# RDValidation
Validation function with javascript

```typescript
    Validation.isNumber("2000"); // .. true
    Validation.Prod([Validation.isAlphaNumeric, Validation.digit(5)])("a23b"); // true
    Validation.Prod([Validation.isNumber, Validation.digit(2)])("0123"); // false

```