export const breakpoints = {
  base: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  '2xl': 1400,
};

export const media = {
  // X-Small devices (portrait phones, less than 576px)
  // No media query for `xs` since this is the default
  gtXs: { minWidth: 414 },

  // Small devices (landscape phones, 576px and up)
  gtSm: { minWidth: 576 },

  // Medium devices (tablets, 768px and up)
  md: { maxWidth: 768 - 1 },
  gtMd: { minWidth: 768 },

  // Large devices (desktops, 992px and up)
  lg: { maxWidth: 992 - 1 },
  gtLg: { minWidth: 992 },

  // X-Large devices (large desktops, 1200px and up)
  gtXl: { minWidth: 1200 },

  // XX-Large devices (larger desktops, 1400px and up)
  gtXxl: { minWidth: 1400 },

  landscape: { orientation: 'landscape' },
};
