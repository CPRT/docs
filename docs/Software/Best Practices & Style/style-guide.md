# Style Guide
When working on large projects with a number of developpers contributing code, it can be useful to maintain a style guide to define standards that fill be followed to ensure consistency and readability across everyone's work. This document will evolve over time to contain the team's adopted standards and any conventions we wish to adopt.

## Python
### Linting
Use a linter to identify syntax errors and potential logic errors. [Pylint](https://pylint.org/) is installed by default if you are using VS Code, and [Mypy](https://mypy.readthedocs.io/en/stable/) is a static type checker which can be enabled to validate type-hinting.
### Typing
As of Python 3.5, Python has support for static type-hinting. Unlike strongly typed languages that you may be familiar with, Python is weakly typed so values of different types can be assigned to the same variable. While this is a powerful feature, it can also introduce errors. Type-hinting does not define the type of a variable but provides a hint to the interpreter as to what type we *want* this variable to be.

[PEP-484](https://www.python.org/dev/peps/pep-0484/) defines the standard for Python type-hinting. The most important examples to be aware of is typing for functions and individual variables.

This is an example of how to define a variable of type int:
```python
my_number: int = 9
```
This is an example of how to define a function which returns a string:
```python
def get_first_name(name: str) -> str:
    return name.split(" ")[0]
```
### Naming Conventions
Follow PEP-8 for naming convention:  

| Type | Naming Convention | Example |
| ---  | ---               | ---     |
| Function | Use a lowercase word or words. Separate words by underscores to improve readability. | function, my_function |
| Variable | Use a lowercase single letter, word, or words. Separate words with underscores to improve readability. | x, var, my_variable |
| Class | Start each word with a capital letter. Do not separate words with underscores. This style is called camel case. | Model, MyClass |
| Method | Use a lowercase word or words. Separate words with underscores to improve readability. | class_method, method |
| Constant | Use an uppercase single letter, word, or words. Separate words with underscores to improve readability. | CONSTANT, MY_CONSTANT, MY_LONG_CONSTANT |
| Module | Use a short, lowercase word or words. Separate words with underscores to improve readability. | module.py, my_module.py |
| Package | Use a short, lowercase word or words. Do not separate words with underscores. | package, mypackage |