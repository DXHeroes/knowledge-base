---
slug: "poor-code-quality"
aspect: "architecture"
stages:
  - "development"
short_description: Poor code quality mainly describes buggy code or code with high coupling and low cohesion that is difficult to maintain. Poor code quality can also lead to frequent code repetition or suspiciously slow implementation.
tags:
  - code quality
  - development
  - code
  - CI/CD
keywords:
  - bugs
  - quality
  - obsolete
  - team culture
  - libraries
---

# Poor Code Quality

## What Is the Poor Code Quality?

Poor code quality is an umbrella term for multiple issues with the codebase:

- code that exhibits buggy behavior
- slow implementation
- messy code with high coupling and low cohesion (a.k.a. spaghetti code)
- unmaintainable code
- usage of obsolete libraries/frameworks
- code repetition that leads to costly refactoring

If left unchecked, poor code quality can lead to issues in software delivery. It can bring the development to a halt. If the root causes are not addressed, it can lead to long periods of refactoring or a complete rewrite.

## Reasons for the Poor Code Quality

**Team Culture**

Poor code quality can be caused by a team that "doesn't give a shit". Make sure that the team knows their purpose.

Another reason may be a lack of senior expertise within the team.

Poor code quality can be caused by a long-term technical debt accumulation. Give the team some time for refactoring the code and pay-off the technical debt.

**Processes**

Non-existing or weak quality assurance practices can lead to poor code quality rather quickly.

- Ensure that your team does code reviews and pull requests.
- Introduce Unit Tests and Code Coverage to catch bugs early in development.
- Implement CI/CD so that code has to pass all the tests before it can be merged. For more information, see Continuous Integration and Continuous Delivery.
- Add testers into the team and employ manual testing.
- Ensure that your software development methodology (SCRUM/Kanban) leaves enough time for refactoring and writing a production quality code. Decrease the team workload and see if the code quality improves.

**Architecture**

Architecture that has a bad fit with the requirements of the software being written can be the cause for poor code quality.

If you have a problem with code repetition, ensure that your architecture supports code reuse.

The particular functionality you try to deliver can be difficult to implement within your current architecture. It can lead to verbose/buggy/hard to maintain code. Try to modify the architecture so it fits the use case.
