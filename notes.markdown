Javascript Unit Testing
=======================

## Who are you?

Mike and Rob

## Why test?

- Stuff breaks. It's better to know sooner rather than later.

## Why automate?

- I don't know how
- It's too hard
- It costs too much

- We're here to help ...

- Unless you automate your tests, then:
  1. You'll spend ages testing manually, for every release; AND/OR
  2. You'll release defects into production
  
- Value of automation goes up with frequency of releases
- Corollary: NOT automating might be fine, if you're not releasing frequently
  
## Javascript unit-tests vs browser-driven integration tests

- Selenium, Watir, etc etc, are NOT unit-testing tools
- You need a bit of both, but more unit-tests

## Javascript testing guidelines

- Write less code
- Test the things that are most likely to break
- Favour tests that run fast

## Unobtrusive JS improves testability

- Test "behaviour" once, then declaratively add it to DOM elements
- Makes it easier to get your JS code running in a static HTML "fixture"

## Things to watch out for

- Fragile tests

## Which Javascript unit-testing framework should I use?

- Well, I dunno!
- We like ScrewUnit
