# Expo CLI: Uncommon Icon Rendering Error with @expo/vector-icons

This repository demonstrates a common yet often overlooked error when working with icons in Expo applications using the `@expo/vector-icons` package. The problem arises from incorrect import statements or improper configuration of the icon families within your components.

## Problem

The primary issue is that the icons may not render correctly, appearing as blank spaces or broken images. This occurs because of a mismatch between the expected icon family and the actual import, or because the component doesn't have the appropriate icon family configured.

## Solution

This repository provides a clear comparison of the incorrect and correct approaches to importing and using icons from `@expo/vector-icons`.  The solution focuses on ensuring the correct import path and utilizing the proper components for rendering icons.  The correct usage consistently results in successfully rendered icons.

## Setup

1. Clone the repository.
2. Run `npm install` or `yarn install` to install dependencies.
3. Start the development server using `expo start`. 

Review the `bug.js` and `bugSolution.js` files to understand the difference between the incorrect and correct implementations.