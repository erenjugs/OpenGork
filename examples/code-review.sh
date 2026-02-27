#!/usr/bin/env bash
# Code review example

# Review a file
cat << 'CODE' | ../gork "Review this Python code, be thorough" --savage
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(40):
    print(fibonacci(i))
CODE
