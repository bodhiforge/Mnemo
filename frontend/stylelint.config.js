module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-recommended-vue", // Add this if using Vue
    ],
    rules: {
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: [
            "tailwind",
            "apply",
            "variants",
            "responsive",
            "screen",
            "layer",
          ],
        },
      ],
    },
  };
  