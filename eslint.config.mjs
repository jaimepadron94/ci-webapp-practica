import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },

    rules: {
      eqeqeq: "error",
      "no-var": "warn",
      "no-console": "warn",
      semi: ["error", "always"],
    },
  },

  {
    files: ["*.test.js"],
    rules: {
      "no-unused-vars": "off",
    },
  },
];
