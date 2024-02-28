{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs
  ];
  idx.extensions = [
    "dsznajder.es7-react-js-snippets"
    "Wscats.eno"
    "Gydunhn.typescript-essentials"
    "PulkitGangwar.nextjs-snippets"
    "gengjiawen.vscode-postfix-ts"
    "ms-vscode.vscode-typescript-next"
    "lightyen.tailwindcss-intellisense-twin"
    "yoavbls.pretty-ts-errors"
    "christian-kohler.path-intellisense"
    "formulahendry.auto-complete-tag"
    "bradlc.vscode-tailwindcss"
    "Codeium.codeium"
  ];
  idx.previews = {
    previews = [
      {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        id = "web";
        manager = "web";
      }
    ];
  };
}