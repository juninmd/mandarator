```markdown
# AGENTS.md Guidelines

These guidelines are designed to ensure the consistent, efficient, and high-quality development of the AGENTS repository. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

*   All code should have a single, well-defined purpose.
*   Avoid duplicating functionality across different files or modules.
*   When a function or class performs a similar task, extract it into a reusable component.
*   Refactor code to eliminate redundancy.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for simplicity in both logic and code structure.
*   Avoid unnecessary complexity.
*   Prioritize readability and maintainability.
*   Use clear and concise variable and function names.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module should have one, and only one, reason to change.
*   **Open/Closed Principle:**  The system should be extensible without modification.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to depend on methods they do not use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement features and functionalities that are explicitly required.
*   Avoid building unnecessary code.
*   Focus on delivering working solutions and deferring non-essential details to later iterations.

## 5. Code Structure & Organization

*   **Modules:**  Organize code into logical modules with clear responsibilities.
*   **File Size:**  Each file should ideally be under 180 lines of code.  Exceptions for small utility functions are acceptable.
*   **Naming Conventions:**  Use consistent naming conventions throughout the codebase (e.g., snake_case).
*   **Comments:**  Write clear and concise comments to explain complex logic or design decisions.  Avoid over-commenting.
*   **Docstrings:**  Use docstrings to document functions, classes, and modules.  Follow a consistent style.
*   **Separate Concerns:** Design systems around distinct, independent concerns.

## 6. Testing & Coverage

*   **Unit Tests:** All code must have at least 80% coverage through unit tests.
*   **Test Driven Development (TDD):**  Prioritize writing tests *before* writing the code.
*   **Test Framework:** Utilize a testing framework (e.g., `pytest`, `unittest`) for robust testing.
*   **Mocking:**  *Only* use mocks and stubs for testing purposes.  Never rely on real implementations for testing.  Mocks should be designed to simulate desired behavior of external systems.
*   **Test Cases:**  Create comprehensive test cases that cover all key scenarios and edge cases.

## 7. Development Workflow

*   **Code Reviews:** All code must be reviewed by at least one other developer before being merged.
*   **Version Control:** Use Git for version control and adhere to a consistent branching strategy.
*   **Continuous Integration (CI):**  Implement a CI pipeline to automatically build, test, and push code changes.
*   **Static Analysis:** Employ static analysis tools to identify potential bugs and code style violations.

## 8.  Data Handling

*   Avoid using real data for testing.
*   Use consistent and documented data structures.

## 9.  Error Handling

*   Implement proper error handling to prevent unexpected crashes.
*   Return informative error messages to the user.

## 10.  Documentation

*   Document APIs and data structures clearly.
*   Provide examples for common use cases.

## 11.  Commit History

*   Maintain a clear and consistent commit history.
*   Use meaningful commit messages.

## 12.  Code Style

*   Adhere to a defined code style guide.
*   Use a linter to enforce style compliance.

## 13.  Security Considerations (Implicit)

*   All code must be secure by default.
*   Avoid security vulnerabilities through insecure coding practices.

These guidelines are critical for maintaining a high-quality, well-structured, and maintainable AGENTS.md repository.  Compliance with these principles will significantly benefit the overall development process.
```