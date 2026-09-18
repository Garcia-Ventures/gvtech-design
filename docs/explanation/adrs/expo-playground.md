# ADR: Adopting Expo for Native Development & Playground

**Date:** 2026-02-19  
**Status:** Accepted  
**Author(s):** Garcia Ventures Engineering

---

## Context

As part of the [Architecture Pivot](./architecture-pivot.md), we must decide on the infrastructure for developing, testing, and demonstrating the React Native implementation of the GV Tech Design System (`@gv-tech/ui-native`).

The choice between the **Expo SDK** and the **Bare React Native CLI** affects:

1. The developer experience (DX) for contributors.
2. The ease of testing components on physical devices.
3. The complexity of CI/CD pipelines (native build orchestration).
4. The onboarding process for library consumers.

## Decision

We will adopt an **Expo-compatible strategy**, specifically utilizing the **Expo SDK** and **Continuous Native Generation (CNG)** for the playground and internal development.

### Implementation Details

| Aspect             | Decision                                                                                                                 |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Playground App** | Built with Expo to enable instant QR-code testing via Expo Go or Development Builds.                                     |
| **Native Library** | Developed as a standard React Native library that remains 100% compatible with "Bare" projects.                          |
| **Tooling**        | Utilize `@nx/expo` for workspace orchestration and EAS (Expo Application Services) for automated native builds.          |
| **Testing**        | **Vitest** (Unified). Native components are tested via `react-native-web` shims in Vitest, eliminating Babel/Jest bloat. |

## Rationale

1. **Lower Friction (DX):** Expo eliminates the need for developers to manually manage `/ios` and `/android` directories, Gradle files, or CocoaPods. Most contributors won't need Xcode or Android Studio to work on UI components.
2. **Instant Feedback:** The ability to share a QR code for a "Development Build" allows stakeholders to test new components on real devices without installing binaries.
3. **CI/CD Efficiency:** Nx supports Expo natively, allowing us to cache build outputs and run tests in a headless environment without the massive overhead of "Bare" native builds.
4. **Market Alignment:** In 2026, Expo is the industry standard for starting new React Native projects. Supporting it ensures we cater to the majority of our consumers while still maintaining "Bare" compatibility.

## Consequences

### Positive

- **Faster Onboarding:** New developers can start contributing to `ui-native` in minutes.
- **Unified CI:** Native linting and testing can be easily integrated into our existing CI workflows.
- **Improved Stability:** Expo SDK provides a stable, versioned platform for dependencies like `react-native-reanimated` and `react-native-svg`.

### Negative / Risks

- **Ejecting:** If we ever require a native dependency that has no Expo Config Plugin, we would need to maintain a custom plugin or utilize `prebuild` to customize native code. _Mitigation: We will prioritize components that use universal primitives and established plugins._
- **Bundle Size:** Some Expo SDK modules include extra code. _Mitigation: Since we are a library, this only affects the playground app; consumers only pay for what they import._

## References

- [Architecture Pivot ADR](./architecture-pivot.md)
- [Expo Continuous Native Generation (CNG)](https://docs.expo.dev/workflow/continuous-native-generation/)
- [Nx Expo Guide](https://nx.dev/recipes/expo)
