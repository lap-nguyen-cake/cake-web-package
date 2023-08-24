module.exports = {
  stories: [
    "../../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../core/theme/stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: false,
  },
  docs: {
    //👇 See the table below for the list of supported options
    autodocs: true,
    defaultName: "Docs",
  },
};
