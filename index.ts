const cores: string[] = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

const menorOuMaior = (posicaoCor: number, posicaoEscolha: number): string => {
  return posicaoCor > posicaoEscolha ? "inferior" : "superior";
};

const checarOrdemAlfabetica = (
  arr: string[],
  resposta: string,
  escolha: string
): string => {
  const posicaoCor = arr.indexOf(resposta);
  const posicaoEscolha = arr.indexOf(escolha);

  if (posicaoCor === -1 || posicaoEscolha === -1) {
    return null;
  }

  return menorOuMaior(posicaoCor, posicaoEscolha);
};

let coresSelecionadas: string[] = [];
for (let i = 0; i < 10; i++) {
  const index = Math.floor(Math.random() * cores.length);
  coresSelecionadas = [...coresSelecionadas, cores[index]];
}
coresSelecionadas = coresSelecionadas.sort();

const index = Math.floor(Math.random() * 10);

var resposta: string = coresSelecionadas[index];

console.log(resposta);

let disponiveis: string = "| ";
for (const cor of coresSelecionadas) {
  disponiveis += cor + " | ";
}

do {
  var escolha: string = prompt(
    `${disponiveis} \n\nQual será a cor que estou pensando?`
  );
  const ordem: string = checarOrdemAlfabetica(
    coresSelecionadas,
    resposta,
    escolha
  );

  if (!ordem) {
    alert(`Escolhe direto!`);
  } else if (resposta.toLowerCase() !== escolha.toLowerCase()) {
    alert(
      `Errowwww!\n Dica: sua cor é alfabeticamente ${ordem} à minha.\n Tente novamente :)`
    );
  }
} while (resposta.toLowerCase() !== escolha.toLowerCase());

alert("Parabéns, meu chapaa!!");
