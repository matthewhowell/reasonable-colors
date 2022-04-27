/*! reasonable colors v0.4.0 | MIT License | https://github.com/matthewhowell/reasonable-colors */

/* ******

Format for JS objects: colors.<name><Shade>.<hex|rgb>
e.g colors.gray1.rgb, colors.sky5.hex

Available values for COLORNAME:
	gray,
	rose, raspberry, red, orange, cinnamon, amber, yellow, lime,
	chartreuse, green, emerald, aquamarine, teal, cyan, powder, sky
	cerulean, azure, blue, indigo, violet, purple, magenta, pink

Available values for SHADE:
	1, 2, 3, 4, 5, 6

Minimum contrast can be inferred by the difference between two SHADE numbers

- Difference of 2: (3:1)
- Difference of 3: (4.5:1)
- Difference of 4: (7:1)

reasonable-colors.css uses hex values. HSL, LCH, and RGB color spaces are available.

More information available at: https://www.reasonable.work/colors

****** */

const colors = {
  /* gray */
  gray1: {
    hex: "#f6f6f6",
    rgb: "rgb(246, 246, 246)",
  },
  gray2: {
    hex: "#e2e2e2",
    rgb: "rgb(226, 226, 226)",
  },
  gray3: {
    hex: "#8b8b8b",
    rgb: "rgb(139, 139, 139)",
  },
  gray4: {
    hex: "#6f6f6f",
    rgb: "rgb(111, 111, 111)",
  },
  gray5: {
    hex: "#3e3e3e",
    rgb: "rgb(62, 62, 62)",
  },
  gray6: {
    hex: "#222222",
    rgb: "rgb(34, 34, 34)",
  },

  /* rose */
  /* hue 1 */
  rose1: {
    hex: "#fff7f9",
    rgb: "rgb(255, 247, 249)",
  },
  rose2: {
    hex: "#ffdce5",
    rgb: "rgb(255, 220, 229)",
  },
  rose3: {
    hex: "#ff3b8d",
    rgb: "rgb(255, 59, 141)",
  },
  rose4: {
    hex: "#db0072",
    rgb: "rgb(219, 0, 114)",
  },
  rose5: {
    hex: "#800040",
    rgb: "rgb(128, 0, 64)",
  },
  rose6: {
    hex: "#4c0023",
    rgb: "rgb(76, 0, 35)",
  },

  /* raspberry */
  /* hue 2 */
  raspberry1: {
    hex: "#fff8f8",
    rgb: "rgb(255, 248, 248)",
  },
  raspberry2: {
    hex: "#ffdddf",
    rgb: "rgb(255, 221, 223)",
  },
  raspberry3: {
    hex: "#ff426c",
    rgb: "rgb(255, 66, 108)",
  },
  raspberry4: {
    hex: "#de0051",
    rgb: "rgb(222, 0, 81)",
  },
  raspberry5: {
    hex: "#82002c",
    rgb: "rgb(130, 0, 44)",
  },
  raspberry6: {
    hex: "#510018",
    rgb: "rgb(81, 0, 24)",
  },

  /* red */
  /* hue 3 */
  red1: {
    hex: "#fff8f6",
    rgb: "rgb(255, 248, 246)",
  },
  red2: {
    hex: "#ffddd8",
    rgb: "rgb(255, 221, 216)",
  },
  red3: {
    hex: "#ff4647",
    rgb: "rgb(255, 70, 71)",
  },
  red4: {
    hex: "#e0002b",
    rgb: "rgb(224, 0, 43)",
  },
  red5: {
    hex: "#830014",
    rgb: "rgb(131, 0, 20)",
  },
  red6: {
    hex: "#530003",
    rgb: "rgb(83, 0, 3)",
  },

  /* orange */
  /* hue 4 */
  orange1: {
    hex: "#fff8f5",
    rgb: "rgb(255, 248, 245)",
  },
  orange2: {
    hex: "#ffded1",
    rgb: "rgb(255, 222, 209)",
  },
  orange3: {
    hex: "#fd4d00",
    rgb: "rgb(253, 77, 0)",
  },
  orange4: {
    hex: "#cd3c00",
    rgb: "rgb(205, 60, 0)",
  },
  orange5: {
    hex: "#752100",
    rgb: "rgb(117, 33, 0)",
  },
  orange6: {
    hex: "#401600",
    rgb: "rgb(64, 22, 0)",
  },

  /* cinnamon */
  /* hue 5 */
  cinnamon1: {
    hex: "#fff8f3",
    rgb: "rgb(255, 248, 243)",
  },
  cinnamon2: {
    hex: "#ffdfc6",
    rgb: "rgb(255, 223, 198)",
  },
  cinnamon3: {
    hex: "#d57300",
    rgb: "rgb(213, 115, 0)",
  },
  cinnamon4: {
    hex: "#ac5c00",
    rgb: "rgb(172, 92, 0)",
  },
  cinnamon5: {
    hex: "#633300",
    rgb: "rgb(99, 51, 0)",
  },
  cinnamon6: {
    hex: "#371d00",
    rgb: "rgb(55, 29, 0)",
  },

  /* amber */
  /* hue 6 */
  amber1: {
    hex: "#fff8ef",
    rgb: "rgb(255, 248, 239)",
  },
  amber2: {
    hex: "#ffe0b2",
    rgb: "rgb(255, 224, 178)",
  },
  amber3: {
    hex: "#b98300",
    rgb: "rgb(185, 131, 0)",
  },
  amber4: {
    hex: "#926700",
    rgb: "rgb(146, 103, 0)",
  },
  amber5: {
    hex: "#523800",
    rgb: "rgb(82, 56, 0)",
  },
  amber6: {
    hex: "#302100",
    rgb: "rgb(48, 33, 0)",
  },

  /* yellow */
  /* hue 7 */
  yellow1: {
    hex: "#fff9e5",
    rgb: "rgb(255, 249, 229)",
  },
  yellow2: {
    hex: "#ffe53e",
    rgb: "rgb(255, 229, 62)",
  },
  yellow3: {
    hex: "#9c8b00",
    rgb: "rgb(156, 139, 0)",
  },
  yellow4: {
    hex: "#7d6f00",
    rgb: "rgb(125, 111, 0)",
  },
  yellow5: {
    hex: "#463d00",
    rgb: "rgb(70, 61, 0)",
  },
  yellow6: {
    hex: "#292300",
    rgb: "rgb(41, 35, 0)",
  },

  /* lime */
  /* hue 8 */
  lime1: {
    hex: "#f7ffac",
    rgb: "rgb(247, 255, 172)",
  },
  lime2: {
    hex: "#d5f200",
    rgb: "rgb(213, 242, 0)",
  },
  lime3: {
    hex: "#819300",
    rgb: "rgb(129, 147, 0)",
  },
  lime4: {
    hex: "#677600",
    rgb: "rgb(103, 118, 0)",
  },
  lime5: {
    hex: "#394100",
    rgb: "rgb(57, 65, 0)",
  },
  lime6: {
    hex: "#222600",
    rgb: "rgb(34, 38, 0)",
  },

  /* chartreuse */
  /* hue 9 */
  chartreuse1: {
    hex: "#e5ffc3",
    rgb: "rgb(229, 255, 195)",
  },
  chartreuse2: {
    hex: "#98fb00",
    rgb: "rgb(152, 251, 0)",
  },
  chartreuse3: {
    hex: "#5c9b00",
    rgb: "rgb(92, 155, 0)",
  },
  chartreuse4: {
    hex: "#497c00",
    rgb: "rgb(73, 124, 0)",
  },
  chartreuse5: {
    hex: "#264500",
    rgb: "rgb(38, 69, 0)",
  },
  chartreuse6: {
    hex: "#182600",
    rgb: "rgb(24, 38, 0)",
  },

  /* green */
  /* hue 10 */
  green1: {
    hex: "#e0ffd9",
    rgb: "rgb(224, 255, 217)",
  },
  green2: {
    hex: "#72ff6c",
    rgb: "rgb(114, 255, 108)",
  },
  green3: {
    hex: "#00a21f",
    rgb: "rgb(0, 162, 31)",
  },
  green4: {
    hex: "#008217",
    rgb: "rgb(0, 130, 23)",
  },
  green5: {
    hex: "#004908",
    rgb: "rgb(0, 73, 8)",
  },
  green6: {
    hex: "#062800",
    rgb: "rgb(6, 40, 0)",
  },

  /* emerald */
  /* hue 11 */
  emerald1: {
    hex: "#dcffe6",
    rgb: "rgb(220, 255, 230)",
  },
  emerald2: {
    hex: "#5dffa2",
    rgb: "rgb(93, 255, 162)",
  },
  emerald3: {
    hex: "#00a05a",
    rgb: "rgb(0, 160, 90)",
  },
  emerald4: {
    hex: "#008147",
    rgb: "rgb(0, 129, 71)",
  },
  emerald5: {
    hex: "#004825",
    rgb: "rgb(0, 72, 37)",
  },
  emerald6: {
    hex: "#002812",
    rgb: "rgb(0, 40, 18)",
  },

  /* aquamarine */
  /* hue 12 */
  aquamarine1: {
    hex: "#daffef",
    rgb: "rgb(218, 255, 239)",
  },
  aquamarine2: {
    hex: "#42ffc6",
    rgb: "rgb(66, 255, 198)",
  },
  aquamarine3: {
    hex: "#009f78",
    rgb: "rgb(0, 159, 120)",
  },
  aquamarine4: {
    hex: "#007f5f",
    rgb: "rgb(0, 127, 95)",
  },
  aquamarine5: {
    hex: "#004734",
    rgb: "rgb(0, 71, 52)",
  },
  aquamarine6: {
    hex: "#00281b",
    rgb: "rgb(0, 40, 27)",
  },

  /* teal */
  /* hue 13 */
  teal1: {
    hex: "#d7fff7",
    rgb: "rgb(215, 255, 247)",
  },
  teal2: {
    hex: "#00ffe4",
    rgb: "rgb(0, 255, 228)",
  },
  teal3: {
    hex: "#009e8c",
    rgb: "rgb(0, 158, 140)",
  },
  teal4: {
    hex: "#007c6e",
    rgb: "rgb(0, 124, 110)",
  },
  teal5: {
    hex: "#00443c",
    rgb: "rgb(0, 68, 60)",
  },
  teal6: {
    hex: "#002722",
    rgb: "rgb(0, 39, 34)",
  },

  /* cyan */
  /* hue 14 */
  cyan1: {
    hex: "#c4fffe",
    rgb: "rgb(196, 255, 254)",
  },
  cyan2: {
    hex: "#00fafb",
    rgb: "rgb(0, 250, 251)",
  },
  cyan3: {
    hex: "#00999a",
    rgb: "rgb(0, 153, 154)",
  },
  cyan4: {
    hex: "#007a7b",
    rgb: "rgb(0, 122, 123)",
  },
  cyan5: {
    hex: "#004344",
    rgb: "rgb(0, 67, 68)",
  },
  cyan6: {
    hex: "#002525",
    rgb: "rgb(0, 37, 37)",
  },

  /* powder */
  /* hue 15 */
  powder1: {
    hex: "#dafaff",
    rgb: "rgb(218, 250, 255)",
  },
  powder2: {
    hex: "#8df0ff",
    rgb: "rgb(141, 240, 255)",
  },
  powder3: {
    hex: "#0098a9",
    rgb: "rgb(0, 152, 169)",
  },
  powder4: {
    hex: "#007987",
    rgb: "rgb(0, 121, 135)",
  },
  powder5: {
    hex: "#004048",
    rgb: "rgb(0, 64, 72)",
  },
  powder6: {
    hex: "#002227",
    rgb: "rgb(0, 34, 39)",
  },

  /* sky */
  /* hue 16 */
  sky1: {
    hex: "#e3f7ff",
    rgb: "rgb(227, 247, 255)",
  },
  sky2: {
    hex: "#aee9ff",
    rgb: "rgb(174, 233, 255)",
  },
  sky3: {
    hex: "#0094b4",
    rgb: "rgb(0, 148, 180)",
  },
  sky4: {
    hex: "#007590",
    rgb: "rgb(0, 117, 144)",
  },
  sky5: {
    hex: "#00404f",
    rgb: "rgb(0, 64, 79)",
  },
  sky6: {
    hex: "#001f28",
    rgb: "rgb(0, 31, 40)",
  },

  /* cerulean */
  /* hue 17 */
  cerulean1: {
    hex: "#e8f6ff",
    rgb: "rgb(232, 246, 255)",
  },
  cerulean2: {
    hex: "#b9e3ff",
    rgb: "rgb(185, 227, 255)",
  },
  cerulean3: {
    hex: "#0092c5",
    rgb: "rgb(0, 146, 197)",
  },
  cerulean4: {
    hex: "#00749d",
    rgb: "rgb(0, 116, 157)",
  },
  cerulean5: {
    hex: "#003c54",
    rgb: "rgb(0, 60, 84)",
  },
  cerulean6: {
    hex: "#001d2a",
    rgb: "rgb(0, 29, 42)",
  },

  /* azure */
  /* hue 18 */
  azure1: {
    hex: "#e8f2ff",
    rgb: "rgb(232, 242, 255)",
  },
  azure2: {
    hex: "#c6e0ff",
    rgb: "rgb(198, 224, 255)",
  },
  azure3: {
    hex: "#008fdb",
    rgb: "rgb(0, 143, 219)",
  },
  azure4: {
    hex: "#0071af",
    rgb: "rgb(0, 113, 175)",
  },
  azure5: {
    hex: "#003b5e",
    rgb: "rgb(0, 59, 94)",
  },
  azure6: {
    hex: "#001c30",
    rgb: "rgb(0, 28, 48)",
  },

  /* blue */
  /* hue 19 */
  blue1: {
    hex: "#f0f4ff",
    rgb: "rgb(240, 244, 255)",
  },
  blue2: {
    hex: "#d4e0ff",
    rgb: "rgb(212, 224, 255)",
  },
  blue3: {
    hex: "#0089fc",
    rgb: "rgb(0, 137, 252)",
  },
  blue4: {
    hex: "#006dca",
    rgb: "rgb(0, 109, 202)",
  },
  blue5: {
    hex: "#00386d",
    rgb: "rgb(0, 56, 109)",
  },
  blue6: {
    hex: "#001a39",
    rgb: "rgb(0, 26, 57)",
  },

  /* indigo */
  /* hue 20 */
  indigo1: {
    hex: "#f3f3ff",
    rgb: "rgb(243, 243, 255)",
  },
  indigo2: {
    hex: "#deddff",
    rgb: "rgb(222, 221, 255)",
  },
  indigo3: {
    hex: "#657eff",
    rgb: "rgb(101, 126, 255)",
  },
  indigo4: {
    hex: "#0061fc",
    rgb: "rgb(0, 97, 252)",
  },
  indigo5: {
    hex: "#00328a",
    rgb: "rgb(0, 50, 138)",
  },
  indigo6: {
    hex: "#001649",
    rgb: "rgb(0, 22, 73)",
  },

  /* violet */
  /* hue 21 */
  violet1: {
    hex: "#f7f1ff",
    rgb: "rgb(247, 241, 255)",
  },
  violet2: {
    hex: "#e8daff",
    rgb: "rgb(232, 218, 255)",
  },
  violet3: {
    hex: "#9b70ff",
    rgb: "rgb(155, 112, 255)",
  },
  violet4: {
    hex: "#794aff",
    rgb: "rgb(121, 74, 255)",
  },
  violet5: {
    hex: "#2d0fbf",
    rgb: "rgb(45, 15, 191)",
  },
  violet6: {
    hex: "#0b0074",
    rgb: "rgb(11, 0, 116)",
  },

  /* purple */
  /* hue 22 */
  purple1: {
    hex: "#fdf4ff",
    rgb: "rgb(253, 244, 255)",
  },
  purple2: {
    hex: "#f7d9ff",
    rgb: "rgb(247, 217, 255)",
  },
  purple3: {
    hex: "#d150ff",
    rgb: "rgb(209, 80, 255)",
  },
  purple4: {
    hex: "#b01fe3",
    rgb: "rgb(176, 31, 227)",
  },
  purple5: {
    hex: "#660087",
    rgb: "rgb(102, 0, 135)",
  },
  purple6: {
    hex: "#3a004f",
    rgb: "rgb(58, 0, 79)",
  },

  /* magenta */
  /* hue 23 */
  magenta1: {
    hex: "#fff3fc",
    rgb: "rgb(255, 243, 252)",
  },
  magenta2: {
    hex: "#ffd7f6",
    rgb: "rgb(255, 215, 246)",
  },
  magenta3: {
    hex: "#f911e0",
    rgb: "rgb(249, 17, 224)",
  },
  magenta4: {
    hex: "#ca00b6",
    rgb: "rgb(202, 0, 182)",
  },
  magenta5: {
    hex: "#740068",
    rgb: "rgb(116, 0, 104)",
  },
  magenta6: {
    hex: "#44003c",
    rgb: "rgb(68, 0, 60)",
  },

  /* pink */
  /* hue 24 */
  pink1: {
    hex: "#fff7fb",
    rgb: "rgb(255, 247, 251)",
  },
  pink2: {
    hex: "#ffdcec",
    rgb: "rgb(255, 220, 236)",
  },
  pink3: {
    hex: "#ff2fb2",
    rgb: "rgb(255, 47, 178)",
  },
  pink4: {
    hex: "#d2008f",
    rgb: "rgb(208, 0, 143)",
  },
  pink5: {
    hex: "#790051",
    rgb: "rgb(121, 0, 81)",
  },
  pink6: {
    hex: "#4b0030",
    rgb: "rgb(75, 0, 48)",
  },
};

export default colors;
