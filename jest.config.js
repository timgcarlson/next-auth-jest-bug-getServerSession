const nextJest = require("next/jest")

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

// Use these exports to resolve the "SyntaxError: Unexpected token 'export'" error
// But it will then result in a "ReferenceError: crypto is not defined" error
// https://github.com/vercel/next.js/discussions/34774#discussioncomment-2246460
// module.exports = async (...args) => {
//   const fn = createJestConfig(customJestConfig)
//   const res = await fn(...args)

//   res.transformIgnorePatterns = res.transformIgnorePatterns.map((pattern) => {
//     if (pattern === "/node_modules/") {
//       return "/node_modules/(?!jose)/"
//     }
//     return pattern
//   })

//   return res
// }
