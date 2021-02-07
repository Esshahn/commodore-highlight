// ACME Assembler 6502

hljs.registerLanguage(
  "6502acme",
  (() => {
    "use strict";
    return (r) => ({
      name: "6502acme",
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

// BASIC 2.0, 3.5 and 7.0

hljs.registerLanguage(
  "commodore-basic",
  (() => {
    "use strict";
    return (r) => ({
      name: "commodore-basic",
      case_insensitive: true,
      keywords: {
        keyword:
          "ABS AND APPEND ASC ATN AUTO BACKUP BANK BEGIN BEND BLOAD BOOT BOX BSAVE BUMP CATALOG CHAR CHR$ CIRCLE CLOSE CLR CMD COLLECT COLLISION COLOR CONCAT CONT COPY COS DATA DCLEAR DCLOSE DEC DEF FN DELETE DIM DIRECTORY DLOAD DO DOPEN DRAW DS DS$ DSAVE DVERIFY EL ELSE END ENVELOPE ER ERR$ EXIT EXP FAST FETCH FILTER FN FOR FRE GET GET# GETKEY GO64 GOSUB GOTO GRAPHIC GSHAPE HEADER HELP HEX$ IF INPUT INPUT# INSTR INT JOY KEY LEFT$ LEN LET LIST LOAD LOCATE LOG LOOP MID$ MONITOR MOVSPR NEW NEXT NOT ON OPEN OR PAINT PEEK PEN (PI) PLAY POINTER POKE POS POT PRINT PRINT USING PRINT# PUDEF RCLR RDOT READ RECORD REM RENAME RENUMBER RESTORE RESUME RETURN RGR RIGHT$ RND RREG RSPCOLOR RSPPOS RSPRITE RUN RWINDOW SAVE SCALE SCNCLR SCRATCH SGN SIN SLEEP SLOW SOUND SPC( SPRCOLOR SPRDEF SPRITE SPRSAV SQR SSHAPE ST STASH STEP STOP STR$ SWAP SYS TAB( TAN TEMPO THEN TI TI$ TO TRAP TROFF TRON USR VAL VERIFY VOL WAIT WHILE WIDTH XOR",
      },
      contains: [
        r.COMMENT("REM", "$", { relevance: 0 }),
        {
          className: "number",
          begin: "[0-9]",
        },

        r.QUOTE_STRING_MODE,
        {
          className: "string",
          begin: "'",
          end: "[^\\\\]'",
          illegal: "[^\\\\][^']",
        },
      ],
    });
  })()
);
