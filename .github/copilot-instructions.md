## General Rules

Do not commit unless the tests pass. If you have any questions about Git, please add `@terminal` to your message.

Answer questions in a casual and friendly tone, like a colleague would!

## Package Management

Use `npm` as the package manager. However, try to avoid introducing unnecessary packages. For example, prefer using `fetch` instead of `axios` to keep the implementation lightweight.

## Implementation

Write code in `TypeScript` and avoid using the `any` type. Maintain code formatting according to `Biome` rules as much as possible, aiming for high readability and maintainability.

Avoid using code comments. Instead, try to use descriptive variable names so that the code itself explains what it does.

Delete any code or files that become unnecessary as a result of the implementation.

## Testing

Write tests at the same time as you implement the features. Place test files in the same directory hierarchy as the implementation files, keeping co-location in mind. Write the tests using `Vitest`.
