export type Trusts = {
  version: "0.1.0";
  name: "trusts";
  instructions: [
    {
      name: "initVault";
      accounts: [
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "vaultId";
          type: "u64";
        },
        {
          name: "authority";
          type: "publicKey";
        },
        {
          name: "protocol";
          type: {
            defined: "Protocols";
          };
        },
        {
          name: "interval";
          type: {
            defined: "Intervals";
          };
        },
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "targets";
          type: {
            vec: "publicKey";
          };
        },
        {
          name: "crank";
          type: "publicKey";
        },
        {
          name: "percentage";
          type: "f64";
        }
      ];
    },
    {
      name: "depositVault";
      accounts: [
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "depositProtocol";
      accounts: [
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "luloUserAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "luloPromotionReserve";
          isMut: true;
          isSigner: false;
        },
        {
          name: "luloUserTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "luloProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "execContributions";
      accounts: [
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "payerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "withdrawVault";
      accounts: [
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "payerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "withdrawProtocol";
      accounts: [
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "luloUserAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "luloUserTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "luloPromotionReserve";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "payerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "luloProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "yieldVault";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "protocol";
            type: {
              defined: "Protocols";
            };
          },
          {
            name: "interval";
            type: {
              defined: "Intervals";
            };
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "vaultId";
            type: "u64";
          },
          {
            name: "targets";
            type: {
              vec: "publicKey";
            };
          },
          {
            name: "crank";
            type: "publicKey";
          },
          {
            name: "percentage";
            type: "f64";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "Protocols";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Solend";
          }
        ];
      };
    },
    {
      name: "Intervals";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Weekly";
          },
          {
            name: "Monthly";
          },
          {
            name: "Yearly";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "WrongVaultAuthority";
      msg: "Attempting to withdraw from vault with account that is not the authority";
    },
    {
      code: 6001;
      name: "TargetAccountInvalid";
      msg: "The target account provided is invalid";
    },
    {
      code: 6002;
      name: "MintNotSupported";
      msg: "This mint is not current supported";
    },
    {
      code: 6003;
      name: "TooManyTargets";
      msg: "Max targets specifiable is 5.";
    }
  ];
};

export const IDL: Trusts = {
  version: "0.1.0",
  name: "trusts",
  instructions: [
    {
      name: "initVault",
      accounts: [
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "vaultId",
          type: "u64",
        },
        {
          name: "authority",
          type: "publicKey",
        },
        {
          name: "protocol",
          type: {
            defined: "Protocols",
          },
        },
        {
          name: "interval",
          type: {
            defined: "Intervals",
          },
        },
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "targets",
          type: {
            vec: "publicKey",
          },
        },
        {
          name: "crank",
          type: "publicKey",
        },
        {
          name: "percentage",
          type: "f64",
        },
      ],
    },
    {
      name: "depositVault",
      accounts: [
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "depositProtocol",
      accounts: [
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "luloUserAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "luloPromotionReserve",
          isMut: true,
          isSigner: false,
        },
        {
          name: "luloUserTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "luloProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "execContributions",
      accounts: [
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "payerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "withdrawVault",
      accounts: [
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "payerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdrawProtocol",
      accounts: [
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "luloUserAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "luloUserTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "luloPromotionReserve",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "payerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "luloProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "yieldVault",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "protocol",
            type: {
              defined: "Protocols",
            },
          },
          {
            name: "interval",
            type: {
              defined: "Intervals",
            },
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "vaultId",
            type: "u64",
          },
          {
            name: "targets",
            type: {
              vec: "publicKey",
            },
          },
          {
            name: "crank",
            type: "publicKey",
          },
          {
            name: "percentage",
            type: "f64",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "Protocols",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Solend",
          },
        ],
      },
    },
    {
      name: "Intervals",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Weekly",
          },
          {
            name: "Monthly",
          },
          {
            name: "Yearly",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "WrongVaultAuthority",
      msg: "Attempting to withdraw from vault with account that is not the authority",
    },
    {
      code: 6001,
      name: "TargetAccountInvalid",
      msg: "The target account provided is invalid",
    },
    {
      code: 6002,
      name: "MintNotSupported",
      msg: "This mint is not current supported",
    },
    {
      code: 6003,
      name: "TooManyTargets",
      msg: "Max targets specifiable is 5.",
    },
  ],
};
