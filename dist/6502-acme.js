// ACME Assembler 6502

hljs.registerLanguage(
  "6502-acme",
  (() => {
    "use strict";
    return (r) => ({
      name: "6502-acme",
      case_insensitive: true,
      keywords: {
        keyword:
          "ADC AND ASL BCC BCS BEQ BIT BMI BNE BPL BRK BVC BVS CLC CLD CLI CLV CMP CPX CPY DEC DEX DEY EOR INC INX INY JMP JSR LDA LDX LDY LSR NOP ORA PHA PHP PLA PLP ROL ROR RTI RTS SBC SEC SED SEI STA STX STY TAX TAY TSX TXA TXS TYA",
        built_in: "x|0 y|0",
        symbol:
          "scr by byte txt pet to source binary initmem wo word hex h align fi fill skip convtab ct text tx raw scrxor zone sl if ifdef ifndef for set do while endoffile warn error serious macro pseudopc cpu to al as rl rs",
      },
      contains: [
        r.COMMENT(";", "$", { relevance: 0 }),
        {
          className: "number",
          begin:
            "(-?)(\\$[a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        },

        r.QUOTE_STRING_MODE,
        {
          className: "string",
          begin: "'",
          end: "[^\\\\]'",
          illegal: "[^\\\\][^']",
        },
        { className: "symbol", begin: "^![A-Za-z0-9_.$]+:" },
      ],
    });
  })()
);
