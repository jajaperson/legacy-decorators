# `legacy-decorators`

A lightweight decorator which allows you to use decorators defined with the legacy syntax.

> ## :warning: Important
>
> The static decorators proposal got canceled, so this is useless.

This package aims to support the old decorator syntax in modern javascript.

## Usage

Simply import the `@_` decorator from `legacy-decorators`, and give it a legacy decorator expression as an argument

```js
import { @_ } from "legacy-decorators";
import { oldClassDecorator } from "./old-decorators";

@_(oldDecorator("arg1", "arg2"))
class C { }

```

```js
import { @_ } from "legacy-decorators";
import { oldMethodDecorator } from "./old-decorators";

class C {
  @_(oldDecorator("arg1", "arg2"))
  method() {}
}

```

## Explanation

In the legacy decorator syntax, a decorator was defined as any expression which evaluated to a function that took the arguments `target` (the target class or prototype), `name` (the name of the proporty or method, or `undefined` if a class is being decorated), and `descriptor` (the property descriptor for the property or method being decorated), and optionally returns an updated version of `descriptor`. The way decorators are defined has been overhauled completely, but this package allows you to continue using your older decorators by placing them as an argument for the `@_` decorator (defined using the new syntax).


```js
function legacyDecorator(arg) {
  return function decorator(target) {
    target.foo = arg
  };
}

// old syntax

@legacyDecorator("Hello, World!")
class C { }

// new syntax (with `legacy-decorators`)

import @_ from "legacy-decorators";

@_(legacyDecorator("Hello, World!"))
class C { }

```
