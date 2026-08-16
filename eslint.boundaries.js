import boundaries from "eslint-plugin-boundaries";

export const eslintBoundariesConfig = {
  plugins: { boundaries },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "boundaries/elements": [
      { type: "app", pattern: "./src/app" },
      { type: "components", pattern: "./src/components/*" },
      { type: "pages", pattern: "./src/pages/*" },
      { type: "hooks", pattern: "./src/hooks" },
      { type: "types", pattern: "./src/types" },
      { type: "shared", pattern: "./src/shared" },
      { type: "store", pattern: "./src/store/*" },
    ]
  },
  rules: {
    "boundaries/element-types": [2, {
      default: "allow",
      rules: [
        {
          from: "pages",
          disallow: ["app"],
          message: "1. Error boundaries: Модуль нижележащего слоя (${file.type}) не может импортироваться в вышележащего слоя (${dependency.type}).",
        },
        {
          from: "components",
          disallow: ["app"],
          message: "2. Error boundaries: Модуль нижележащего слоя (${file.type}) не может импортироваться в вышележащего слоя (${dependency.type}).",
        },
        {
          from: "app",
          disallow: ["features"],
          message: "3. Error boundaries: Модуль нижележащего слоя (${file.type}) не может импортироваться в вышележащего слоя (${dependency.type}).",
        },
        {
          from: "store",
          disallow: ["app","hooks"],
          message: "4. Error boundaries: Модуль нижележащего слоя (${file.type}) не может импортироваться в вышележащего слоя (${dependency.type}).",
        },
        {
          from: "shared",
          disallow: ["app",'components'],
          message: "5. Error boundaries: Модуль нижележащего слоя (${file.type}) не может импортироваться в вышележащего слоя (${dependency.type})!",
        },
        {
          from: "hooks",
          disallow: ["utils"],
          message: "6. Error boundaries: Модуль нижележащего слоя (${file.type}) не может импортироваться в вышележащего слоя (${dependency.type}).",
        },
        {
          from: "types",
          disallow: ["*"],
          message: "7. Error boundaries: Модуль нижележащего слоя (${file.type}) не может импортироваться в вышележащего слоя (${dependency.type}).",
        },
      ]
    }],
    "boundaries/entry-point": [
      2,
      {
        default: "disallow",
        message:
          "8. Модуль (${file.type}) должен импортироваться через public API. Прямой импорт из ${dependency.source} запрещен!",
        rules: [
          {
            target: ["shared", "app", "hooks","types"],
            allow: "**",
          },
          {
            target: ["features","pages"],
            allow: ["index.(ts|tsx)", "*.page.tsx"],
          },
        ],
      },
    ],
  }
};